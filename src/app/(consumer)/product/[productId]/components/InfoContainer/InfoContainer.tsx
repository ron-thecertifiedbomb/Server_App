'use client';
import React, { useState } from 'react';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShareIcon from '@mui/icons-material/Share';
import { Divider } from '@mui/material';
import Link from 'next/link';
import { compose } from 'redux';

import CircledButton from '@/components/Buttons/CircledButton';
import ShareDialog from '@/components/Dialog/ShareDialog';
import PriceLabel from '@/components/Labels/PriceLabel';
import SaleLabel from '@/components/Labels/SaleLabel';
import Ratings from '@/components/Ratings/Ratings';
import { withProductHoc, withProductSelector } from '@/redux/slice/productSlice/hoc';
import { BASE_URL } from '@/services/Api.service';
import { Poppins400, Poppins500, Poppins600, Rubik400 } from '@/shared/fonts/fontfamily';
import { Product, ProductVariationProps } from '@/shared/interfaces';
import { config } from '@/shared/utilities/config';

import ButtonContainer from '../ButtonContainer/ButtonContainer';
import OrderInfo from '../OrderInfo/OrderInfo';
import ProductVariation from '../ProductVariationContainer/ProductVariation';
import Shop from '../Shop/Shop';

import styles from './InfoContainer.module.scss';


const InfoContainer = ({
  item,
  selectedVariant,
  setSelectedVariant,
}: {
  item: Product;
  selectedVariant: ProductVariationProps;
  setSelectedVariant: Function;
}) => {
  const currentEnv = config(BASE_URL)
  const downloadUrl = `${currentEnv}download`

  const { productName, categories, stats, price, shopName } = item;
  const { subVariantPrice, variationSalesPrice, discountPercentage } = selectedVariant || {};
  const discountPercent = Math.round(discountPercentage || price.discountPercentage);
  const [openShareDialog, setOpenShareDialog] = useState(false);
  const isOnSale = discountPercent > 0;
  const orderInfo = item.other;

  return (
    <div className="flex flex-1 mt-6 lg:ml-16  flex-col">
      <div className="flex">
        <div className="flex flex-1 flex-col">
          <p className={`${styles.productName} ${Poppins500.className}`}>{productName}</p>
          <p className={`mt-2 ${styles.productCategory} ${Rubik400.className}`}>
            {categories.category}
          </p>
        </div>
        <div>
          <CircledButton
            onPress={() => setOpenShareDialog(!openShareDialog)}
            style={style.shareIcon}
          >
            <ShareIcon />
          </CircledButton>
          <Link href={downloadUrl}>
            <CircledButton>
              <FavoriteBorderOutlinedIcon />
            </CircledButton>
          </Link>
        </div>
      </div>
      <Ratings ratings={stats.averageRating} size={32} style={style.ratings} />
      <div className={`flex flex-row`}>
        <PriceLabel
          salesPrice={variationSalesPrice || price.salesPrice}
          className={`${Poppins600.className} text-[24px]`}
        />
        {isOnSale && (
          <div className={`flex rounded-[4px] bg-red-600 ml-3`}>
            <p className={`${Poppins400.className} self-center text-white mx-3 my-1 text-xs`}>
              -{discountPercent}%
            </p>
          </div>
        )}
      </div>

      {isOnSale && (
        <SaleLabel
          retailPrice={subVariantPrice || price.retailPrice}
          className={`${Poppins400.className} text-[14px]`}
        />
      )}

      <div className={`hidden sm:block mt-5`}>
        <ProductVariation product={item} setSelectedVariant={setSelectedVariant} />
      </div>
      <div className="my-6 hidden lg:block">
        <ButtonContainer item={item} />
      </div>
      <Divider />
      <Shop shopName={shopName} />
      <OrderInfo orderInfo={orderInfo} />
      <ShareDialog
        open={openShareDialog}
        onClickClose={() => {
          setOpenShareDialog(!openShareDialog);
        }}
        productId={item.productId}
        onClose={() => setOpenShareDialog(!false)}
      />
    </div>
  );
};

const WrappedComponent = compose(withProductHoc, withProductSelector)(InfoContainer);

export default WrappedComponent;

const style = {
  shareIcon: {
    marginRight: 16,
  },
  ratings: {
    paddingTop: 16,
    paddingBottom: 16,
  },
};
