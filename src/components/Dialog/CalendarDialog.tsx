import React from 'react';
import Calendar from 'react-calendar';
import CloseIcon from '@mui/icons-material/Close';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';

import { Poppins500 } from '@/shared/fonts/fontfamily';
import { CalendarDialogProps } from '@/shared/interfaces';

import Button from '../Buttons/Button';

import 'react-calendar/dist/Calendar.css';

const CalendarDialog = ({ open, onClose, onClickClose, onChange, value }: CalendarDialogProps) => {
  return (
    <div>
      <Dialog onClose={onClose} open={open}>
        <div className="lg:w-[500px]">
          <div className="flex justify-between pr-5">
            <DialogTitle className={`${Poppins500.className} text-[20px]`}>Calendar</DialogTitle>
            <Button onClick={onClickClose}>
              <CloseIcon width={32} height={32} />
            </Button>
          </div>
          <DialogContent className="flex flex-1">
            <Calendar value={value} onChange={onChange} className={'flex-1'} />
          </DialogContent>
        </div>
      </Dialog>
    </div>
  );
};

export default CalendarDialog;
