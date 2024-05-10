import React from 'react';

import { TextProps } from '@/shared/interfaces';

import styles from './Text.module.css';

const Text = ({ children, style }: TextProps) => {
  return (
    <span className={styles.text} style={style}>
      {children}
    </span>
  );
};

Text.defaultProps = {};

export default Text;
