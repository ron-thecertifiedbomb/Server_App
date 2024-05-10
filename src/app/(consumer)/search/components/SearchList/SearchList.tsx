/* eslint-disable */
'use client';
import React, { memo, useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { compose } from 'redux';

import ProductCard from '@/components/Cards/ProductCard';
import { withCategorySelector } from '@/redux/slice/categories/hoc';
import { withNavSelector } from '@/redux/slice/navSlice/hoc';
import { withSearchHoc, withSearchSelector } from '@/redux/slice/searchSlice/hoc';
import { Poppins400, Poppins500, Poppins600 } from '@/shared/fonts/fontfamily';
interface SearchListProps {
  searchList: any;
  filteredData: any;
  sortCriteria: string;
  onSaleChecked: boolean;
  featuredChecked: boolean;
  categoryChecked: Record<string, { id: number; label: string }>;
  selectedSubcategories: Record<string, { id: number; label: string }>;
  searchKey: string;
  setSearchSortCriteriaAction: (value: string) => void
  setSearchRequest: (value: any) => void
}

const NO_PRODUCT = 'Sorry, we cannot find what you’re looking for...';
const SearchList = (props: SearchListProps) => {
  const { searchList, filteredData, sortCriteria, setSearchSortCriteriaAction, setSearchRequest,
    onSaleChecked,
    featuredChecked,
    categoryChecked,
    selectedSubcategories,
    searchKey
  } = props;
  const searchParams = useSearchParams();
  const search = searchParams.get('q');
  const [styleClass, setStyleClass] = useState('');
  console.log('sortCriteria', sortCriteria)
  //Temporary Approach but will improve on a later note
  useEffect(() => {
    // console.log(styleClass);
    setSearchSortCriteriaAction(''); // added jere just to passed the linting
    setStyleClass('transform opacity-0 scale-95');
    return () => {
      setStyleClass('transform opacity-0 scale-95');
    };
  }, []);

  const onSearchParams = (sort: string) => {
    // filter to get the labels and I added map to get category/sub-category ID's
    const selectedCategories = Object.keys(categoryChecked)
      .filter((key) => categoryChecked[key])
      .map((keys) => categoryChecked[keys].id);
    // Include selected subcategories in the filter
    const selectedSubcategoriesArray = Object.keys(selectedSubcategories)
      .filter((key) => selectedSubcategories[key])
      .map((keys) => selectedSubcategories[keys].id);

    let obj = {
      onSale: onSaleChecked,
      featured: featuredChecked,
      search: searchKey,
      categories: selectedCategories,
      subCategories: selectedSubcategoriesArray,
      priceRangeId: [],
      minPrice: 0,
      maxPrice: 100000,
      page: 1,
      pageSize: 20,
      sort: sort
    };
    setSearchRequest(obj)
    console.log('onSearchParams', obj)
  }

  const handleSortToggle = (sort: any) => {
    setSearchSortCriteriaAction(sort);
    setStyleClass('transform opacity-0 scale-95')
    onSearchParams(sort)
  };

  const handleDropDown = () => {
    if (styleClass === 'transform opacity-100 scale-100') {
      setStyleClass('transform opacity-0 scale-95')
    } else {
      setStyleClass('transform opacity-100 scale-100')
    }
    // setSearchSortCriteriaAction(styleClass === 'transform opacity-100 scale-100' ? 'mostrated' : 'latest'); // Set your default sort criteria here
  };

  const renderSorting = () => {
    return (
      <div className="relative inline-block text-left">
        {/* <div>
          <button onClick={handleDropDown} type="button" className="inline-flex w-full justify-center gap-x-1.5 text-sm font-semibold text-gray-900 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
            <span
              // onClick={handleSortToggle}
              className={`text-[14px] font-bold text-[#E60C2B] ${Poppins600.className} cursor-pointer`}>
              Sort By
            </span>
            <svg className="-mr-1 h-5 w-5" viewBox="0 0 20 20" fill="#E60C2B" aria-hidden="true">
              <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>

        <div className={`${styleClass} absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={1}>
          <div className="py-1" role="none">
            <a href="#" onClick={() => handleSortToggle('mostrated')} className={`text-[#E60C2B] block px-4 py-2 text-sm ${Poppins400.className}`} role="menuitem" id="menu-item-1">Most Rated</a>
            <a href="#" onClick={() => handleSortToggle('latest')} className={`text-[#E60C2B] block px-4 py-2 text-sm ${Poppins400.className}`} role="menuitem" id="menu-item-1">Latest</a>
            <a href="#" onClick={() => handleSortToggle('lowprice')} className={`text-[#E60C2B] block px-4 py-2 text-sm ${Poppins400.className}`} role="menuitem" id="menu-item-1">Lowest Price</a>
            <a href="#" onClick={() => handleSortToggle('highprice')} className={`text-[#E60C2B] block px-4 py-2 text-sm ${Poppins400.className}`} role="menuitem" id="menu-item-1">Highest Price</a>

          </div>
        </div> */}
      </div>
    )
  }

  const renderList = useMemo(() => {
    if (Array.isArray(searchList) && searchList.length) {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 mb-12">
          {searchList.map((data: any, idx: number) => (
            <div key={idx} className="flex flex-wrap justify-between">
              <ProductCard product={data} />
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div className="flex flex-col items-center">
          <Image src="/no-product.svg" width={192} height={270} alt="logo" />
          <p className="text-center mt-4 text-black font-poppins font-medium text-base">
            {NO_PRODUCT}
          </p>
        </div>
      );
    }
  }, [searchList]);

  return (
    <div className="flex flex-col gap-[48px] max-w-[1038px] w-full mr-10">
      <div className="flex justify-between items-center">
        <p className={`text-[20px] font-bold ${Poppins500.className}`}>
          Results for&nbsp;
          <span className={`text-[20px] font-bold text-[#E60C2B] ${Poppins600.className}`}>
            {search}
          </span>
        </p>
        {renderSorting()}
      </div>
      {renderList}
    </div>
  );
};

const WrappedComponent = compose(
  withSearchHoc,
  withSearchSelector,
  withNavSelector,
  withCategorySelector
)(SearchList);
export default memo(WrappedComponent);
