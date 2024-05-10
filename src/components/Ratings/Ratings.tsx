import React from 'react';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';

import { Poppins400 } from '@/shared/fonts/fontfamily';

import styles from './Ratings.module.scss';

const Ratings = ({
  ratings,
  size,
  withText,
  className,
  style,
}: {
  style?: object;
  ratings: number;
  size: number;
  withText?: boolean;
  className?: string;
}) => {
  const startSize = {
    height: size,
    wdith: size,
  };

  return (
    <div className={`${styles.ratingsContainer} ${className}`} style={style}>
      {withText ? (
        <div className={`flex items-center ${className}`}>
          <StarOutlinedIcon className={'mt-[-2px]'} style={startSize} />
          <p className={`${Poppins400.className} text-black text-[14px]`}>{ratings}</p>
        </div>
      ) : (
        new Array(5).fill('').map((_, index) => {
          const wholeRating = Math.trunc(ratings);
          const currentIndex = index + 1;
          if (currentIndex === wholeRating + 1 && ratings % 1 != 0) {
            return <StarHalfIcon key={index} style={startSize} />;
          }
          if (currentIndex <= wholeRating) {
            return <StarOutlinedIcon key={index} style={startSize} />;
          }

          return <StarBorderOutlinedIcon key={index} style={startSize} />;
        })
      )}
    </div>
  );
};

export default Ratings;
