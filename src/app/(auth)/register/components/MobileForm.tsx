import React, { useEffect, useState } from 'react';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { Checkbox, CircularProgress, Divider, Radio } from '@mui/material';
import { checkboxClasses } from '@mui/material/Checkbox';
import { subYears } from 'date-fns';
import moment from 'moment';
import { useRouter } from 'next/navigation';
import { compose } from 'redux';

import Button from '@/components/Buttons/Button';
import CalendarDialog from '@/components/Dialog/CalendarDialog';
import PasswordInput from '@/components/Inputs/PasswordInput';
import TextInput from '@/components/Inputs/TextInput';
import { withRegisterHoc, withRegisterSelector } from '@/redux/slice/registerSlice/hoc';
import { API_CODE, Links, REGISTER_ERROR_RESPONSE } from '@/shared/constants';
import { gender } from '@/shared/constants/list';
import { ButtonTypes } from '@/shared/enums';
import Helper from '@/shared/utilities/helper';
import { Regex } from '@/shared/utilities/regex';

import PDFButtons from './PDFButtons';

const MobileForm = (props: any) => {
  const {
    postRegisterRequest,
    registerResponse,
    registerError,
    clearAllRegisterData,
    isRegisterLoading,
  } = props;
  const router = useRouter();

  const [openCalendar, setOpenCalendar] = useState(false);
  const [data, setData] = useState({
    firstname: '',
    lastname: '',
    birthday: moment(subYears(new Date(), 18)).format('MM/DD/YYYY'),
    gender: 'Male',
    mobile: '+63',
    password: '',
    useEmail: false,
    agree: false,
  });
  const [error, setError] = useState({
    header: '',
    firstname: '',
    lastname: '',
    mobile: '',
    password: '',
  });

  const passwordStrengthCount = Helper.passwordStrenghtCounter(data.password);

  useEffect(() => {
    if (registerError.payload) {
      if (
        REGISTER_ERROR_RESPONSE.MOBILE_NOT_AVAILABLE === registerError.payload.data?.errors?.contact
      ) {
        setError((prevState) => {
          return {
            ...prevState,
            mobile: registerError.payload.data?.errors?.contact,
          };
        });
      }
    }
  }, [registerError]);

  useEffect(() => {
    //go otp screen
    if (registerResponse.data) {
      const { status } = registerResponse;
      if (status === API_CODE.STATUS_201) {
        router.replace(Links.VERIFY);
      }
    }
  }, [registerResponse]);

  const onChangeText = (value: React.ChangeEvent<HTMLInputElement>, key: string) => {
    const text = value.target.value;

    switch (key) {
      case 'firstname':
        setError((prevState) => {
          return {
            ...prevState,
            firstname: '',
          };
        });
        setData({ ...data, firstname: text });
        break;
      case 'lastname':
        setError((prevState) => {
          return {
            ...prevState,
            lastname: '',
          };
        });
        setData({ ...data, lastname: text });
        break;
      case 'mobile':
        if (!text.startsWith('+63') || text === '+6' || text === '+' || text === '') break;
        setError((prevState) => {
          return {
            ...prevState,
            mobile: '',
          };
        });
        setData({ ...data, mobile: text });
        break;
      case 'password':
        setError((prevState) => {
          return {
            ...prevState,
            password: '',
          };
        });
        setData({ ...data, password: text });
        break;
      default:
        break;
    }
  };

  const onChangeCheck = (value: boolean, key: string) => {
    switch (key) {
      case 'agree':
        setData({ ...data, agree: value });
        break;
      case 'email':
        setData({ ...data, useEmail: value });
        break;
      default:
        break;
    }
  };

  const onClickCancel = () => {
    router.back();
  };

  const onChangeCalendar = (value: string) => {
    setData({ ...data, birthday: moment(value).format('MM/DD/YYYY') });
    setOpenCalendar(false);
  };

  const validateData = () => {
    let hasError = false;

    //First name
    if (!data.firstname) {
      setError((prevState) => {
        return {
          ...prevState,
          firstname: ' ',
          header: 'Please fill in all the required fields.',
        };
      });

      hasError = true;
    } else if (!Regex.isNoSpecialChar(data.firstname)) {
      setError((prevState) => {
        return {
          ...prevState,
          firstname: 'Invalid Format',
        };
      });
      hasError = true;
    }
    //End of frst name

    //Last name
    if (!data.lastname) {
      setError((prevState) => {
        return {
          ...prevState,
          lastname: ' ',
          header: 'Please fill in all the required fields.',
        };
      });
      hasError = true;
    } else if (!Regex.isNoSpecialChar(data.lastname)) {
      setError((prevState) => {
        return {
          ...prevState,
          lastname: 'Invalid Format',
        };
      });
      hasError = true;
    }
    //End of last name

    //Mobile number
    if (data.mobile.trim() === '+63') {
      setError((prevState) => {
        return {
          ...prevState,
          mobile: ' ',
          header: 'Please fill in all the required fields.',
        };
      });
      hasError = true;
    } else {
      const formattedMobile = data.mobile.substring(3, 13);
      if (data.mobile.trim().length < 13 || !Regex.numberOnly(formattedMobile)) {
        setError((prevState) => {
          return {
            ...prevState,
            mobile: 'Please enter a valid mobile number',
          };
        });
        hasError = true;
      }
    }

    //End of mobile number

    //Password
    if (!data.password || data.password.length < 8) {
      setError((prevState) => {
        return {
          ...prevState,
          password: ' ',
          header: 'Please fill in all the required fields.',
        };
      });
      hasError = true;
    }
    //End of password

    if (hasError) return false;
    return true;
  };

  const onClickSignUp = () => {
    setError({
      mobile: '',
      firstname: '',
      header: '',
      lastname: '',
      password: '',
    });

    const isInputValidated = validateData();
    if (!isInputValidated) return;

    clearAllRegisterData();

    postRegisterRequest({
      contact: data.mobile,
      firstName: data.firstname,
      lastName: data.lastname,
      gender: data.gender,
      birthday: data.birthday,
      password: data.password,
      enableNewsAndEvents: data.useEmail,
      hasReadPolicy: data.agree,
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
      {/* First name */}
      <p
        className={`mb-2 font-poppins text-[16px] font-regular leading-normal text-[var(--black500)]`}
      >
        First Name
      </p>
      <TextInput
        value={data.firstname}
        placeholder="First Name"
        onChange={(value) => onChangeText(value, 'firstname')}
        className={`mb-2 w-full rounded border border-neutral-900 px-4 py-3 font-poppins text-[16px] font-regular text-[var(--black500)] placeholder-[var(--black500)] outline-none
        ${error.firstname !== '' && error.firstname !== ' ' ? 'mb-2' : 'mb-4'}
        ${error.firstname && '!border-[var(--red500)]'}`}
      />
      {error.firstname && error.firstname !== ' ' && (
        <p
          className={`mb-4 font-poppins text-[14px] font-regular leading-normal text-[var(--red500)]`}
        >
          {error.firstname}
        </p>
      )}
      {/* End of first name */}

      {/* Last name */}
      <p
        className={`mb-2 font-poppins text-[16px] font-regular leading-normal text-[var(--black500)]`}
      >
        Last Name
      </p>
      <TextInput
        value={data.lastname}
        placeholder="Last Name"
        onChange={(value) => onChangeText(value, 'lastname')}
        className={`mb-2 w-full rounded border border-neutral-900 px-4 py-3 font-poppins text-[16px] font-regular text-[var(--black500)] placeholder-[var(--black500)] outline-none
        ${error.lastname !== '' && error.lastname !== ' ' ? 'mb-2' : 'mb-4'}
        ${error.lastname && '!border-[var(--red500)]'}`}
      />
      {error.lastname && error.lastname !== ' ' && (
        <p
          className={`mb-4 font-poppins text-[14px] font-regular leading-normal text-[var(--red500)]`}
        >
          {error.lastname}
        </p>
      )}
      {/* End of last name */}

      {/* Birthday */}
      <p
        className={` mb-2 font-poppins text-[16px] font-regular leading-normal text-[var(--black500)]`}
      >
        Birthday
      </p>
      <Button
        onClick={() => setOpenCalendar(true)}
        className="mb-4 flex w-full justify-between rounded border border-neutral-900 px-4 py-[10px]"
      >
        <p className={`font-poppins text-[16px] font-regular`}>{data.birthday.toString()}</p>
        <DateRangeIcon className="h-[24px] w-[24px] self-center" />
      </Button>
      {/* End of birthday */}

      {/* Gender */}
      <p
        className={`mb-2 font-poppins text-[16px] font-regular leading-normal text-[var(--black500)]`}
      >
        Gender
      </p>
      {gender.map((item) => (
        <div key={item.id} className="mb-4 flex">
          <Radio
            checked={data.gender === item.value}
            value={data.gender}
            onChange={() => {
              setData({ ...data, gender: item.value });
            }}
            sx={{
              '&, &.Mui-checked': {
                color: 'var(--gray700)',
              },
            }}
            className="!mr-2 !p-0"
          />
          <p className={`font-poppins text-[16px] font-regular leading-normal`}>{item.name}</p>
        </div>
      ))}
      {/* End of gender */}

      {/* Mobile number */}
      <p className={`mb-2 font-poppins text-[16px] font-regular text-[#212529]`}>Mobile Number</p>
      <TextInput
        value={data.mobile}
        maxLength={13}
        onChange={(value) => onChangeText(value, 'mobile')}
        className={`w-full rounded border border-neutral-900 px-4 py-3 font-poppins text-[16px] font-regular 
          text-[var(--black500)] placeholder-[var(--black500)] outline-none
          ${error.mobile !== '' && error.mobile !== ' ' ? 'mb-2' : 'mb-4'}
          ${error.mobile && '!border-[var(--red500)]'}
        `}
      />
      {error.mobile && error.mobile !== ' ' && (
        <p
          className={`mb-4 font-poppins text-[14px] font-regular leading-normal text-[var(--red500)]`}
        >
          {error.mobile}
        </p>
      )}
      {/* End of mobile number */}

      {/* Password */}
      <p className={`mb-2 font-poppins text-[16px] font-regular text-[var(--black500)]`}>
        Password
      </p>
      <PasswordInput
        value={data.password}
        placeholder="Password"
        maxLength={12}
        onChange={(value: any) => onChangeText(value, 'password')}
        className={`mb-2 flex rounded border border-neutral-900 text-[16px] text-[var(--black500)]
          ${error.password && '!border-[var(--red500)]'}
        `}
        textInputClassname={`w-full outline-none m-0 p-0 py-3 px-4 rounded font-poppins font-regular placeholder-[var(--black500)]
        `}
        showPasswordStrength={true}
        passwordStrengthClassName={error.password && '!text-[var(--red500)]'}
        eyeColor={error.password && 'var(--red500)'}
      />
      <p
        className={`mb-4 font-poppins text-[12px] font-semibold leading-normal text-[var(--gray500)]
        ${Helper.passwordStrengthColor(passwordStrengthCount, true, false)}
        ${error.password && '!text-[var(--red500)]'}
        `}
      >
        Password must have 8 to 12 characters, Best passwords are a combination of letters, numbers,
        or symbols
      </p>
      {/* End of password */}

      {/* Subscribe */}
      <p className={`mb-4 mt-8 font-poppins text-[20px] font-medium`}>
        Subscribe to Stuff’s mailing list
      </p>
      <div className={`flex items-center`}>
        <Checkbox
          checked={data.useEmail}
          sx={{
            [`&, &.${checkboxClasses.checked}`]: {
              color: 'green',
            },
          }}
          className="m-0 mr-2 h-[16px] p-0"
          onChange={() => onChangeCheck(!data.useEmail, 'email')}
        />
        <p className={`font-poppins text-[16px] font-regular leading-normal`}>
          Exclusive offers and newsletter
        </p>
      </div>
      {/* End of subscribe */}

      <Divider className="!my-8" />

      {/* Agree */}
      <p className={`mb-2 font-poppins text-[20px] font-medium leading-normal`}>
        Membership Agreement
      </p>
      <p className={`font-poppins text-[16px] font-regular leading-normal`}>
        By creating an account, you agree to Stuff’s privacy policy and terms of use.
      </p>
      <div className={`mt-4 flex`}>
        <Checkbox
          checked={data.agree}
          sx={{
            [`&, &.${checkboxClasses.checked}`]: {
              color: 'black',
            },
          }}
          className="m-0 mb-[2px] mr-2 mt-[3px] h-[16px] p-0"
          onChange={() => onChangeCheck(!data.agree, 'agree')}
        />
        <p className={`font-poppins text-[14px] font-regular leading-normal`}>
          I agree to the Privacy Policy and Terms of Use of Stuff{' '}
        </p>
      </div>
      {/* End of agree */}

      {/* PDF Buttons */}
      <PDFButtons />
      {/* End of PDF Buttons */}

      {/* Buttons */}
      <Button
        onClick={onClickSignUp}
        disabled={!data.agree || isRegisterLoading}
        className={`mt-8 flex w-full justify-center align-middle text-white
        ${isRegisterLoading ? 'py-[15px]' : 'py-3'}`}
        variant={ButtonTypes.PRIMARY}
      >
        {isRegisterLoading ? (
          <CircularProgress size={24} className="text-white" />
        ) : (
          <p className={`font-poppins text-[14px] font-medium`}>Sign Up</p>
        )}
      </Button>
      <Button
        onClick={onClickCancel}
        className="flex w-full justify-center py-3 align-middle text-white"
        variant={ButtonTypes.DEFAULT}
      >
        <p className={`mt-3 font-poppins text-[14px] font-medium text-[var(--primary)]`}>Cancel</p>
      </Button>
      {/* End of buttons */}

      <CalendarDialog
        value={data.birthday}
        onChange={onChangeCalendar}
        onClickClose={() => setOpenCalendar(false)}
        open={openCalendar}
        onClose={() => setOpenCalendar(false)}
      />
    </div>
  );
};

const WrappedComponent = compose(withRegisterHoc, withRegisterSelector)(MobileForm);

export default WrappedComponent;
