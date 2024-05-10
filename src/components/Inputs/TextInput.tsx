import React from 'react';

import { TextInputProps } from '@/shared/interfaces';

const TextInput = ({
  id,
  className,
  name,
  value,
  onChange,
  onEnter,
  placeholder,
  maxLength,
  inputType,
  style,
  disabled,
  ref,
}: TextInputProps) => {
  const handleOnEnter = (e: any) => {
    if (e.keyCode === 13) onEnter?.(e);
  };

  return (
    <input
      ref={ref}
      id={id}
      name={name}
      disabled={disabled}
      className={className}
      maxLength={maxLength}
      type={inputType || 'text'}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onKeyDown={handleOnEnter}
      style={style}
    />
  );
};

export default TextInput;
