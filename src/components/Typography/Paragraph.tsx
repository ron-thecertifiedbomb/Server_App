import React from 'react';

import { ParagraphProps } from '@/shared/interfaces';

import styles from './Paragraph.module.css';

const Paragraph = ({ children, style }: ParagraphProps) => {
  return (
    <p className={styles.text} style={style}>
      {children}
    </p>
  );
};

export default Paragraph;
