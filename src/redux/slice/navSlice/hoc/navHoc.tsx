/* eslint-disable react/display-name */
import React from 'react';
import { useDispatch } from 'react-redux';

import { addRecentSearch, updateSearchKey } from '../navSlice';

/**
 * A HOC that is being used for our components.
 * It has states and functions that can be used to all of the custom
 * component attached to it.
 *
 * @param CustomComponent - A react functional/class component.
 * @returns {React.FC}
 */
export const withNavHoc = (CustomComponent: any) => {
  return (props: any) => {
    const dispatch = useDispatch();
    return (
      <CustomComponent
        {...props}
        addRecentSearch={(params: any) => dispatch(addRecentSearch(params))}
        updateSearchKey={(params: any) => dispatch(updateSearchKey(params))}
      />
    );
  };
};
