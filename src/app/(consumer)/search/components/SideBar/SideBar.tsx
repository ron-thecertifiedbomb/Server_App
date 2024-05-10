/* eslint-disable */
import React, { memo, useLayoutEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { compose } from 'redux';

import Button from '@/components/Buttons/Button';
import Loader from '@/components/Loader/Loader';
import { withCategorySelector } from '@/redux/slice/categories/hoc';
import { withNavSelector } from '@/redux/slice/navSlice/hoc';
import { withSearchHoc, withSearchSelector } from '@/redux/slice/searchSlice/hoc';
import { ButtonTypes } from '@/shared/enums';
// import { categories } from '../../../../../../__mocks__/categories';
import { priceRanges } from './mock';
interface SideBarProps {
  setFilteredData: any;
  setSearchRequest: any;
  onSaleCount: number;
  featuredCount: number;
  //selector
  onSaleChecked: boolean;
  featuredChecked: boolean;
  categoryChecked: Record<string, { id: number; label: string }>;
  selectedSubcategories: Record<string, { id: number; label: string }>;
  selectedParentCategory: string | null;
  isFilterApplied: boolean;
  // priceRangeChecked: Record<string, boolean>;
  isLoading: boolean;
  searchKey: string;
  categories: any,
  //dispatch
  setOnSaleCheckedAction: (value: boolean) => void;
  setFeaturedCheckedAction: (value: boolean) => void;
  setCategoryCheckedAction: (value: Record<string, { id: number; label: string }>) => void;
  setSelectedSubcategoriesAction: (value: Record<string, { id: number; label: string }>) => void;
  setSelectedParentCategoryAction: (value: string | null) => void;
  setFilterButtonStateAction: (value: boolean) => void;
  // setPriceRangeChecked: (value: Record<string, boolean>) => void;
}

const SideBar = (props: SideBarProps) => {
  const {
    setFilteredData,
    setSearchRequest,
    onSaleCount,
    featuredCount,
    onSaleChecked,
    featuredChecked,
    isFilterApplied, // disable button state
    categoryChecked,
    selectedSubcategories,
    selectedParentCategory,
    searchKey,
    isLoading,
    categories,
    setOnSaleCheckedAction,
    setFeaturedCheckedAction,
    setCategoryCheckedAction,
    setSelectedSubcategoriesAction,
    setSelectedParentCategoryAction,
    setFilterButtonStateAction
  } = props;
  const searchParams = useSearchParams();
  const prefilter = searchParams.get('filter');
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [priceRangeChecked, setPriceRangeChecked] = useState<Record<string, { id: number; label: string }>>({}); // for selected array of price range

  useLayoutEffect(() => {
    // CLEAR FILTER
    if (prefilter && prefilter) {
      setOnSaleCheckedAction(false);
      setFeaturedCheckedAction(false);
      setCategoryCheckedAction({});
      setSelectedParentCategoryAction(null);
      setSelectedSubcategoriesAction({});
      setPriceRangeChecked({});

      // PRE-LOAD FILTER
      if (!onSaleChecked && prefilter === 'product-on-sale') {
        setOnSaleCheckedAction(true);
      } else if (!featuredChecked && prefilter === 'new-arrivals') {
        setFeaturedCheckedAction(true);
      }
    }
  }, []);

  const onFilter = () => {
    if (isLoading) return;

    // filter to get the labels and I added map to get category/sub-category ID's
    const selectedCategories = Object.keys(categoryChecked)
      .filter((key) => categoryChecked[key])
      .map((keys) => categoryChecked[keys].id);
    // Include selected subcategories in the filter
    const selectedSubcategoriesArray = Object.keys(selectedSubcategories)
      .filter((key) => selectedSubcategories[key])
      .map((keys) => selectedSubcategories[keys].id);

    const filterData = {
      onSale: onSaleChecked,
      featured: featuredChecked,
      search: searchKey,
      categories: selectedCategories,
      subCategories: selectedSubcategoriesArray,
      priceRangeId: Object.keys(priceRangeChecked).filter((key) => priceRangeChecked[key]),
      minPrice: 0,
      maxPrice: 100000,
      page: 1,
      pageSize: 20,
      sort: ''
    };

    setFilteredData(filterData);
    setSearchRequest(filterData);
  };

  const onClearFilter = () => {
    console.log('clear filter here..');
    setOnSaleCheckedAction(false);
    setFeaturedCheckedAction(false);
    setCategoryCheckedAction({});
    setSelectedParentCategoryAction(null);
    setSelectedSubcategoriesAction({});
    setPriceRangeChecked({});
    setFilterButtonStateAction(true);
  };

  const handleCheckboxChange = (checkboxType: string, value: any) => {
    switch (checkboxType) {
      case 'onSale':
        setOnSaleCheckedAction(!onSaleChecked);
        break;
      case 'featured':
        setFeaturedCheckedAction(!featuredChecked);
        break;
      case 'category':
        setCategoryCheckedAction({ ...categoryChecked, [value.id]: categoryChecked[value.id] ? undefined : { id: value.id, label: value.label } });
        break;
      case 'priceRange':
        setPriceRangeChecked((prev) => ({ ...prev, [value.value]: !prev[value.value] }));
        // setPriceRangeChecked({ ...priceRangeChecked, [value.value]: !priceRangeChecked[value.value] });
        break;
      default:
        break;
    }  
  };
  
  const hasCheckedCheckbox =
    onSaleChecked ||
    featuredChecked ||
    Object.values(categoryChecked).some((category) => !!category) ||
    Object.values(priceRangeChecked).some((isChecked) => isChecked);
    console.log('hasCheckedCheckbox', hasCheckedCheckbox);
    setFilterButtonStateAction(!hasCheckedCheckbox);

  const renderCheckbox = (isChecked: any, onChange: () => void) => (
    <input type="checkbox" checked={isChecked} onChange={onChange} />
  );
  const displayCategories = showAllCategories ? categories : categories?.slice(0, 5);
  const renderCategory = (category: any) => {
    const isParentSelected = selectedParentCategory === category.id;
    const showSubcategories = isParentSelected && category.subCategories;
    const handleParentCategoryClick = (categoryId: string) => {
      setSelectedParentCategoryAction(categoryId === selectedParentCategory ? null : categoryId);
    };
    return (
      <div key={category.id} className="mt-[24px]">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row justify-items-start gap-[8px]">
            {renderCheckbox(!!categoryChecked[category.id], () => {
              handleCheckboxChange('category', category);
              setSelectedSubcategoriesAction({});
            })}
            <p className={`text-[color:var(--neutral-neutral-400,#6C767E)] text-base not-italic leading-[normal] font-poppins font-[400]`}>
              {category.label}
            </p>
          </div>
          <div className={`flex flex-row justify-items-end`}>
            <p className={`text-[color:var(--neutral-neutral-400,#6C767E)] text-base not-italic leading-[normal] font-poppins font-[400]`}>
              {/* {category.count} */}
            </p>
            {category.subCategories && (
              <span
                className="ml-2 cursor-pointer"
                onClick={() => handleParentCategoryClick(category.id)}
              >
                <svg
                  className={`-mr-1 h-5 w-5 transform ${isParentSelected ? 'rotate-80' : 'rotate-90'
                    }`}
                  viewBox="0 0 20 20"
                  fill="#E60C2B"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            )}
          </div>
        </div>
        {showSubcategories && (
          <div className="ml-[16px] flex flex-col">
            {category.subCategories?.map((subCategory: any) => (
              <div key={subCategory.id} className="mt-[20px] flex justify-between">
                <div className="flex gap-[8px]">
                  {renderCheckbox(
                    !!selectedSubcategories[subCategory.label],
                    () => {
                      const newSelectedSubcategories = { ...selectedSubcategories }; // Toggle subcategory
                      if (newSelectedSubcategories[subCategory.label]) {
                        // Uncheck the checkbox if it's already checked
                        delete newSelectedSubcategories[subCategory.label];
                      } else {
                        // Check the checkbox if it's not checked
                        newSelectedSubcategories[subCategory.label] = {
                          id: subCategory.id,
                          label: subCategory.label,
                        };
                      }
                      setSelectedSubcategoriesAction(newSelectedSubcategories);
                    }
                  )}
                  <p className={`text-[color:var(--neutral-neutral-400,#6C767E)] text-base not-italic  leading-[normal] font-poppins font-[400]`}>
                    {subCategory.label}
                  </p>
                </div>
                <p className={`text-[color:var(--neutral-neutral-400,#6C767E)] text-base not-italic leading-[normal] mr-[25px] font-poppins font-[400]`}>
                  {/* {subCategory.count} */}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };
  console.log('isFilterApplied', isFilterApplied);
  const renderPriceRange = (priceRange: any) => (
    <div key={priceRange.label} className="mt-[24px] flex justify-between">
      <div className="flex gap-[8px]">
        {renderCheckbox(priceRangeChecked[priceRange.value], () =>
          handleCheckboxChange('priceRange', priceRange)
        )}
        <p
          className={`text-[color:var(--neutral-neutral-400,#6C767E)] text-base not-italic leading-[normal] font-poppins font-[400]`}
        >
          {priceRange.label}
        </p>
      </div>
      <p
        className={`text-[color:var(--neutral-neutral-400,#6C767E)] text-base not-italic leading-[normal] font-poppins font-[400]`}
      >
        {''}
      </p>
    </div>
  );
  
  return (
    <div className="w-[330px] mb-12">
      {/* Sale */}
      <p className={`text-black text-xl not-italic leading-[normal] font-poppins font-[600]`}>
        Sale
      </p>
      <div className="flex flex-col pl-4 pr-3 pb-8 mb-8 border-b border-solid border-blue-200">
        <div className=" mt-[24px] flex justify-between">
          <div className="flex gap-[8px]">
            {renderCheckbox(onSaleChecked, () => handleCheckboxChange('onSale', ''))}
            <p
              className={`text-[color:var(--neutral-neutral-400,#6C767E)] text-base not-italic leading-[normal] font-poppins font-[400]`}
            >
              On Sale
            </p>
          </div>
          <p
            className={`text-[color:var(--neutral-neutral-400,#6C767E)] text-base not-italic leading-[normal] font-poppins font-[400]`}
          >
            {onSaleCount <= 0 ? '' : onSaleCount}
          </p>
        </div>
      </div>

      {/* Featured */}
      <p className={`text-black text-xl not-italic leading-[normal] font-poppins font-[600]`}>
        Featured
      </p>
      <div className="flex flex-col pl-4 pr-3 pb-8 mb-8 border-b border-solid border-blue-200">
        <div className=" mt-[24px] flex justify-between ">
          <div className="flex gap-[8px] ">
            {renderCheckbox(featuredChecked, () => handleCheckboxChange('featured', ''))}
            <p
              className={`text-[color:var(--neutral-neutral-400,#6C767E)] text-base not-italic leading-[normal] font-poppins font-[400]`}
            >
              New Arrivals
            </p>
          </div>
          <p
            className={`text-[color:var(--neutral-neutral-400,#6C767E)] text-base not-italic leading-[normal] font-poppins font-[400]`}
          >
            {featuredCount <= 0 ? '' : featuredCount}
          </p>
        </div>
      </div>

      {/* Categories */}
      {/* <p className={`text-black text-xl not-italic leading-[normal] font-poppins font-[600]`}>
        Categories
      </p>
      <div className="flex flex-col pl-4 pr-3 pb-8 mb-8 border-b border-solid border-blue-200" >
        {displayCategories?.map(renderCategory)}
        {categories?.length > 5 && (
          <button
            className={`text-[color:var(--neutral-neutral-400,#6C767E)] mt-5 text-base not-italic leading-[normal] underline font-poppins font-[400]`}
            onClick={() => setShowAllCategories(!showAllCategories)}
          >
            {showAllCategories ? 'See Less' : 'See More'}
          </button>
        )}
      </div> */}

      {/* Price Range */}
      {/* <p className={`text-black text-xl not-italic leading-[normal] font-poppins font-[600]`}>
        Price Range
      </p>
      <div className="flex flex-col pl-4 pr-3 pb-8 mb-8 border-b border-solid border-blue-200">
        {priceRanges.map(renderPriceRange)}
      </div> */}

      {/* Apply Filter and Remove Filter buttons */}
      <div className="flex flex-col mt-4">
        <Button
          onClick={onFilter}
          variant={ButtonTypes.PRIMARY}
          className={`px-4 py-2 border border-red-500 text-white mb-[10px] h-[48px]`}
          disabled={isFilterApplied}
        >
          {isLoading ? (
            <Loader />
          ) : (
            <p className={`font-poppins font-[500] text-[14px]`}>Apply Filter</p>
          )}
        </Button>
        <Button
          onClick={onClearFilter}
          variant={ButtonTypes.DEFAULT}
          className={`px-4 py-2 border border-red-500 h-[48px]`}
        >
          <p className={`font-poppins font-[500] text-[14px] text-[--primary]`}>Remove Filter</p>
        </Button>
      </div>
    </div>
  );
};
const WrappedComponent = compose(
  withSearchHoc,
  withSearchSelector,
  withNavSelector,
  withCategorySelector
)(SideBar);
export default memo(WrappedComponent);
