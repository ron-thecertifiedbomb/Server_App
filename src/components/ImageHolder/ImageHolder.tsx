'use client';
import React, { useState } from 'react';
import Image from 'next/image';

import { ImageHolderProps, ImageHolderSize } from '@/shared/interfaces';

const ImageHolder = ({ image, alt, style }: ImageHolderProps) => {
  const [imageSize, setImageSize] = useState<ImageHolderSize | null>();

  const handleImageLoad = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const imgElement = event.target as HTMLImageElement;
    setImageSize({
      width: imgElement.width,
      height: imgElement.height,
    });
  };

  return (
    <div className="relative max-w-1920 max-h-1080" style={style}>
      <Image
        src={image}
        width={1920}
        height={1080}
        layout="responsive"
        objectFit="cover"
        alt={alt}
        onLoad={handleImageLoad}
      />
      {imageSize && (
        <div className="text-white bg-black p-2 absolute top-2 left-2">
          Image Size: {imageSize.width} x {imageSize.height}
        </div>
      )}
    </div>
  );
};

export default ImageHolder;
