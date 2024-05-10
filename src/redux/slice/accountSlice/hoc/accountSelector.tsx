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
export const withAccountSelector = (CustomComponent: any) => {
  return (props: any) => {
    // States
    const accountInfo = useSelector((state: any) => state.Account.accountInfo);

    return <CustomComponent {...props} accountInfo={accountInfo} />;
  };
};
