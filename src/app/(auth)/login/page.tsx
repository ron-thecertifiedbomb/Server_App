'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import { compose } from 'redux';

import AuthRouteGuard from '@/components/RouteGuard/AuthRouteGuard';
import { withLoginHoc } from '@/redux/slice/loginSlice/hoc';
import { withSettingHoc, withSettingSelector } from '@/redux/slice/settingSlice/hoc';

import Buttons from './components/Buttons';
import Tab from './components/Tab';

const Login = (props: any) => {
  const { clearAllLoginData, getPolicyRequest, policyData } = props;

  useEffect(() => {
    if (!policyData.data) getPolicyRequest();
    clearAllLoginData();
  }, []);

  return (
    <AuthRouteGuard>
      <div
        className={`flex h-screen flex-1 flex-col items-center justify-center bg-[var(--seaShell)]`}
      >
        <Image alt="Stuff-logo" src={'/stuff-logo.svg'} height={60} width={120} />
        <p className={`my-3 font-poppins text-[16px] font-regular`}>Sign In</p>
        <Tab />
        <Buttons />
      </div>
    </AuthRouteGuard>
  );
};

const WrappedComponent = compose(withLoginHoc, withSettingHoc, withSettingSelector)(Login);

export default WrappedComponent;
