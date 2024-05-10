import React from 'react';

import { ListProps } from '@/shared/interfaces';

import styles from './List.module.css';

const List = ({ items, renderItem, style }: ListProps) => {
  return (
    <div className={styles.container} style={style}>
      {items?.map((item, i) => (
        <React.Fragment key={i}>{renderItem(item)}</React.Fragment>
      ))}
    </div>
  );
};

List.defaultProps = {
  items: [],
};

export default List;
