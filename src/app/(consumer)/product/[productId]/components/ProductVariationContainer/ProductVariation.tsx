'use client';
import React, { useState } from 'react';

import { Product, ProductVariationProps } from '@/shared/interfaces/data';
import { preSelectVariant } from '@/shared/utilities';

import EditQuantity from './components/EditQuantity';
import SubVariationOptions from './components/SubVariationOptions';
import VariationOptions from './components/VariationOptions';

const ProductVariation = ({
  product,
  setSelectedVariant,
}: {
  product: Product;
  setSelectedVariant: Function;
}) => {
  const { variations, variationName, subVariationName } = product;

  const preSelection = () => {
    setSelectedVariant(preSelectVariant(variations));
    return variations ? preSelectVariant(variations) : null;
  };

  const [selectedVariation, setSelectedVariation] = useState<ProductVariationProps | null>(
    preSelection
  );
  const [selectedSubVariation, setSelectedSubVariation] = useState<ProductVariationProps | null>(
    null
  );
  const [userQuantity, setUserQuantity] = useState(1);

  return (
    <div>
      {variations && (
        <>
          <VariationOptions
            variations={variations}
            variationName={variationName}
            selectedVariation={selectedVariation}
            setSelectedVariation={setSelectedVariation}
            setSelectedSubVariation={setSelectedSubVariation}
            setUserQuantity={setUserQuantity}
          />
          <SubVariationOptions
            subVariationName={subVariationName}
            selectedVariation={selectedVariation}
            selectedSubVariation={selectedSubVariation}
            setSelectedSubVariation={setSelectedSubVariation}
            setUserQuantity={setUserQuantity}
          />
        </>
      )}
      <EditQuantity
        product={product}
        variations={variations}
        variationName={variationName}
        subVariationName={subVariationName}
        selectedVariation={selectedVariation}
        selectedSubVariation={selectedSubVariation}
        userQuantity={userQuantity}
        setUserQuantity={setUserQuantity}
      />
    </div>
  );
};

export default ProductVariation;
