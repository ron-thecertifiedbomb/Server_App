import React from 'react';
import Image from 'next/image';
import { compose } from 'redux';

import { withProductHoc } from '@/redux/slice/productSlice/hoc';
import { Poppins400, Poppins500 } from '@/shared/fonts/fontfamily';
import { ProductVariationProps, VariationOptionProps } from '@/shared/interfaces';

const VariationOptions = ({
  variations,
  variationName,
  selectedVariation,
  setSelectedVariation,
  setSelectedSubVariation,
  setUserQuantity,

  //dispatch
  setSelectedVariant,
}: VariationOptionProps) => {
  const RenderVariationOptions = (variant: ProductVariationProps) => {
    const isEnabled =
      (variant.totalQuantity && variant.subVariation !== null) ||
      variant.subVariation !== undefined;

    return (
      <div
        className={`${
          isEnabled
            ? variant.productVariationId === selectedVariation?.productVariationId
              ? 'border-red-600 text-red-600'
              : 'border-black text-black'
            : 'opacity-60 border-gray-400'
        }  flex flex-row rounded-md border m-1.5 py-1 px-2 w-auto justify-around`}
        onClick={() =>
          isEnabled &&
          (setSelectedVariant(variant),
          setSelectedVariation(variant),
          setSelectedSubVariation(null),
          setUserQuantity(1))
        } // add logic for when selecting a variation, also show the selected variation image in image slider
      >
        <Image alt="variation-photo" src={variant.image} height={15} width={20} />
        <p className={`${Poppins400.className}  ml-2 self-center`}>{variant.optionForVariation}</p>
      </div>
    );
  };

  return (
    variations && (
      <div className={`flex flex-row`}>
        <div className={`basis-1/3`}>
          <p className={`${Poppins500.className} font-medium text-xl m-1`}>{variationName}</p>
        </div>
        <div className={`flex basis-2/3 flex-wrap`}>
          {variations?.map((variant) => RenderVariationOptions(variant))}
        </div>
      </div>
    )
  );
};

const WrappedComponent = compose(withProductHoc)(VariationOptions);
export default WrappedComponent;
