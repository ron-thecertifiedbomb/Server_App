import React from 'react';

import { ButtonTypes } from '@/shared/enums';
import { ButtonProps } from '@/shared/interfaces';

import styles from './Button.module.scss';

const Button = ({
  variant = ButtonTypes.DEFAULT,
  className,
  children,
  style,
  onClick,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${className}`}
      style={style}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
