/* eslint-disable react/display-name */
import React from 'react';
/** Redux */
import { useSelector } from 'react-redux';

/**
 * A HOC that is being used for our network.
 * It has states that can be used to all of the custom
 * component attached to it.
 *
 * @param CustomComponent - A react functional/class component.
 * @returns {React.FC}
 */
export const withLoginSelector = (CustomComponent: any) => {
  return (props: any) => {
    //State
    const isLoading = useSelector((state: any) => state.Login.isLoading);
    const loginData = useSelector((state: any) => state.Login.data);
    const loginError = useSelector((state: any) => state.Login.error);
    const loginResponse = useSelector((state: any) => state.Login.loginResponse);

    return (
      <CustomComponent
        {...props}
        isLoginLoading={isLoading}
        loginData={loginData}
        loginError={loginError}
        loginResponse={loginResponse}
      />
    );
  };
};
