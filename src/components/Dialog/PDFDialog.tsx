import React from 'react';
import { Dialog } from '@mui/material';

import { PDFDialogProps } from '@/shared/interfaces';

import PDFViewer from '../PDF/PDFViewer';

const PDFDialog = ({ open, onClose, url }: PDFDialogProps) => {
  return (
    <Dialog onClose={onClose} open={open}>
      <div className='w-full'>
        <PDFViewer url={url} />
      </div>
    </Dialog>
  );
};

export default PDFDialog;
