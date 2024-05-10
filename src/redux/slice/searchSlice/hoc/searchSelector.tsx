/* eslint-disable react/display-name */
import React from 'react';
/** Redux */
import { useSelector } from 'react-redux';

/**
 * A HOC that is being used for our network.
 * It has states that can be used to all of the custom
 * component attached to it.
 *
 * @param CustomComponent - A react functional/class component.
 * @returns {React.FC}
 */
export const withSearchSelector = (CustomComponent: any) => {
  return (props: any) => {
    //State
    const isLoading = useSelector((state: any) => state.Search.isLoading);
    const searchList = useSelector((state: any) => state.Search.searchList);
    const filteredData = useSelector((state: any) => state.Search.filteredData);
    const onSaleCount = useSelector((state: any) => state.Search.onSaleCount);
    const featuredCount = useSelector((state: any) => state.Search.featuredCount);
    const productCount = useSelector((state: any) => state.Search.productCount);

    // Additional properties
    const onSaleChecked = useSelector((state: any) => state.Search.onSaleChecked);
    const featuredChecked = useSelector((state: any) => state.Search.featuredChecked);
    const categoryChecked = useSelector((state: any) => state.Search.categoryChecked);
    const selectedParentCategory = useSelector((state: any) => state.Search.selectedParentCategory);
    const selectedSubcategories = useSelector((state: any) => state.Search.selectedSubcategories);
    const priceRangeChecked = useSelector((state: any) => state.Search.priceRangeChecked);
    const sortCriteria = useSelector((state: any) => state.Search.sortCriteria)
    const isFilterApplied = useSelector((state: any) => state.Search.isFilterApplied)
    return (
      <CustomComponent
        {...props}
        isLoading={isLoading}
        searchList={searchList}
        filteredData={filteredData}
        onSaleCount={onSaleCount}
        featuredCount={featuredCount}
        productCount={productCount}
        onSaleChecked={onSaleChecked}
        featuredChecked={featuredChecked}
        categoryChecked={categoryChecked}
        selectedParentCategory={selectedParentCategory}
        selectedSubcategories={selectedSubcategories}
        priceRangeChecked={priceRangeChecked}
        sortCriteria={sortCriteria}
        isFilterApplied={isFilterApplied}
      />
    );
  };
};
