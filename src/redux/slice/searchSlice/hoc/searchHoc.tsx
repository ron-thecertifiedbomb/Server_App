/* eslint-disable react/display-name */
import React from 'react';
import { useDispatch } from 'react-redux';

import { getSearchErr, getSearchRes, setCategoryChecked, setClearSearch, setFeaturedChecked, setFilterButtonState, setFilteredData, setOnSaleChecked, setPriceRangeChecked, setSearchRequest, setSearchSortCriteria, setSelectedParentCategory, setSelectedSubcategories } from '../searchSlice';

/**
 * A HOC that is being used for our components.
 * It has states and functions that can be used to all of the custom
 * component attached to it.
 *
 * @param CustomComponent - A react functional/class component.
 * @returns {React.FC}
 */
export const withSearchHoc = (CustomComponent: any) => {
  return (props: any) => {
    const dispatch = useDispatch();

    const setOnSaleCheckedAction = (value: boolean) => dispatch(setOnSaleChecked(value));
    const setFeaturedCheckedAction = (value: boolean) => dispatch(setFeaturedChecked(value));
    const setCategoryCheckedAction = (value: Record<string, { id: number; label: string }>) => dispatch(setCategoryChecked(value));
    const setSelectedSubcategoriesAction = (value: Record<string, { id: number; label: string }>) => dispatch(setSelectedSubcategories(value));
    const setSelectedParentCategoryAction = (value: string | null) => dispatch(setSelectedParentCategory(value));
    const setPriceRangeCheckedAction = (value: Record<string, boolean>) => dispatch(setPriceRangeChecked(value));
    const setSearchSortCriteriaAction = (sortCriteria: 'mostrated' | 'latest' | 'highprice' | 'lowprice' | '') => dispatch(setSearchSortCriteria(sortCriteria));
    const setClearSearchAction = () => dispatch(setClearSearch());
    const setFilterButtonStateAction = (value: boolean) => dispatch(setFilterButtonState(value));

    return (
      <CustomComponent
        {...props}
        setSearchRequest={(params: any) => dispatch(setSearchRequest(params))}
        getSearchRes={(params: any) => dispatch(getSearchRes(params))}
        getSearchErr={(params: any) => dispatch(getSearchErr(params))}
        setFilteredData={(params: any) => dispatch(setFilteredData(params))}

        setOnSaleCheckedAction={setOnSaleCheckedAction}
        setFeaturedCheckedAction={setFeaturedCheckedAction}
        setCategoryCheckedAction={setCategoryCheckedAction}
        setSelectedSubcategoriesAction={setSelectedSubcategoriesAction}
        setSelectedParentCategoryAction={setSelectedParentCategoryAction}
        setPriceRangeCheckedAction={setPriceRangeCheckedAction}
        setSearchSortCriteriaAction={setSearchSortCriteriaAction}
        setClearSearchAction={setClearSearchAction}
        setFilterButtonStateAction={setFilterButtonStateAction}

      />
    );
  };
};