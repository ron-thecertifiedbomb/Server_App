'use client';

import React, { memo, useCallback, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { compose } from 'redux';

import { withSearchHoc, withSearchSelector } from '@/redux/slice/searchSlice/hoc';

import SearchList from './components/SearchList/SearchList';
import SideBar from './components/SideBar/SideBar';
interface SearchProps {
  setSearchRequest: any;
  //selector
  onSaleChecked: boolean;
  featuredChecked: boolean;
}

const SearchPage = (props: SearchProps) => {
  const { setSearchRequest, onSaleChecked, featuredChecked } = props;
  const searchParams = useSearchParams();
  const search = searchParams.get('q');
  const prefilter = searchParams.get('filter');

  const applyPrefilters = useCallback((filter: string, obj: any) => {
    switch (filter) {
      case 'product-on-sale':
        obj.onSale = true;
        obj.featured = false;
        break;
      case 'new-arrivals':
        obj.onSale = false;
        obj.featured = true;
        break;
      case 'products-you-might-like':
        obj.onSale = false;
        obj.featured = false;
      default:
        break;
    }

    return obj;
  }, []);

  const onSearchItem = useCallback(() => {
    let obj = {
      onSale: onSaleChecked,
      featured: featuredChecked,
      search: search ? search : '',
      categories: [],
      subCategories: [],
      priceRangeId: [],
      minPrice: 0,
      maxPrice: 100000,
      page: 1,
      pageSize: 15,
      sort: '',
    };

    // PRE-FITLER
    if (prefilter) {
      obj = applyPrefilters(prefilter, obj);
    }
    setSearchRequest(obj);
    console.log('onSearchItem', obj);
  }, [search, prefilter, setSearchRequest, applyPrefilters]);

  useEffect(() => {
    onSearchItem();
  }, [onSearchItem]);

  return (
    <div className="bg-[#FFF8F4] flex pt-[48px] pl-[24px] gap-[24px] ">
      <div className=" bg-[#FFF8F4] flex pt-[48px] pl-[24px] gap-[24px] max-w-[1536px] w-full m-auto">
        <SideBar />
        <SearchList />
      </div>
    </div>
  );
};

const WrappedComponent = compose(withSearchHoc, withSearchSelector)(SearchPage);
export default memo(WrappedComponent);
