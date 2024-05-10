/* eslint-disable react/display-name */
import React from 'react';
import { useDispatch } from 'react-redux';

import {
  clearAllLoginData,
  postLoginRequest,
  setLoginErrorResponse,
  setLoginResponse,
} from '../loginSlice';

/**
 * A HOC that is being used for our components.
 * It has states and functions that can be used to all of the custom
 * component attached to it.
 *
 * @param CustomComponent - A react functional/class component.
 * @returns {React.FC}
 */
export const withLoginHoc = (CustomComponent: any) => {
  return (props: any) => {
    const dispatch = useDispatch();
    return (
      <CustomComponent
        {...props}
        clearAllLoginData={() => dispatch(clearAllLoginData())}
        postLoginRequest={(params: any) => dispatch(postLoginRequest(params))}
        setLoginErrorResponse={(params: any) => dispatch(setLoginErrorResponse(params))}
        setLoginResponse={(params: any) => dispatch(setLoginResponse(params))}
      />
    );
  };
};
