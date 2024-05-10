import React, { useEffect, useRef, useState } from 'react';

import { Poppins400 } from '@/shared/fonts/fontfamily';
import { PinInputProps } from '@/shared/interfaces';
import { Regex } from '@/shared/utilities/regex';

const PinInput = ({ length = 6, onChange, disabled, error: OTPError }: PinInputProps) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false)

  const otpFieldsRef = useRef([]);
  
  useEffect(() => {
    if(!OTPError?.data) return
    setError(true)
  }, [OTPError])

  const codeToKey = (key: number) => {
    switch (key) {
      case 48:
        return 0;
      case 49:
        return 1;
      case 50:
        return 2;
      case 51:
        return 3;
      case 52:
        return 4;
      case 53:
        return 5;
      case 54:
        return 6;
      case 55:
        return 7;
      case 56:
        return 8;
      case 57:
        return 9;
    }
  };

  const onChangeOTP = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    setError(false)
    const text = e.target.value;
    const isNumber = Regex.numberOnly(text);
    if (text !== '' && !isNumber) return;

    if (text !== '') {
      if (value.length === length) return;
      let newValue = value;
      onChange((newValue += text));
      setValue((prevState) => prevState + text);
      document.getElementById(`input-${index + 1}`)?.focus();
    } else {
      if (value.length === 0) return;

      const firstString = value.substring(0, index);
      const lastString = value.substring(index + 1, value.length);
      onChange(firstString + lastString);
      setValue(firstString + lastString);
      document.getElementById(`input-${index - 1}`)?.focus();
    }
  };

  const onKeyDown = (e: any, index: number) => {
    setError(false)
    const currentSelected = value[index];
    if (e.keyCode === 8 && currentSelected) {
      if (value.length === 0) return;
      const firstString = value.substring(0, index);
      const lastString = value.substring(index + 1, value.length);
      onChange(firstString + lastString);
      setValue(firstString + lastString);
      document.getElementById(`input-${index - 1}`)?.focus();
      e.preventDefault();
    } else if (e.keyCode === 8 && !currentSelected) {
      document.getElementById(`input-${index - 1}`)?.focus();
    } else if (currentSelected !== undefined && e.keyCode >= 48 && e.keyCode <= 57) {
      if (value.length === length) return;
      const firstString = value.substring(0, index + 1) + codeToKey(e.keyCode);
      const lastString = value.substring(index + 1, value.length);
      onChange(firstString + lastString);
      setValue(firstString + lastString);

      //@ts-ignore
      otpFieldsRef.current[index + 1]?.focus();
    }
  };

  return (
    <div className="flex justify-center">
      {new Array(length).fill(' ').map((_, index) => (
        <input
          key={`otp-input-${index}`}
          disabled={disabled}
          ref={(ref) => {
            //@ts-ignore
            otpFieldsRef.current[index] = ref;
          }}
          id={`input-${index}`}
          value={!value[index] ? '' : value[index]}
          onChange={(e) => onChangeOTP(e, index)}
          onKeyDown={(e) => onKeyDown(e, index)}
          maxLength={1}
          className={`m-0 w-[30px] border-b border-black p-0 text-center text-[36px] caret-transparent outline-none 
          ${error && 'border-red-500 text-red-500'}
          ${Poppins400.className}
          ${index + 1 !== length && 'mr-2'}`}
        />
      ))}
    </div>
  );
};

export default PinInput;
