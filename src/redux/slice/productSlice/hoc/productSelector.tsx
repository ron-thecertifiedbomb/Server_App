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
export const withProductSelector = (CustomComponent: any) => {
  return (props: any) => {
    //State
    const productData = useSelector((state: any) => state.Product.data);
    const selectedVariant = useSelector((state: any) => state.Product.selectedVariant);
    const isLoading = useSelector((state: any) => state.Product.isLoading);

    return (
      <CustomComponent
        {...props}
        isLoading={isLoading}
        productData={productData}
        selectedVariant={selectedVariant}
      />
    );
  };
};
