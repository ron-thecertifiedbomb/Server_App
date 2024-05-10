import React from 'react';
import { compose } from 'redux';

import { withProductHoc } from '@/redux/slice/productSlice/hoc';
import { Poppins400, Poppins500 } from '@/shared/fonts/fontfamily';
import { ProductVariationProps, SubVariationOptionProps } from '@/shared/interfaces';

const SubVariationOptions = ({
  subVariationName,
  selectedVariation,
  selectedSubVariation,
  setSelectedSubVariation,
  setUserQuantity,

  // dispatch
  setSelectedVariant,
}: SubVariationOptionProps) => {
  const RenderSubVariationOptions = (subVariant: ProductVariationProps) => {
    const isEnabled = subVariant.totalQuantity;

    return (
      <div
        className={`${
          isEnabled
            ? subVariant?.productSubVariationId === selectedSubVariation?.productSubVariationId
              ? 'border-red-600 text-red-600'
              : 'border-black text-black'
            : 'opacity-60 border-gray-400'
        } flex flex-row  rounded-md border  m-1.5 py-1 px-2 w-auto`}
        onClick={() =>
          isEnabled &&
          (setSelectedVariant(subVariant), setSelectedSubVariation(subVariant), setUserQuantity(1))
        }
      >
        <p
          className={`${Poppins400.className} ${
            subVariant.totalQuantity === 0 && 'text-gray-500'
          } `}
        >
          {subVariant.subVariantOption}
        </p>
      </div>
    );
  };

  return (
    selectedVariation && (
      <div className={`flex flex-row mt-3`}>
        <div className={`basis-1/3`}>
          <p className={`${Poppins500.className} font-medium text-xl m-1`}>{subVariationName}</p>
        </div>
        <div className={`flex basis-2/3 flex-wrap`}>
          {selectedVariation?.subVariation?.map((subVariant) =>
            RenderSubVariationOptions(subVariant)
          )}
        </div>
      </div>
    )
  );
};

const WrappedComponent = compose(withProductHoc)(SubVariationOptions);
export default WrappedComponent;
