import React, { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { useRouter } from 'next/navigation';
import { compose } from 'redux';

import Button from '@/components/Buttons/Button';
import TextButton from '@/components/Buttons/TextButton';
import PasswordInput from '@/components/Inputs/PasswordInput';
import TextInput from '@/components/Inputs/TextInput';
import { withLoginHoc, withLoginSelector } from '@/redux/slice/loginSlice/hoc';
import { API_CODE, Links } from '@/shared/constants';
import { ButtonTypes } from '@/shared/enums';
import { Regex } from '@/shared/utilities/regex';

const EmailForm = (props: any) => {
  const { clearAllLoginData, isLoginLoading, loginResponse, loginError } = props;

  const router = useRouter();

  const [email, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({
    header: '',
    username: '',
    password: '',
  });

  useEffect(() => {
    //go otp screen
    if (loginResponse.data) {
      const { errors } = loginResponse.data;
      if (errors.isOTPVerified === false) {
        router.replace(Links.VERIFY);
      }
    }
  }, [loginResponse]);

  useEffect(() => {
    if (loginError.payload) {
      const { status, data } = loginError.payload;
      if (status === API_CODE.STATUS_400) {
        setError(() => {
          return {
            header: data.errors.message,
            username: ' ',
            password: ' ',
          };
        });
      } else if (status === API_CODE.STATUS_404) {
        setError((prevState) => {
          return {
            ...prevState,
            header: data.errors.message,
            username: ' ',
          };
        });
      }
    } else {
      setError((prevState) => {
        return {
          ...prevState,
          header: '',
        };
      });
    }
  }, [loginError]);

  const onChangeText = (value: React.ChangeEvent<HTMLInputElement>, key: string) => {
    const text = value.target.value;

    if (key === 'email') {
      setMobile(text);
      setError((prevState) => {
        return {
          ...prevState,
          username: '',
        };
      });
    } else {
      setPassword(text);
      setError((prevState) => {
        return {
          ...prevState,
          password: '',
        };
      });
    }
  };

  const onClickSignin = () => {
    let hasError = false;

    clearAllLoginData();

    setError({
      header: '',
      password: '',
      username: '',
    });

    //Emaill address
    if (!email) {
      console.log('wewe');
      setError((prevState) => {
        return {
          ...prevState,
          username: 'Email address is required',
        };
      });
      hasError = true;
    } else {
      console.log('wiwi');
      if (!Regex.isEmailValid(email)) {
        setError((prevState) => {
          return {
            ...prevState,
            username: 'Please enter a valid email address',
          };
        });
        hasError = true;
      }
    }
    //End of email

    if (password === '') {
      setError((prevState) => {
        return {
          ...prevState,
          password: 'Password is required',
        };
      });
      hasError = true;
    }

    console.log(hasError);
    if (hasError) return;

    props.postLoginRequest({
      contact: email,
      password: password,
    });
  };

  return (
    <div className="mt-8">
      {error.header && (
        <div className="mb-8 flex flex-1 justify-center rounded bg-[var(--red50)] py-2">
          <p className={`font-poppins text-[16px] font-semibold leading-none text-[var(--red600)]`}>
            {error.header}
          </p>
        </div>
      )}
      <p className={`mb-2 font-poppins text-[16px] font-regular text-[#212529]`}>Email Address</p>
      <TextInput
        disabled={isLoginLoading}
        value={email}
        onEnter={onClickSignin}
        placeholder={'Email Address'}
        onChange={(value) => onChangeText(value, 'email')}
        className={`w-full rounded border border-neutral-900 px-4 py-3 font-poppins text-[16px] font-regular text-[#212529] placeholder-[#212529] outline-none 
        ${error.username !== '' && error.username !== ' ' ? 'mb-2' : 'mb-3'} ${
          error.username && '!border-[var(--red500)]'
        }
      `}
      />
      {error.username && error.username !== ' ' && (
        <p
          className={`mb-3 font-poppins text-[14px] font-regular leading-normal text-[var(--red500)]`}
        >
          {error.username}
        </p>
      )}
      <p className={`mb-2 font-poppins text-[16px] font-regular text-[#212529]`}>Password</p>
      <PasswordInput
        disabled={isLoginLoading}
        value={password}
        onEnter={onClickSignin}
        placeholder="Password"
        onChange={(value) => onChangeText(value, 'password')}
        className={`mb-2 flex rounded border border-neutral-900 text-[16px] text-[#212529]
        ${error.password && '!border-[var(--red500)]'}
        `}
        textInputClassname={`w-full outline-none rounded px-4 py-3 placeholder-[#212529] font-poppins font-regular`}
        eyeColor={error.password && 'var(--red500)'}
      />
      {error.password && error.password !== ' ' && (
        <p
          className={`mb-2 font-poppins text-[14px] font-regular leading-normal text-[var(--red500)]`}
        >
          {error.password}
        </p>
      )}
      <TextButton
        buttonText="Forgot Password"
        buttonClassName="mb-8"
        textClassName={`text-[13px] font-poppins font-semibold text-[#E60C2B]`}
      />
      <Button
        className={`flex ${
          isLoginLoading ? 'py-[15px]' : 'py-3'
        } w-full justify-center align-middle text-white`}
        variant={ButtonTypes.PRIMARY}
        disabled={isLoginLoading}
        onClick={onClickSignin}
      >
        {isLoginLoading ? (
          <CircularProgress size={24} className="text-white" />
        ) : (
          <p className={`font-poppins text-[14px] font-medium`}>Sign In</p>
        )}
      </Button>
    </div>
  );
};

const WrappedComponent = compose(withLoginHoc, withLoginSelector)(EmailForm);

export default WrappedComponent;
