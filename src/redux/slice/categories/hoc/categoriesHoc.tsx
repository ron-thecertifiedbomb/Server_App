/* eslint-disable react/display-name */
import React from 'react';
import { useDispatch } from 'react-redux';

import { setCategoryRequest } from '../categoriesSlice';
/**
 * A HOC that is being used for our components.
 * It has states and functions that can be used to all of the custom
 * component attached to it.
 *
 * @param CustomComponent - A react functional/class component.
 * @returns {React.FC}
 */
export const withCategoryHoc = (CustomComponent: any) => {
  return (props: any) => {
    const dispatch = useDispatch();
    const getSearchCategoryRequest = () => dispatch(setCategoryRequest())
    return (
      <CustomComponent
        {...props}
        getSearchCategoryRequest={getSearchCategoryRequest}
      />
    );
  };
};