'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import { compose } from 'redux';

import AuthRouteGuard from '@/components/RouteGuard/AuthRouteGuard';
import { withRegisterHoc } from '@/redux/slice/registerSlice/hoc';
import { withSettingHoc, withSettingSelector } from '@/redux/slice/settingSlice/hoc';

import Tab from './components/Tab';

const Register = (props: any) => {
  const { clearAllRegisterData, getPolicyRequest, policyData } = props;

  useEffect(() => {
    if (!policyData.data) getPolicyRequest();
    clearAllRegisterData();
  }, []);

  return (
    <AuthRouteGuard>
      <div className={`flex flex-1 flex-col items-center justify-center bg-[var(--seaShell)] py-6`}>
        <Image alt="Stuff-logo" src={'/stuff-logo.svg'} height={60} width={120} />
        <p className={`my-3 font-poppins text-[16px] font-regular`}>Sign Up</p>
        <Tab />
      </div>
    </AuthRouteGuard>
  );
};

const WrappedComponent = compose(withRegisterHoc, withSettingHoc, withSettingSelector)(Register);

export default WrappedComponent;
