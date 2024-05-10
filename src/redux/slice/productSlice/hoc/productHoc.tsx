/* eslint-disable react/display-name */
import React from 'react';
import { useDispatch } from 'react-redux';

import {
  getProductErr,
  getProductRes,
  setProductRequest,
  setSelectedVariant,
} from '../productSlice';

/**
 * A HOC that is being used for our components.
 * It has states and functions that can be used to all of the custom
 * component attached to it.
 *
 * @param CustomComponent - A react functional/class component.
 * @returns {React.FC}
 */
export const withProductHoc = (CustomComponent: any) => {
  return (props: any) => {
    const dispatch = useDispatch();
    return (
      <CustomComponent
        {...props}
        setProductRequest={(params: any) => dispatch(setProductRequest(params))}
        getProductRes={(params: any) => dispatch(getProductRes(params))}
        getProductErr={(params: any) => dispatch(getProductErr(params))}
        setSelectedVariant={(params: any) => dispatch(setSelectedVariant(params))}
      />
    );
  };
};
