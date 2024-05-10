import React from 'react';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import Link from 'next/link';

import Button from '@/components/Buttons/Button';

const PromotionSectionItem = (props: any) => {
  const {
    backgroundImage,
    backgroundColor,
    buttonRedirection,
    buttonText,
    buttonColor,
    buttonBorder,
    buttonTextSize,
    position,
    header,
    subText,
    color,
    showRightArrow,
  } = props;

  const contentPosition: any = {
    left: '!right-[unset]',
    center: 'text-center',
    right: '!left-[unset]',
  };

  const buttonShape: any = {
    circle: '!rounded-[50px] !py-[16px] !px-[100px]',
    rounded: '!rounded-[4px] !p-[16px]',
  };

  return (
    <div
      className="h-[300px] px-[50px] !bg-no-repeat !bg-cover relative"
      style={{ background: `url(${backgroundImage})`, backgroundColor, color }}
    >
      <div className="container mx-auto h-[inherit] relative">
        <div
          className={`absolute w-fit h-fit top-0 bottom-0 left-0 right-0 m-auto ${contentPosition[position]}`}
        >
          <p
            className={`font-poppins font-[600] text-[24px] leading-[36px] xl:text-[36px] xl:leading-[54px]`}
          >
            {header}
          </p>
          {subText && subText !== '' && (
            <p className={`font-poppins font-regular text-[16px]`}>{subText}</p>
          )}
          <Link href={buttonRedirection}>
            <Button
              className={`mt-[20px] ${buttonShape[buttonBorder]}`}
              style={{ color: buttonColor }}
            >
              <div className="flex justify-center items-center">
                <p className={`text-[${buttonTextSize}] leading-[30px] font-poppins font-[600]`}>
                  {buttonText}
                </p>
                {showRightArrow && (
                  <KeyboardArrowRightRoundedIcon
                    sx={{ color: buttonColor, height: 16, width: 16 }}
                  />
                )}
              </div>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PromotionSectionItem;
