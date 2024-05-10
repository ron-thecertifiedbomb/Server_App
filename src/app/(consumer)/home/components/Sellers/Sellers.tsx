import React from 'react';
import Image from 'next/image';

import { sellers } from '../../../../../../__mocks__/brands';

const Sellers = () => {
  return (
    <div className="h-[225px] flex justify-between items-center p-[24px]">
      {sellers?.map((item: any, i: number) => (
        <div className="flex flex-col items-center h-[120px] xl:h-[160px] w-[123px]" key={i}>
          <div className="relative h-[80px] w-[80px] xl:h-[120px] xl:w-[120px] flex justify-center items-center pb-[16px]">
            <Image
              className="!h-[49.41px] !w-[70px] xl:!h-[70.58px] xl:!w-[100px] !relative"
              src={item.image}
              alt={item.name}
              fill
            />
          </div>
          <p
            className={`font-poppins font-medium text-[16px] leading-[24px] text-[var(--paleSky)] whitespace-nowrap`}
          >
            {item.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Sellers;
