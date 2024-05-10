'use client';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeftRounded, ChevronRightRounded } from '@mui/icons-material';
import Image from 'next/image';

import { Poppins500 } from '@/shared/fonts/fontfamily';
import { Product } from '@/shared/interfaces';
import { isProductAvailable } from '@/shared/utilities';

import styles from './ImageContainer.module.scss';

export default function ImageContainer({ item }: { item: Product }) {
  const { images } = item;
  const isSoldOut = !isProductAvailable(item);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const [showThumbnailNavigation, setShowThumbnalNavigation] = useState<Boolean>(false);
  const thumbnailContainerRef = useRef<any>();

  useEffect(() => {
    images.length > 3 && setShowThumbnalNavigation(true);
  }, []);

  useEffect(() => {
    // Get the selected thumbnail element
    const selectedThumbnail = thumbnailContainerRef.current?.children[activeImageIndex];

    // Calculate the position of the selected thumbnail
    const selectedThumbnailPosition = selectedThumbnail?.offsetLeft;

    // Animate the scroll position to the selected thumbnail
    thumbnailContainerRef.current?.scrollTo({
      left: selectedThumbnailPosition,
      behavior: 'smooth',
    });
  }, [activeImageIndex]);

  const SoldOutComponent = () => {
    return (
      <>
        <div className="absolute w-full h-full bg-black opacity-50 " />
        <p
          className={`${Poppins500.className} absolute w-full h-full flex justify-center items-center text-white text-4xl`}
        >
          SOLD OUT
        </p>
      </>
    );
  };

  const navLeftThumbnailIcon = () => {
    return (
      <div
        onClick={() =>
          activeImageIndex > 0 && setActiveImageIndex((activeImageIndex) => activeImageIndex - 1)
        }
        className={`absolute flex h-[100%] w-[50px] bg-gray-500 opacity-50 align-center left-25`}
      >
        <ChevronLeftRounded
          className={` w-[50px] self-center `}
          fontSize={'large'}
          sx={{ color: '#E60C2B' }}
        />
      </div>
    );
  };

  const navRightThumbnailIcon = () => {
    return (
      <div
        onClick={() =>
          activeImageIndex < images.length - 1 &&
          setActiveImageIndex((activeImageIndex) => activeImageIndex + 1)
        }
        className={`absolute flex h-[100%] w-[50px] bg-gray-500 opacity-50 align-center -right-0`}
      >
        <ChevronRightRounded
          className={`w-[50px] self-center`}
          fontSize={'large'}
          sx={{ color: '#E60C2B' }}
        />
      </div>
    );
  };

  return (
    <div className={`flex flex-col lg:w-1/2 xl:w-2/5 w-full h-1/2`}>
      <div className={`relative w-auto h-[500px] shadow-lg`}>
        <Image
          src={images[activeImageIndex].originalPath || images[activeImageIndex].path}
          alt="Picture of the author"
          sizes="500px"
          className={'object-contain'}
          fill
        />
        {isSoldOut && SoldOutComponent()}
      </div>

      <div className={`flex flex-col items-center overflow-hidden`}>
        <p className={`${Poppins500.className} text-red-600 font-semibold my-3 `}>{`${
          activeImageIndex + 1
        } of ${images.length}`}</p>
        <div className={`flex flex-row items-center relative`}>
          {showThumbnailNavigation && navLeftThumbnailIcon()}
          <div
            className={`${styles.myContainer} flex flex-row overflow-x-scroll flex-nowrap box-content`}
            ref={thumbnailContainerRef}
          >
            {images.map((image, index) => (
              <Image
                key={index}
                alt={'product-photo'}
                src={image.originalPath || image.path}
                width={100}
                height={100}
                className={`${
                  index === activeImageIndex && 'border-2 border-red-500 rounded-md'
                } scroll shadow mr-2 h-[100px] w-[100px] object-fit`}
                onClick={() => setActiveImageIndex(index)}
              />
            ))}
          </div>
          {showThumbnailNavigation && navRightThumbnailIcon()}
        </div>
      </div>
    </div>
  );
}
