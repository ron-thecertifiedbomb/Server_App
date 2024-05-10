/* eslint-disable react-native/no-inline-styles */
import React, { useCallback, useEffect, useState } from 'react';

import { ProductListProps } from '@/shared/interfaces';
import { Array } from '@/shared/utilities';

import ProductCard from '../Cards/ProductCard';
import Swiper from '../Swiper/Swiper';

import styles from './ProductList.module.scss';

const ProductList = ({ products }: ProductListProps) => {
  const split = Array.chunk(products, 3);
  const [showSinglePerSlide, setShowSinglePerSlide] = useState(true);

  const onResize = useCallback(() => {
    setShowSinglePerSlide(window.innerWidth < 1024);
  }, []);

  useEffect(() => {
    setShowSinglePerSlide(window.innerWidth < 1024);
    window.addEventListener('resize', onResize, { passive: true });
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [onResize]);

  const renderSlides = (group: any) => {
    return (
      <div className={styles.productGroup}>
        {group?.map((item: any, i: number) => (
          <React.Fragment key={i}>
            <ProductCard product={item} />
          </React.Fragment>
        ))}
      </div>
    );
  };

  return (
    <div className={styles.root}>
      <Swiper
        className={styles.swiper}
        pagination={true}
        navigation={true}
        items={showSinglePerSlide ? products : split}
        renderItem={
          showSinglePerSlide
            ? (item: any) => <ProductCard product={item} />
            : (item: any) => renderSlides(item)
        }
      />
    </div>
  );
};

export default ProductList;
