/* eslint-disable */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Button from '@/components/Buttons/Button';
import { ButtonTypes } from '@/shared/enums';
import { Poppins400, Poppins500 } from '@/shared/fonts/fontfamily';
import { Product } from '@/shared/interfaces';
import { isProductAvailable } from '@/shared/utilities';

import styles from './ButtonContainer.module.scss';
import { config } from '@/shared/utilities/config';
import { BASE_URL } from '@/services/Api.service';

const ButtonContainer = ({ item }: { item: Product }) => {
  const currentEnv = config(BASE_URL)
  const downloadUrl = `${currentEnv}download`

  const showAddToWishlist = !isProductAvailable(item);

  return (
    <div className={styles.root}>
      <div className={`hidden ${showAddToWishlist && 'lg:flex'} px-3 mb-6 ${styles.infoContainer}`}>
        <Image className="mr-2" alt="info" src={'/info.svg'} height={16} width={16} />
        <div className="flex">
          <p className={`${Poppins400.className} text-[14px]`}>
            This item is currently out of stock.{' '}
            <span className={`${Poppins500.className} text-[14px]`}>
              Add it to your wish list instead!
            </span>
          </p>
        </div>
      </div>

      <div className={`${styles.container}`}>
        <div className="flex">
          <Link href={downloadUrl}>
            <Button
              disabled={showAddToWishlist}
              variant={ButtonTypes.DEFAULT}
              className={`${styles.buttons} mr-3 px-5 py-4 flex-row flex items-center ${styles.addToCartButton}`}
            >
              <Image
                className="mr-2"
                alt="add-to-cart-icon"
                src={'/card-add.svg'}
                height={16}
                width={16}
              />
              <p className={`${Poppins500.className} text-[14px]`}>Add to cart</p>
            </Button>
          </Link>
          <Link href={downloadUrl}>
            <Button
              disabled={showAddToWishlist}
              variant={ButtonTypes.PRIMARY}
              className={`${styles.buttons} mr-3 px-5 py-4 text-white flex-row flex items-center`}
            >
              <Image
                className="mr-2"
                alt="checkout-icon"
                src={'/cart-check-out.svg'}
                height={16}
                width={16}
              />
              <p className={`${Poppins500.className} text-[14px]`}>Check out</p>
            </Button>
          </Link>
        </div>
        <div className={`${showAddToWishlist ? 'flex' : 'hidden'}`}>
          <Link href={downloadUrl}>
            <Button
              variant={ButtonTypes.DEFAULT}
              className={`${styles.buttons} lg:mr-3 lg:px-5 py-4 text-white flex-row flex items-center ${styles.addToCartButton} ${styles.addToWishlistButton}`}
            >
              <Image
                className="mr-2"
                alt="favorite-icon"
                src={'/favorite.svg'}
                height={16}
                width={16}
              />
              <p className={`${Poppins500.className} text-[14px]`}>Add to wishlist</p>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ButtonContainer;
