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
export const withRegisterSelector = (CustomComponent: any) => {
  return (props: any) => {
    //State
    const isLoading = useSelector((state: any) => state.Register.isLoading);
    const registerData = useSelector((state: any) => state.Register.data);
    const registerError = useSelector((state: any) => state.Register.error);
    const registerResponse = useSelector((state: any) => state.Register.registerResponse);

    return (
      <CustomComponent
        {...props}
        isRegisterLoading={isLoading}
        registerData={registerData}
        registerError={registerError}
        registerResponse={registerResponse}
      />
    );
  };
};
