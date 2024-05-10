'use client';

import React, { memo, useEffect } from 'react';
import { compose } from 'redux';

import Container from '@/components/Containers/Container';
import { withCategoryHoc } from '@/redux/slice/categories/hoc';
import { withHomeHoc } from '@/redux/slice/homeSlice/hoc';
import { withSearchHoc } from '@/redux/slice/searchSlice/hoc';

import HeroBanner from './components/HeroBanner/HeroBanner';
import NewArrivals from './components/ProductLists/NewArrivals';
import ProductOnSale from './components/ProductLists/ProductOnSale';
import PromotionSection from './components/Promotions/PromotionSection';
import Sellers from './components/Sellers/Sellers';

interface homeProps {
  setHomeRequest: any;
  getSearchCategoryRequest: () => void;
  setClearSearchAction: any;
}

const HomePage = (props: homeProps) => {

  return (
    <div>
      <HeroBanner />
      <Container>
        <Sellers />
        <PromotionSection />
      </Container>
      <ProductOnSale
        heading="7.7 July Sale!"
        subHeading="Enjoy discounts up to 50% off! Browse the collection now"
      />
      <NewArrivals />
    </div>
  );
};

const WrappedComponent = compose(withHomeHoc, withCategoryHoc, withSearchHoc)(HomePage);

export default memo(WrappedComponent);
