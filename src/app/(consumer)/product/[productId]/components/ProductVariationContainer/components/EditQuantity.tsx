/* eslint-disable */
import React, { useMemo } from 'react';
import { Add, Remove } from '@mui/icons-material';

import { Poppins500 } from '@/shared/fonts/fontfamily';
import { EditQuantityProps } from '@/shared/interfaces';
import { isProductAvailable, isSingleProduct, isVariantSelected } from '@/shared/utilities';

const EditQuantity = ({
  product,
  variations,
  variationName,
  subVariationName,
  selectedVariation,
  selectedSubVariation,
  userQuantity,
  setUserQuantity,
}: EditQuantityProps) => {
  const { isSelected, variant } = isVariantSelected(
    variationName,
    subVariationName,
    selectedVariation,
    selectedSubVariation
  );

  const variantStocks = useMemo(() => {
    return isSingleProduct(variations) ? product.totalQuantity : variant?.totalQuantity;
  }, [product, variant, variations]);

  const isMaxQuantity = userQuantity == (variantStocks || 0);
  const isEditable = isProductAvailable(product);
  const minimumQuantity = 1;

  return (
    <div className={`flex flex-row mt-3`}>
      <div className={`basis-1/3`}>
        <p className={`${Poppins500.className} font-medium text-xl m-1`}>Quantity</p>
        {(isSelected || isSingleProduct(variations)) && (
          <p className={`${Poppins500.className} text-xs text-gray-500 m-1`}>
            STOCKS LEFT: {variantStocks}
          </p>
        )}
      </div>
      <div className={`flex basis-2/3 flex-wrap`}>
        <div
          className={`${
            isEditable ? 'border-red-600' : 'border-gray-400'
          } flex flex-row rounded-md border   m-1.5 py-1 px-2 w-auto `}
        >
          <Remove
            sx={{
              color: `${
                isEditable
                  ? (isSelected || isSingleProduct(variations)) && userQuantity > 1
                    ? '#E60C2B'
                    : '#FCA99C'
                  : '#A8B5BE'
              }`,
            }}
            className={`self-center`}
            fontSize="small"
            onClick={() =>
              setUserQuantity((userQuantity: number) =>
                userQuantity === minimumQuantity ? userQuantity : userQuantity - 1
              )
            }
          />
          <p
            className={`${Poppins500.className} ${
              isEditable ? !selectedSubVariation && 'text-gray-500' : 'text-gray-400'
            } flex items-center mx-3`}
          >
            {userQuantity}
          </p>
          <Add
            sx={{
              color: `${
                isEditable
                  ? (isSelected || isSingleProduct(variations)) && !isMaxQuantity
                    ? '#E60C2B'
                    : '#FCA99C'
                  : '#A8B5BE'
              }`,
            }}
            className={`self-center`}
            fontSize="small"
            onClick={() =>
              setUserQuantity((userQuantity: number) =>
                (isSelected || isSingleProduct(variations)) && !isMaxQuantity
                  ? userQuantity + 1
                  : userQuantity
              )
            }
          />
        </div>
      </div>
    </div>
  );
};

export default EditQuantity;
