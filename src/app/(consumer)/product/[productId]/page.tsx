'use client';

import React, { useEffect } from 'react';
import { KeyboardArrowRightRounded } from '@mui/icons-material/';
import { useParams, useRouter } from 'next/navigation';
import { compose } from 'redux';

import Container from '@/components/Containers/Container';
import { withProductHoc, withProductSelector } from '@/redux/slice/productSlice/hoc';

import BreadCrumbs from './components/BreadCrumbs/BreadCrumbs';
import ButtonContainer from './components/ButtonContainer/ButtonContainer';
import ImageContainer from './components/ImageContainer/ImageContainer';
import InfoContainer from './components/InfoContainer/InfoContainer';
import ProductTabs from './components/ProductTabs/ProductTabs';
import RatingsContainer from './components/RatingsContainer/RatingsContainer';
import ReviewContainer from './components/ReviewContainer/RewiewContainer';
import YouMightLikeContainer from './components/YouMightLikeContainer/YouMightLikeContainer';

import styles from './Product.module.scss';
interface productDetailProps {
  setProductRequest: any;
  productData: any;
  productId: string;
  isLoading: boolean;
}

const ProductDetails = (props: productDetailProps) => {
  const { setProductRequest, productData, isLoading } = props;
  const params = useParams();
  const router = useRouter();
  const { productId } = params;
  const productDetail = productData?.data;
  const content = productDetail?.description;

  const productDetailPayload = {
    productId: productId, // use this when qa is up
    username: 'guest',
  };

  useEffect(() => {
    if (!productDetailPayload.productId) return;
    setProductRequest(productDetailPayload);
  }, [setProductRequest, productId]);

  return (
    <>
      {!isLoading && productDetail && (
        <div id={'productInfo'}>
          <ProductTabs />
          <div className={`lg:mt-32 ${styles.root} flex-col`}>
            <Container breakpoint="lg">
              <div className={`${styles.contentContainer} lg:container lg:mx-auto`}>
                <>
                  <BreadCrumbs item={productDetail} />
                  <div className={`flex flex-col lg:flex-row px-4`}>
                    <ImageContainer item={productDetail} />
                    <InfoContainer item={productDetail} />
                  </div>
                  <div className={`${styles.descriptionContainer} py-4`} id={'productDescription'}>
                    <div className={`${styles.descriptionSubContainer} p-4 lg:py-12`}>
                      <p className={`text-[20px] font-poppins font-medium mb-5`}>
                        Product Description
                      </p>
                      <div
                        className={styles.description}
                        dangerouslySetInnerHTML={{ __html: content }}
                      ></div>
                    </div>
                  </div>
                </>
                <div className={`flex py-12 flex-col px-4`} id={'productReviews'}>
                  <p className={`${styles.ratingHeaderLabel} font-poppins font-medium mb-12`}>
                    Ratings
                  </p>
                  <p className={`${styles.totalRatignHeaderLabel} font-poppins font-normal mb-5`}>
                    Product total rating:
                  </p>
                  <RatingsContainer stats={productDetail.stats} />
                  <ReviewContainer reviews={productDetail.stats.reviews} />
                </div>
              </div>
            </Container>
            <div className={`${styles.mightLikeContainer} hidden lg:flex flex-col py-12 px-6`}>
              <div className={'flex flex-row justify-between'}>
                <p
                  className={`flex self-start leading-normal font-poppins font-medium text-[36px] ${styles.mightLikeheader}`}
                >
                  Products that you might like
                </p>
                <div
                  className="text-primary flex align-center items-center justify-end self-center"
                  onClick={() => router.push('/search?filter=you-might-like')}
                >
                  <p className="font-poppins font-regular text-[16px] leading-[24px] pr-[8px]">
                    See more
                  </p>
                  <KeyboardArrowRightRounded sx={{ height: 16, width: 16 }} />
                </div>
              </div>
              <div className={`container mx-auto`}>
                <YouMightLikeContainer products={productDetail.recommendedProducts} />
              </div>
            </div>
            <div className={`p-4 z-10 shadow bg-white sticky bottom-0 w-full lg:hidden`}>
              <ButtonContainer item={productDetail} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const WrappedComponent = compose(withProductHoc, withProductSelector)(ProductDetails);
export default WrappedComponent;
