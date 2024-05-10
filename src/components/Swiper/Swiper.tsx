'use client';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import React, { useEffect, useState } from 'react';
import { Autoplay, Navigation, Pagination, Parallax, Thumbs } from 'swiper/modules';
import { Swiper as RNSwipper, SwiperSlide } from 'swiper/react';

import { SwiperProps } from '@/shared/interfaces';

import 'swiper/css';

const Swiper = ({
  id,
  className,
  items,
  autoplay = true,
  pagination = false,
  navigation = false,
  thumbnail = false,
  thumbsSwiper,
  delay = 6000,
  loop = true,
  breakpoints = {},
  renderItem,
  itemsPerView = 1,
  spaceBetween = 0,
}: SwiperProps) => {
  const [swiper, setSwiper]: any = useState(null);
  let modules = [Parallax];

  if (autoplay) modules.push(Autoplay);
  if (pagination) modules.push(Pagination);
  if (navigation) modules.push(Navigation);
  if (thumbnail) modules.push(Thumbs);

  useEffect(() => {
    /** Fix for autoplay, navigation is not working */
    if (swiper && autoplay && pagination && navigation) {
      setTimeout(() => {
        swiper?.slideTo(1);
        swiper?.slideTo(0);
      }, 100);
    }
  }, [autoplay, navigation, pagination, swiper]);

  return (
    <div className={className} id={id}>
      <RNSwipper
        autoplay={{
          delay: delay,
          disableOnInteraction: false,
        }}
        loop={loop}
        pagination={{
          clickable: true,
        }}
        breakpoints={breakpoints}
        navigation={navigation}
        modules={modules}
        slidesPerView={itemsPerView}
        spaceBetween={spaceBetween}
        thumbs={{ swiper: thumbsSwiper }}
        onSwiper={(el) => setSwiper(el)}
        observer={true}
        parallax={true}
      >
        {items?.map((item: any, i: number) => (
          <SwiperSlide key={i}>{renderItem(item)}</SwiperSlide>
        ))}
      </RNSwipper>
    </div>
  );
};

export default Swiper;
