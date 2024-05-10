/* eslint-disable react/display-name */
import React from 'react';
import { useDispatch } from 'react-redux';

import { getPolicyRequest, setPolicyError, setPolicyResponse } from '../settingSlice';

/**
 * A HOC that is being used for our components.
 * It has states and functions that can be used to all of the custom
 * component attached to it.
 *
 * @param CustomComponent - A react functional/class component.
 * @returns {React.FC}
 */
export const withSettingHoc = (CustomComponent: any) => {
  return (props: any) => {
    const dispatch = useDispatch();
    return (
      <CustomComponent
        {...props}
        getPolicyRequest={(params: any) => dispatch(getPolicyRequest(params))}
        setPolicyError={(params: any) => dispatch(setPolicyError(params))}
        setPolicyResponse={(params: any) => dispatch(setPolicyResponse(params))}
      />
    );
  };
};
