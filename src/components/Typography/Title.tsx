import React from 'react';

import { TitleProps } from '@/shared/interfaces';

import styles from './Title.module.css';

const Title = ({ children, style }: TitleProps) => {
  return (
    <div className={styles.text} style={style}>
      {children}
    </div>
  );
};

export default Title;
