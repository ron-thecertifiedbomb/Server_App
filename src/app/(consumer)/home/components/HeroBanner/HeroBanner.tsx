import React from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import Button from '@/components/Buttons/Button';
import Swiper from '@/components/Swiper/Swiper';
import { ButtonTypes } from '@/shared/enums';

import { banners } from '../../../../../../__mocks__/banner';

const HeroBanner = () => {
  const router = useRouter();

  return (
    <div className="mt-80px bg-[var(--gray600)]">
      <Swiper
        items={banners}
        autoplay={true}
        loop={false}
        delay={6000}
        renderItem={(item: any) => (
          <div className="relative h-[512px] xl:h-[640px]">
            <Image className="object-cover" src={item.image} alt="Stuff Logo" fill priority />
            <div className="container mx-auto h-full">
              <div className="absolute flex flex-col z-[2] h-full w-auto justify-center items-center pl-[10px]">
                <div>
                  <h2
                    className={`font-poppins font-bold text-[36px] leading-[54px] xl:text-[62px] xl:leading-[93px] block text-primary`}
                    style={{ color: item.headingColor }}
                  >
                    {item.header}
                  </h2>
                  <p
                    className={`font-poppins font-medium text-white text-[16px] leading-[24px] my-[12px] max-w-[450px] xl:max-w-[650px]`}
                    style={{ color: item.subHeadingColor }}
                  >
                    {item.subHeader}
                  </p>

                  <Button
                    className="p-[16px] mt-[10px] text-[14px] w-[127px] h-[53px]"
                    variant={ButtonTypes.DEFAULT}
                    onClick={() => router.push(item.url)}
                    style={{
                      backgroundColor: item.buttonColor,
                      color: item.buttonTextColor,
                    }}
                  >
                    <span className="font-poppins font-[600] text-[14px] leading-[21px] mr-[8px]">
                      {item.buttonText}
                    </span>
                    <ShoppingCartOutlinedIcon
                      sx={{ color: '#FFF', width: 16, height: 16, marginTop: '-3px' }}
                    />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default HeroBanner;
