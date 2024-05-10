import React from 'react';

// import { Calculation } from '@/shared/utilities';
import styles from './RatingGraph.module.scss';

const RatingGraph = ({
  ratingLabel,
  ratingCount,
  totalRating,
}: {
  ratingLabel: number;
  ratingCount: number;
  totalRating: number;
}) => {
  // const percentage = Calculation.getPercentage(totalRating, ratingCount);
  const returnWidth = { width: (totalRating / ratingCount) * 200 };

  return (
    <div className={`flex mb-4 sm:mb-0 items-center justify-center align-middle `}>
      <p className={`${styles.ratingLabel} font-poppins font-medium`}>{ratingLabel}</p>
      <div className={`${styles.baseGraphContainer} mx-1 `}>
        <div className={`${styles.coloredGraphContainer}`} style={returnWidth} />
      </div>
      <p className={`${styles.ratingLabel} font-poppins font-medium`}>{totalRating}</p>
    </div>
  );
};

export default RatingGraph;
