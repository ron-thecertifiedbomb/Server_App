'use client';
import React from 'react';
import Image from 'next/image';

import styles from './ImageContainer.module.scss';

const RenderSwiperSlide = (image: any, index: any) => (
  <div className={styles.productItem} key={index}>
    <Image
      className={styles.productBackground}
      src={image.path}
      alt="Stuff Logo"
      width={500}
      height={500}
    />
  </div>
);
export default RenderSwiperSlide;
