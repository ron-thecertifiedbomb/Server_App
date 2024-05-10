import React from 'react';
import Arrow from '@mui/icons-material/KeyboardArrowRight';

import { Poppins400, Poppins600 } from '@/shared/fonts/fontfamily';
import { Product } from '@/shared/interfaces';

import styles from './BreadCrumbs.module.scss';

const BreadCrumbs = ({ item }: { item: Product }) => {
  const { shopName, categories } = item;

  return (
    <div className={`${styles.productBreadCrums} flex-wrap hidden lg:flex px-4 mt-16`}>
      <button className={`${styles.productBreadCrumsButton} ${Poppins400.className}`}>
        {shopName}
      </button>
      <Arrow fontSize={'small'} />
      <button
        className={`${styles.productBreadCrumsButton} ${styles.productBreadCrumsActive} ${Poppins600.className}`}
      >
        {categories.category}
      </button>
    </div>
  );
};

export default BreadCrumbs;
