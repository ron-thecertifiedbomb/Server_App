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
export const withSettingSelector = (CustomComponent: any) => {
  return (props: any) => {
    //State
    const isLoading = useSelector((state: any) => state.Setting.isLoading);
    const policyData = useSelector((state: any) => state.Setting.policyResponse.data);
    const policyError = useSelector((state: any) => state.Setting.policyResponse.error);

    return (
      <CustomComponent
        {...props}
        isSettingLoading={isLoading}
        policyData={policyData}
        policyError={policyError}
      />
    );
  };
};
