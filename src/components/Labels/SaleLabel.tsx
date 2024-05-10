import React from 'react';

import { Format } from '@/shared/utilities';

import styles from './SaleLabel.module.scss';

const SaleLabel = ({
  retailPrice,
  style,
  className,
}: {
  retailPrice: number;
  style?: object;
  className?: string;
}) => {
  return (
    <p style={style} className={`${styles.priceText} ${className}`}>
      {Format.currency(retailPrice)}
    </p>
  );
};

export default SaleLabel;
