/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Link from 'next/link';

import { Poppins400 } from '@/shared/fonts/fontfamily';

import styles from './ProductTabs.module.scss';

const ProductTabs = () => {
  return (
    <div className={`${styles.root} bg-white sticky top-[0] w-full flex lg:hidden px-3 z-50`}>
      <Link
        href={'#productInfo'}
        className={`${styles.buttonActive} rounded-none flex flex-1 py-[14px] justify-center border-b-2`}
      >
        <p className={`${styles.buttonActiveText} ${Poppins400.className}`}>Product</p>
      </Link>
      <Link
        href={'#productDescription'}
        className={`${styles.buttonInActive} rounded-none flex flex-1 py-[14px] justify-center border-b-2`}
      >
        <p className={`${styles.buttonInActiveText} ${Poppins400.className}`}>Description</p>
      </Link>

      <Link
        href={'#productReviews'}
        className={`${styles.buttonInActive} rounded-none flex flex-1 py-[14px] justify-center border-b-2`}
      >
        <p className={`${styles.buttonInActiveText} ${Poppins400.className}`}>Review</p>
      </Link>
    </div>
  );
};

export default ProductTabs;
