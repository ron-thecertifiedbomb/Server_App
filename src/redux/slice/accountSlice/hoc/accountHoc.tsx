/* eslint-disable react/display-name */
import React from 'react';
import { useDispatch } from 'react-redux';

import { setAccountInfo } from '../accountSlice';

/**
 * A HOC that is being used for our components.
 * It has states and functions that can be used to all of the custom
 * component attached to it.
 *
 * @param CustomComponent - A react functional/class component.
 * @returns {React.FC}
 */
export const withAccountHoc = (CustomComponent: any) => {
  return (props: any) => {
    const dispatch = useDispatch();
    return (
      <CustomComponent
        {...props}
        setAccountInfo={(params: any) => dispatch(setAccountInfo(params))}
      />
    );
  };
};
