/* eslint-disable react/display-name */
import React from 'react';
/** Redux */
import { useSelector } from 'react-redux';

/**
 * A HOC that is being used for our network.
 * It has states that can be used to all of the custom
 * component attached to it.
 *
 * @param CustomComponent - A react functional/class component.
 * @returns {React.FC}
 */
export const withHomeSelector = (CustomComponent: any) => {
  return (props: any) => {
    // States
    const categories = useSelector((state: any) => state?.Home?.data?.categories);
    const onsale = useSelector((state: any) => state?.Home?.data?.productOnSale);
    const newarrivals = useSelector((state: any) => state?.Home?.data?.newArrivals);

    return (
      <CustomComponent
        {...props}
        categories={categories}
        onsale={onsale}
        newrrivals={newarrivals}
      />
    );
  };
};
