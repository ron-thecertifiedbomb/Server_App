'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { ButtonTypes } from '@/shared/enums';
import { ProductCardProps } from '@/shared/interfaces';
import { Format } from '@/shared/utilities';

import Button from '../Buttons/Button';
import Ratings from '../Ratings/Ratings';

import Card from './Card';

const ProductCard = ({ product }: ProductCardProps) => {
  const { productName, discountPercentage, rating, price, image, productId } = product;
  const { minimumPrice, salesPrice, retailPrice } = price || product;

  const displayPrice = minimumPrice ? minimumPrice : salesPrice;
  const isOnSale = salesPrice !== retailPrice;

  return (
    <Link href={`product/${productId}`} as={`/product/${productId}`}>
      <Card className="w-[211px] h-[291px] xl:w-[330px] xl:h-[424px]">
        <div className={`relative h-[167px] xl:h-[300px]`}>
          {discountPercentage > 0 && (
            <div
              className={`font-poppins font-regular absolute bg-[var(--primary)] text-white top-4 left-4 z-10 rounded p-4 text-[12px] py-[6px] px-[12px] `}
            >
              -{Math.round(discountPercentage)}%
            </div>
          )}
          {image && (
            <Image
              className={'object-contain aspect-square'}
              src={image}
              alt={productName}
              fill
              priority
              sizes="100%"
            />
          )}
        </div>
        <div className={`h-[124px] p-[12px]`}>
          <div className={`font-poppins font-regular text-[14px] leading-[21px] truncate`}>
            {productName}
          </div>

          <div className={`mt-[8px] mb-[3px] min-h-[42px]`}>
            <p
              className={`font-poppins font-medium text-[16px] text-[var(--primary)] leading-[24px]`}
            >
              {Format.currency(displayPrice)}
            </p>
            {isOnSale && (
              <p
                className={`font-poppins font-regular text-[12px] text-[var(--paleSky)] leading-[18px] line-through`}
              >
                {Format.currency(retailPrice)}
              </p>
            )}
          </div>

          <div className="flex flex-row justify-between">
            <Ratings className="ml-[-4px] mt-[1px]" ratings={rating} size={16} withText />
            <Button
              className="mt-[-5px]"
              variant={ButtonTypes.TRANSPARENT}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
            >
              <Image alt="add-button" src={'/add-cart-plus.svg'} height={26} width={26} />
            </Button>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ProductCard;
