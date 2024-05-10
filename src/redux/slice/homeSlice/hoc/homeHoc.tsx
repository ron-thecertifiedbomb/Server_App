/* eslint-disable react/display-name */
import React from 'react';
import { useDispatch } from 'react-redux';

import { getHomeErr, getHomeRes, setHomeRequest } from '../homeSlice';

/**
 * A HOC that is being used for our components.
 * It has states and functions that can be used to all of the custom
 * component attached to it.
 *
 * @param CustomComponent - A react functional/class component.
 * @returns {React.FC}
 */
export const withHomeHoc = (CustomComponent: any) => {
  return (props: any) => {
    const dispatch = useDispatch();
    return (
      <CustomComponent
        {...props}
        setHomeRequest={(params: any) => dispatch(setHomeRequest(params))}
        getHomeRes={(params: any) => dispatch(getHomeRes(params))}
        getHomeErr={(params: any) => dispatch(getHomeErr(params))}
      />
    );
  };
};
