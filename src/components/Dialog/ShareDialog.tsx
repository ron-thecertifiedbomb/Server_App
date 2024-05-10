import React from 'react';
import { ContentCopy } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import { Dialog, DialogContent, DialogTitle, Divider } from '@mui/material';
import {
  FacebookIcon,
  // FacebookMessengerIcon,
  // FacebookMessengerShareButton,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  ViberIcon,
  ViberShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'next-share';

import Button from '@/components/Buttons/Button';
import { BASE_URL } from '@/services/Api.service';
import { ButtonTypes } from '@/shared/enums';
import { ShareDialogProps } from '@/shared/interfaces';
import { config } from '@/shared/utilities/config';


const ShareDialog = ({ open, productId, onClose, onClickClose }: ShareDialogProps) => {
  const currentEnv = config(BASE_URL)
  const productUrl = `${currentEnv}product/`
  const url = productUrl + productId;
  // const url = 'http://localhost:3000/product/' + productId; // commented this out for testing in qa env. Put URL to env if existing.

  return (
    <Dialog maxWidth={'sm'} fullWidth onClose={onClose} open={open}>
      <div className="flex justify-between pr-5">
        <DialogTitle
          sx={{
            fontSize: '20px',
            fontWeight: '500',
            fontFamily: 'var(--poppins)',
            marginTop: '10px',
          }}
        >
          Share product
        </DialogTitle>
        <Button onClick={onClickClose}>
          <CloseIcon width={32} height={32} />
        </Button>
      </div>
      <DialogContent className="flex flex-col">
        <Button
          onClick={() => navigator.clipboard.writeText(url)}
          className="flex flex-1 py-3 justify-center items-center"
          variant={ButtonTypes.PRIMARY}
        >
          <ContentCopy fontSize="small" sx={{ color: 'white' }} />
          <p className="font-poppins font-regular text-white ml-1">Copy link</p>
        </Button>
        <Divider className="!my-8" />
        <div className="flex flex-wrap justify-normal lg:justify-center">
          <div className="justify-center mr-6">
            <FacebookShareButton url={url}>
              <FacebookIcon size={64} round={true} className="self-center" />
              <p className={`font-poppins font-regular text-[12px]`}>Post</p>
            </FacebookShareButton>
          </div>
          {/* <FacebookMessengerShareButton
            className="justify-center mr-6"
            appId="783045260151441"
            url={url}
          >
            <FacebookMessengerIcon size={64} round={true} className="self-center" />
            <p className={`font-poppins font-regular text-[12px]`}>Chats</p>
          </FacebookMessengerShareButton> */}
          <div className="justify-center mr-6">
            <TwitterShareButton url={url}>
              <TwitterIcon size={64} round={true} className="self-center" />
              <p className={`font-poppins font-regular text-[12px]`}>Twitter</p>
            </TwitterShareButton>
          </div>
          <div className="justify-center mr-6">
            <WhatsappShareButton url={url}>
              <WhatsappIcon size={64} round={true} className="self-center" />
              <p className={`font-poppins font-regular text-[12px]`}>Whatsapp</p>
            </WhatsappShareButton>
          </div>
          <div className="justify-center mr-6">
            <ViberShareButton url={url}>
              <ViberIcon size={64} round={true} className="self-center" />
              <p className={`font-poppins font-regular text-[12px]`}>Viber</p>
            </ViberShareButton>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShareDialog;
