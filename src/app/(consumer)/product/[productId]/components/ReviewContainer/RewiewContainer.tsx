import React from 'react';

import ReviewCard from '@/components/Cards/ReviewCard';
import { Reviews } from '@/shared/interfaces';

const ReviewContainer = ({ reviews }: { reviews: Reviews[] }) => {
  return reviews ? reviews.map((item, index) => <ReviewCard key={index} item={item} />) : null;
};

export default ReviewContainer;
