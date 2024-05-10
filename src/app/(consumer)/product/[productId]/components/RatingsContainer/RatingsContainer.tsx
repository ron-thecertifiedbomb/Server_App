import React from 'react';

import RatingGraph from '@/components/Ratings/RatingGraph';
import Ratings from '@/components/Ratings/Ratings';
import { Poppins400 } from '@/shared/fonts/fontfamily';
import { Stats } from '@/shared/interfaces';

import styles from './RatingsContainer.module.scss';

const RatingsContainer = ({ stats }: { stats: Stats }) => {
  const { averageRating, totalRating, ratingCounts } = stats;
  return (
    <div className="flex flex-col sm:flex-row mb-6">
      <div className="mr-16">
        <div className={`${styles.ratingsContainer}`}>
          <p className={`${styles.averageRatingText} font-rubik font-semibold`}>{averageRating}</p>
          <p className={`${styles.overallText} font-rubik font-regular`}>/5</p>
        </div>
        <Ratings ratings={averageRating} size={32} />
        <p className={`${styles.totalRatingsText} ${Poppins400.className} mb-4 sm:mb-0`}>
          {totalRating} or {totalRating} ratings
        </p>
      </div>
      <div className="flex flex-col justify-between">
        <RatingGraph ratingLabel={5} ratingCount={totalRating} totalRating={ratingCounts.star5} />
        <RatingGraph ratingLabel={4} ratingCount={totalRating} totalRating={ratingCounts.star4} />
        <RatingGraph ratingLabel={3} ratingCount={totalRating} totalRating={ratingCounts.star3} />
        <RatingGraph ratingLabel={2} ratingCount={totalRating} totalRating={ratingCounts.star2} />
        <RatingGraph ratingLabel={1} ratingCount={totalRating} totalRating={ratingCounts.star1} />
      </div>
    </div>
  );
};

export default RatingsContainer;
