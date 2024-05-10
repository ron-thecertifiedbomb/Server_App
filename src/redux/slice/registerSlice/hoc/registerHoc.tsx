/* eslint-disable react/display-name */
import React from 'react';
import { useDispatch } from 'react-redux';

import {
  clearAllRegisterData,
  postRegisterRequest,
  setRegisterErrorResponse,
  setRegisterResponse,
} from '../registerSlice';

/**
 * A HOC that is being used for our components.
 * It has states and functions that can be used to all of the custom
 * component attached to it.
 *
 * @param CustomComponent - A react functional/class component.
 * @returns {React.FC}
 */
export const withRegisterHoc = (CustomComponent: any) => {
  return (props: any) => {
    const dispatch = useDispatch();
    return (
      <CustomComponent
        {...props}
        clearAllRegisterData={() => dispatch(clearAllRegisterData())}
        postRegisterRequest={(params: any) => dispatch(postRegisterRequest(params))}
        setRegisterErrorResponse={(params: any) => dispatch(setRegisterErrorResponse(params))}
        setRegisterResponse={(params: any) => dispatch(setRegisterResponse(params))}
      />
    );
  };
};
