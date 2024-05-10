import React from 'react';

import { Format } from '@/shared/utilities';

import styles from './PriceLabel.module.scss';

const PriceLabel = ({
  salesPrice,
  style,
  className,
}: {
  salesPrice: number;
  style?: object;
  className?: string;
}) => {
  return (
    <p style={style} className={`${styles.priceText} ${className}`}>
      {Format.currency(salesPrice)}
    </p>
  );
};

export default PriceLabel;
