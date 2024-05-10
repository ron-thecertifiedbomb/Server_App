import React from 'react';
import { Dialog, DialogContent } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Links } from '@/shared/constants';
import { ButtonTypes } from '@/shared/enums';
import { Poppins400, Poppins500, Poppins600 } from '@/shared/fonts/fontfamily';
import { SellerDialogProps } from '@/shared/interfaces';

import Button from '../Buttons/Button';

const SellerDialog = ({ open, onClose }: SellerDialogProps) => {
  const router = useRouter();

  const onPressContactUs = () => {
    router.push(Links.CONTACT_US);
  };

  return (
    <Dialog onClose={onClose} open={open}>
      <div className="lg:w-[500px]">
        <DialogContent className="flex flex-1 flex-col">
          <div className="flex flex-1 justify-center">
            <Image alt="seller" src={'/seller.svg'} height={175} width={215} />
          </div>
          <p className={`leading-normal my-6 self-center ${Poppins600.className} text-[24px]`}>
            Sell on Stuff
          </p>
          <p
            className={`leading-normal self-center ${Poppins400.className} text-[16px] text-center`}
          >
            Looking for a way to expand your business? We just might have the answer!
          </p>
          <p
            className={`leading-normal my-6 self-center ${Poppins400.className} text-[16px] text-center`}
          >
            Sign-up as a seller and let us help you increase your sales and fulfill your dreams!
          </p>
          <Button onClick={onPressContactUs} className="mb-3 py-4" variant={ButtonTypes.PRIMARY}>
            <p className={`leading-normal text-white ${Poppins500.className}`}>Contact us</p>
          </Button>
          <Button onClick={onClose} className="py-4" variant={ButtonTypes.DEFAULT}>
            <p className={`leading-normal text-[var(--primary)] ${Poppins500.className}`}>Cancel</p>
          </Button>
        </DialogContent>
      </div>
    </Dialog>
  );
};

export default SellerDialog;
