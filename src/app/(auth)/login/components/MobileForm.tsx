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

const MobileForm = (props: any) => {
  const { clearAllLoginData, isLoginLoading, loginResponse, loginError } = props;

  const router = useRouter();

  const [mobile, setMobile] = useState('+63');
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
      switch (status) {
        case API_CODE.STATUS_400:
        case API_CODE.STATUS_401: {
          setError(() => {
            return {
              header: data.errors.message,
              username: ' ',
              password: ' ',
            };
          });
          break;
        }
        case API_CODE.STATUS_404: {
          setError((prevState) => {
            return {
              ...prevState,
              header: data.errors.message,
              username: ' ',
            };
          });
          break;
        }
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

    if (key === 'mobile') {
      if (!text.startsWith('+63') || text === '+6' || text === '+' || text === '') return;
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
      username: '',
      password: '',
    });

    //Mobile number
    if (mobile.trim() === '+63') {
      console.log('wowow');
      setError((prevState) => {
        return {
          ...prevState,
          username: 'Mobile number is required',
        };
      });
      hasError = true;
    } else {
      const formattedMobile = mobile.substring(3, 13);
      if (mobile.trim().length < 13 || !Regex.numberOnly(formattedMobile)) {
        setError((prevState) => {
          return {
            ...prevState,
            username: 'Please enter a valid mobile number',
          };
        });
        hasError = true;
      }
    }
    //End of mobile number

    //Password
    if (password === '') {
      hasError = true;
      setError((prevState) => {
        return {
          ...prevState,
          password: 'Password is required',
        };
      });
    }
    //End of password

    if (hasError) return;

    props.postLoginRequest({
      contact: mobile,
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
      <p className={`mb-2 font-poppins text-[16px] font-regular text-[#212529]`}>Mobile Number</p>
      <TextInput
        disabled={isLoginLoading}
        onEnter={onClickSignin}
        value={mobile}
        maxLength={13}
        onChange={(value) => onChangeText(value, 'mobile')}
        className={`w-full rounded border border-neutral-900 px-4 py-3 font-poppins text-[16px] font-regular text-[#212529] placeholder-[#212529] outline-none
         ${error.username !== '' && error.username !== ' ' ? 'mb-2' : 'mb-3'} ${
          error.username && '!border-[var(--red500)]'
        }`}
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
        onEnter={onClickSignin}
        value={password}
        placeholder="Password"
        onChange={(value) => onChangeText(value, 'password')}
        className={`mb-2 flex rounded border border-neutral-900 text-[16px] text-[#212529] ${
          error.password && '!border-[var(--red500)]'
        }`}
        textInputClassname={`
        w-full outline-none rounded px-4 py-3 placeholder-[#212529] font-poppins font-regular`}
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
        className={`flex w-full justify-center align-middle text-white
        ${isLoginLoading ? 'py-[15px]' : 'py-3'}`}
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

const WrappedComponent = compose(withLoginHoc, withLoginSelector)(MobileForm);

export default WrappedComponent;
