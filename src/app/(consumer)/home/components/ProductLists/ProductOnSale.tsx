import React, { memo } from 'react';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import { useRouter } from 'next/navigation';
import { compose } from 'redux';

import ProductList from '@/components/Lists/ProductList';
import { withHomeSelector } from '@/redux/slice/homeSlice/hoc';

interface HomeProductOnSaleProps {
  heading?: string;
  subHeading?: string;
  onsale: [];
}

const ProductOnSale = (props: HomeProductOnSaleProps) => {
  const router = useRouter();
  const { heading, subHeading, onsale } = props;

  return (
    <div className="h-[555px] xl:h-[688px] container mx-auto bg-[#fff8f4] p-[24px]">
      <div className="flex justify-between items-center pb-[48px]">
        <div className="text-[var(--orangeDeeper)]">
          <p className="font-poppins font-[700] text-[48px] leading-[72px]">{heading}</p>
          <p className="font-poppins font-regular text-[24px] leading-[36px]">{subHeading}</p>
        </div>
        <div
          className="text-primary flex items-center cursor-pointer"
          onClick={() => router.push('/search?filter=product-on-sale')}
        >
          <p className="font-poppins font-regular text-[16px] leading-[24px] pr-[8px]">See more</p>
          <KeyboardArrowRightRoundedIcon sx={{ height: 16, width: 16 }} />
        </div>
      </div>
      <div>
        <ProductList products={onsale} />
      </div>
    </div>
  );
};

const WrappedComponent = compose(withHomeSelector)(ProductOnSale);
export default memo(WrappedComponent);
