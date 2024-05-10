'use client';

import React from 'react';
import Image from 'next/image';
import { compose } from 'redux';

import { withOTPHoc, withOTPSelector } from '@/redux/slice/OTPSlice/hoc';

import PinComponent from './component/PinComponent';

const Verify = (props: any) => {
  const { OTPError } = props;
  const error = OTPError.data;

  return (
    <div
      className={`flex h-screen flex-1 flex-col items-center justify-center bg-[var(--seaShell)] px-4`}
    >
      <Image alt="Stuff-logo" src={'/stuff-logo.svg'} height={60} width={120} />
      <div className="mt-3 flex w-full flex-col rounded border bg-white px-3 py-4 shadow lg:w-[500px]">
        <p
          className={`mb-8 self-center text-center font-poppins text-[20px] font-regular leading-normal`}
        >
          Please input the verification code
        </p>
        {error && (
          <p
            className={`mb-8 self-center text-center font-poppins text-[14px] font-regular text-red-500`}
          >
            Incorrect verification code
          </p>
        )}
        <PinComponent />
      </div>
    </div>
  );
};

const WrappedComponent = compose(withOTPHoc, withOTPSelector)(Verify);
export default WrappedComponent;
