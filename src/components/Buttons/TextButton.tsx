'use client';
import React from 'react';

import { TextButtonProps } from '@/shared/interfaces';

const TextButton = ({ buttonClassName, textClassName, onClick, buttonText }: TextButtonProps) => {
  return (
    <button onClick={onClick} className={buttonClassName}>
      <p className={textClassName}>{buttonText}</p>
    </button>
  );
};

export default TextButton;
