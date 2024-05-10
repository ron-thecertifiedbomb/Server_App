/* eslint-disable react/display-name */
import React from 'react';
import { useDispatch } from 'react-redux';

import {
  clearAllOTPData,
  postOTPRequest,
  postResendOTPRequest,
  setOTPData,
  setOTPErrorResponse,
} from '../OTPSlice';

/**
 * A HOC that is being used for our components.
 * It has states and functions that can be used to all of the custom
 * component attached to it.
 *
 * @param CustomComponent - A react functional/class component.
 * @returns {React.FC}
 */
export const withOTPHoc = (CustomComponent: any) => {
  return (props: any) => {
    const dispatch = useDispatch();
    return (
      <CustomComponent
        {...props}
        clearAllOTPData={() => dispatch(clearAllOTPData())}
        postOTPRequest={(params: any) => dispatch(postOTPRequest(params))}
        postResendOTPRequest={(params: any) => dispatch(postResendOTPRequest(params))}
        setOTPData={(params: any) => dispatch(setOTPData(params))}
        setOTPErrorResponse={(params: any) => dispatch(setOTPErrorResponse(params))}
      />
    );
  };
};
