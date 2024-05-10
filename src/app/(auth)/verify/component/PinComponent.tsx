'use client';
import React, { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import { useRouter } from 'next/navigation';
import { compose } from 'redux';

import Button from '@/components/Buttons/Button';
import PinInput from '@/components/Pin/PinInput';
import { withLoginSelector } from '@/redux/slice/loginSlice/hoc';
import { withOTPHoc, withOTPSelector } from '@/redux/slice/OTPSlice/hoc';
import { withRegisterSelector } from '@/redux/slice/registerSlice/hoc';
import { Links } from '@/shared/constants';
import { ButtonTypes } from '@/shared/enums';

const PinComponent = (props: any) => {
  const router = useRouter();

  const {
    loginData,
    registerData,
    postOTPRequest,
    isOTPLoading,
    OTPData,
    OTPError,
    clearAllOTPData,
  } = props;

  const [otp, setOtp] = useState('');
  const length = 6;

  useEffect(() => {
    if (OTPData && OTPData.isSuccessful) {
      router.replace(Links.HOME);
      clearAllOTPData();
    }
  }, [OTPData]);

  const onClickVerify = () => {
    if (otp.length === length) {
      postOTPRequest({
        contact: loginData.contact || registerData.contact,
        code: otp,
      });
    }
  };

  return (
    <div>
      <PinInput disabled={isOTPLoading} length={length} onChange={setOtp} error={OTPError} />
      <Button
        disabled={otp.length !== length}
        onClick={onClickVerify}
        className={`mt-8 flex w-full justify-center ${isOTPLoading ? 'py-[15px]' : 'py-3'}`}
        variant={ButtonTypes.PRIMARY}
      >
        {isOTPLoading ? (
          <CircularProgress size={24} className="text-white" />
        ) : (
          <p className={`font-rubik text-[14px] font-medium text-white`}>Verify</p>
        )}
      </Button>
    </div>
  );
};

const WrappedComponent = compose(
  withLoginSelector,
  withOTPHoc,
  withOTPSelector,
  withRegisterSelector
)(PinComponent);

export default WrappedComponent;
