import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import TextButton from '@/components/Buttons/TextButton';
import SellerDialog from '@/components/Dialog/SellerDialog';
import { Links } from '@/shared/constants';

const Buttons = () => {
  const router = useRouter();

  const [openSeller, setOpenSeller] = useState(false);

  const onClickSignup = () => {
    router.push(Links.REGISTER);
  };

  return (
    <div className="mt-3 flex flex-col items-center">
      <p className={`font-poppins text-[14px] font-regular leading-normal`}>
        Don&lsquo;t you have an account yet?
      </p>
      <p className={`font-rubik text-[14px] font-regular leading-normal`}>
        <TextButton
          textClassName={`text-[var(--primary)] font-poppins font-regular`}
          buttonText="Sign up"
          onClick={onClickSignup}
        />{' '}
        or{' '}
        <TextButton
          onClick={() => setOpenSeller(true)}
          textClassName={`text-[var(--primary)] font-poppins font-regular`}
          buttonText="Sign up as a seller account"
        />
      </p>
      <SellerDialog open={openSeller} onClose={() => setOpenSeller(false)} />
    </div>
  );
};

export default Buttons;
