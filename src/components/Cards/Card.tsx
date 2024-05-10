import React from 'react';

import { CardProps } from '@/shared/interfaces';

const Card = ({ className, children }: CardProps) => {
  return <div className={`${className} bg-white shadow rounded`}>{children}</div>;
};

export default Card;
