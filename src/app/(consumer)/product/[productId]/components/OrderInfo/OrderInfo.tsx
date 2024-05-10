import React from 'react';
import { LocalShippingOutlined, RemoveModeratorOutlined, Storefront } from '@mui/icons-material';
import Image from 'next/image';

import { Poppins400, Poppins500 } from '@/shared/fonts/fontfamily';
import { Other } from '@/shared/interfaces';

const OrderInfo = ({ orderInfo }: { orderInfo: Other }) => {
  const {
    isSameDayDelivery,
    isPickUpAtTheMezz,
    warranties: { returnDays, warranty, warrantyType },
  } = orderInfo;

  const LabelWithIcon = ({
    icon,
    title,
    className,
  }: {
    icon: React.ReactNode;
    title: string | null;
    className?: string;
  }) => {
    return (
      <div className={`flex flex-row ${className}`}>
        {icon}
        <p className={`text-base leading-normal font-normal ${Poppins400.className} text-[12px]`}>
          {title}
        </p>
      </div>
    );
  };

  const InfoSection = ({
    children,
    title,
    className,
  }: {
    children: React.ReactNode;
    title: string;
    className?: string;
  }) => {
    return (
      <div className={`p-3 rounded-md`}>
        <p className={`font-medium ${Poppins500.className} mb-3`}>{title}</p>
        <div className={className}>{children}</div>
      </div>
    );
  };

  return (
    <div className={`rounded-md border-2 border-gray-200 mt-5 mb-10`}>
      {/* DELIVERY */}
      <InfoSection title="Delivery" className={`flex flex-row ml-1 flex-wrap gap-4 `}>
        <LabelWithIcon
          className="mr-3"
          icon={<LocalShippingOutlined color="error" className={`mr-2`} />}
          title={'Standard Delivery'}
        />
        {isSameDayDelivery && (
          <LabelWithIcon
            className="mr-3"
            icon={
              <Image
                className={'mr-2'}
                alt="forward_media_ic"
                src={'/event.svg'}
                height={16}
                width={16}
              />
            }
            title={'Same Day Delivery'}
          />
        )}
        {isPickUpAtTheMezz && (
          <LabelWithIcon
            className="mr-3"
            icon={<Storefront color="error" className={`mr-2`} />}
            title={'Pick up at The Mezz'}
          />
        )}
      </InfoSection>

      <div className={`border border-gray-200 my-1.5`} />

      {/* RETURN POLICY */}
      <InfoSection title="Return Policy" className={'ml-1'}>
        <LabelWithIcon
          icon={
            <Image
              className={'mr-2'}
              alt="forward_media_ic"
              src={'/forward_media.svg'}
              height={19}
              width={19}
            />
          }
          title={returnDays}
        />
      </InfoSection>

      {/* WARRANTY */}
      {warranty && (
        <React.Fragment>
          <div className={`border border-gray-200 my-1.5`} />
          <InfoSection
            title="Warranty & Warranty Type"
            className={' flex flex-row ml-1 flex-wrap gap-4'}
          >
            <LabelWithIcon
              icon={
                <Image
                  className={'mr-2'}
                  alt="forward_media_ic"
                  src={'/calendar_clock.svg'}
                  height={16}
                  width={16}
                />
              }
              title={warranty}
            />
            <LabelWithIcon
              icon={
                warrantyType ? (
                  <Image
                    className={'mr-2'}
                    alt="forward_media_ic"
                    src={'/shield_locked.svg'}
                    height={16}
                    width={16}
                  />
                ) : (
                  <RemoveModeratorOutlined color="error" className={`mr-2`} />
                )
              }
              title={warrantyType}
            />
          </InfoSection>
        </React.Fragment>
      )}
    </div>
  );
};

export default OrderInfo;
