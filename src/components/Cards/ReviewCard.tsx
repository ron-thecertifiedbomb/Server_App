import React from 'react';
import { Avatar } from '@mui/material';

import { Poppins400, Poppins500, Rubik400 } from '@/shared/fonts/fontfamily';
import { Reviews } from '@/shared/interfaces';
import { Format } from '@/shared/utilities';

import Ratings from '../Ratings/Ratings';

import styles from './ReviewCard.module.scss';

const ReviewCard = ({ item }: { item: Reviews }) => {
  const { userImage, name, rating, dateReviewed, variation, comment } = item;

  const formattedDate = Format.date(dateReviewed, 'MMM  DD, YYYY');

  const returnDateAndVariation = () => {
    let returnText = formattedDate;
    if (variation) returnText += ` | Variant: ${variation}`;

    return (
      <p className={`${Rubik400.className} ${styles.dateAndVariationText} my-2`}>{returnText}</p>
    );
  };

  return (
    <div className={`${styles.container} flex flex-1 flex-col mb-4 shadow px-4 py-6`}>
      <div className={`flex items-center`}>
        <Avatar className="mr-2" src={userImage} style={style.avatar} />
        <p className={`${styles.nameText} ${Poppins500.className}`}>{name}</p>
      </div>
      {returnDateAndVariation()}
      <Ratings ratings={rating} size={24} />
      <p className={`${Poppins400.className} mt-3 ${styles.descriptionText}`}>{comment}</p>
    </div>
  );
};

export default ReviewCard;

const style = {
  avatar: {
    width: 48,
    height: 48,
    zIndex: -1,
  },
};
