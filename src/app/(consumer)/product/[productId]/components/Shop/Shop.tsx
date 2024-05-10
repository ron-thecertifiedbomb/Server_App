'use client';
import React from 'react';
import { Avatar } from '@mui/material';
import { useRouter } from 'next/navigation';

interface ShopProps {
  shopName: string;
}
const Shop = (props: ShopProps) => {
  const { shopName } = props;
  const router = useRouter();
  let buttonName = 'Visit Shop';

  return (
    <div className="flex flex-col border-2 border-gray-200 px-2 py-5 mt-6 rounded-md">
      <div className={`flex flex-row`}>
        <div className={'flex flex-1 flex-row align-middle text-center'}>
          <Avatar
            className="mr-2"
            src={
              'https://loremflickr.com/cache/resized/65535_52540193287_23e9d85da0_n_320_240_nofilter.jpg'
            }
            style={styles.avatar}
          />

          <div className={'self-center ml-1'}>
            <p className={`text-left font-poppins font-medium text-lg`}>{shopName}</p>
          </div>
        </div>

        {/* Hid this because they wanted to only show this when data is not static. */}
        {/* <div className={`flex flex-col text-center mr-4`}>
          <p className={`text-red-600 font-poppins font-medium mb-2 text-sm `}>{ratings}</p>
          <p className={`text-xs font-poppins font-normal`}>Ratings</p>
        </div>

        <div className={`flex flex-col text-center mr-4`}>
          <p className={`text-red-600 font-poppins font-medium mb-2 text-sm `}>{products}</p>
          <p className={`text-xs font-poppins font-normal `}>Products</p>
        </div> */}
      </div>

      <button
        className={`flex-1  items-center bg-red-600 text-white mt-5 mx-1 p-2 rounded-md font-rubik font-medium`}
        onClick={() => router.push(`/search?filter=${shopName}`)}
      >
        {buttonName}
      </button>
    </div>
  );
};

export default Shop;

const styles = {
  avatar: {
    height: 48,
    width: 48,
    borderRadius: 50,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'red',
  },
};
