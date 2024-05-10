import React from 'react';
import Image from 'next/image';

import { Poppins400, Poppins500 } from '@/shared/fonts/fontfamily';
import { Product } from '@/shared/interfaces';
interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { productName, retailPrice, discountPrice, discountPercentage, imagePath, onSale } =
    product;
  const formattedRetailPrice = new Number(retailPrice).toLocaleString('en-PH', {
    style: 'currency',
    currency: 'PHP',
  });

  const formattedDiscountPrice = new Number(discountPrice).toLocaleString('en-PH', {
    style: 'currency',
    currency: 'PHP',
  });

  return (
    <div className=" bg-white flex w-[330px] h-[424px] flex-col items-start shrink-0 rounded border border-[color:var(--neutral-neutral-200,#D7E3E9)] border-solid relative mb-[24px]">
      <div
        className={`absolute top-[8px] left-[10px] bg-[#E60C2B] h-[32px] w-[52px] text-white justify-center items-center rounded px-3 py-1.5 ${
          onSale ? 'flex' : 'hidden'
        }`}
      >
        <span
          className={`text-[color:var(--flowkit-white,var(--White,#FFF))] text-xs not-italic font-normal leading-[normal] ${Poppins400.className}`}
        >
          {Math.round(discountPercentage)}%
        </span>
      </div>
      <div className="flex justify-center items-center w-[330px] h-[300px]">
        <div className="relative">
          <Image src={imagePath} fill={true} alt="product-image" />
        </div>
      </div>
      <div className="pl-[12px]">
        <p
          className={` text-[#212529] text-[14px] text-sm not-italic font-normal leading-normal mb-[8px] ${Poppins400.className}`}
        >
          {productName}
        </p>
        <p className={`text-[#E60C2B] text-[16px] leading-normal mb-[8px] ${Poppins400.className}`}>
          {formattedDiscountPrice}
        </p>
        <p
          className={` text-[#6C767E] text-[12px] leading-[10px] line-through ${
            Poppins500.className
          } ${onSale ? 'flex' : 'hidden'}`}
        >
          {formattedRetailPrice}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
