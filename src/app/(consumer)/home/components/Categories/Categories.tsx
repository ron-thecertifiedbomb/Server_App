'use client';

import React, { memo, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { compose } from 'redux';

import { withHomeSelector } from '@/redux/slice/homeSlice/hoc';

interface HomeCategoriesProps {
  categories: [];
}

const Categories = (props: HomeCategoriesProps) => {
  const router = useRouter();
  const { categories } = props;

  const renderCategories = useMemo(() => {
    const areas = ['featured', 'top-1', 'top-2', 'top-3', 'bottom-1', 'bottom-2', 'bottom-3'];

    return categories?.map((category: any, i) => {
      return (
        <div
          className={`grid-in-${areas[i]} h-full relative bg-[var(--grayEA)] !bg-cover !bg-no-repeat cursor-pointer`}
          style={{ background: `url(${category.image})`, color: category.color }}
          onClick={() => router.push('/search?category=' + category.productReferenceId)}
          key={i}
        >
          <div className="p-[12px]">
            <p
              className={`font-poppins font-medium ${
                i === 0
                  ? 'text-white text-[24px] leading-[36px] xl:text-[36px] xl:leading-[54px]'
                  : 'text-[16px] leading-[24px] xl:text-[20px] xl:leading-[30px] text-black'
              } `}
            >
              {category.name}
            </p>
            <p
              className={`font-poppins font-regular text-[16px] leading-[24px] ${
                i === 0 ? 'text-white' : 'text-[var(--gray61)]'
              } `}
            >
              {category.productCount} products
            </p>
          </div>
        </div>
      );
    });
  }, [router, categories]);

  return (
    <React.Fragment>
      <div>
        <p
          className={`font-poppins font-medium text-primary p-[24px] h-[102px] text-[36px] leading-[54px] flex items-center`}
        >
          Categories
        </p>
      </div>
      <div className="grid grid-areas-categories grid-cols-categories h-[400px] xl:h-[450px]">
        {renderCategories}

        {/* WORK-AROUND */}
        <div className="grid-in-featured"></div>
      </div>
    </React.Fragment>
  );
};

const WrappedComponent = compose(withHomeSelector)(Categories);

export default memo(WrappedComponent);
