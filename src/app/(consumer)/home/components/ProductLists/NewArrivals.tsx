import React, { memo } from 'react';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import { useRouter } from 'next/navigation';
import { compose } from 'redux';

import ProductList from '@/components/Lists/ProductList';
import { withHomeSelector } from '@/redux/slice/homeSlice/hoc';

interface HomeNewArrivalsProps {
  newrrivals: [];
}

const NewArrivals = (props: HomeNewArrivalsProps) => {
  const router = useRouter();
  const { newrrivals } = props;

  return (
    <div className="h-[501px] xl:h-[634px]  container mx-auto  p-[24px]">
      <div className="flex justify-between items-center pb-[48px]">
        <div className="text-primary">
          <p className="font-poppins font-medium text-[36px] leading-[54px]">New arrivals</p>
        </div>
        <div
          className="text-primary flex items-center cursor-pointer"
          onClick={() => router.push('/search?filter=new-arrivals')}
        >
          <p className="font-poppins font-regular text-[16px] leading-[24px] pr-[8px]">See more</p>
          <KeyboardArrowRightRoundedIcon sx={{ height: 16, width: 16 }} />
        </div>
      </div>
      <div>
        <ProductList products={newrrivals} />
      </div>
    </div>
  );
};

const WrappedComponent = compose(withHomeSelector)(NewArrivals);
export default memo(WrappedComponent);
