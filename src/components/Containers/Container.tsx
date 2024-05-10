import React from 'react';

import { ContainerProps } from '@/shared/interfaces';

const Container = ({ children, breakpoint, className }: ContainerProps) => {
  const returnContainer = () => {
    switch (breakpoint) {
      case 'xl':
        return 'xl:container xl:mx-auto';
      case 'lg':
        return 'lg:container lg:mx-auto';
      case 'md':
        return 'md:container md:mx-auto';
      case 'sm':
        return 'sm:container sm:mx-auto';
      case 'xs':
        return 'xs:container xs:mx-auto';
      case 'xxs':
        return 'xxs:container xxs:mx-auto';
      default:
        return 'container mx-auto';
    }
  };

  return <div className={`${returnContainer()} ${className}`}>{children}</div>;
};

export default Container;
