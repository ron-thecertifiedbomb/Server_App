'use client';
import React, { useState } from 'react';
import { VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material';

import { Poppins400 } from '@/shared/fonts/fontfamily';
import { PasswordInputProps } from '@/shared/interfaces';
import Helper from '@/shared/utilities/helper';

import Button from '../Buttons/Button';

import TextInput from './TextInput';

const PasswordInput = ({
  placeholder,
  value,
  textInputClassname,
  disabled,
  className,
  maxLength,
  onChange,
  showPasswordStrength = false,
  eyeColor,
  onEnter,
  passwordStrengthClassName,
}: PasswordInputProps) => {
  const [secured, setSecured] = useState(true);
  const passwordStrengthCount = Helper.passwordStrenghtCounter(value);

  const borderStyles = value
    ? {
        borderWidth: 1,
        borderColor: Helper.passwordStrengthColor(
          passwordStrengthCount,
          showPasswordStrength,
          true
        ),
      }
    : undefined;

  const textStyles = value
    ? {
        color: Helper.passwordStrengthColor(
          passwordStrengthCount,
          showPasswordStrength,
          true
        ),
      }
    : undefined;

  return (
    <div>
      <div className={className} style={borderStyles}>
        <TextInput
          disabled={disabled}
          onEnter={onEnter}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={textInputClassname}
          maxLength={maxLength}
          inputType={secured ? 'password' : 'text'}
          style={{
            color:
              showPasswordStrength && passwordStrengthCount
                ? Helper.passwordStrengthColor(passwordStrengthCount, showPasswordStrength, true)
                : style.black.color,
          }}
        />

        <Button
          className="mx-4"
          onClick={() => {
            setSecured(!secured);
          }}
        >
          {secured ? (
            <VisibilityOutlined
              sx={{
                color:
                  showPasswordStrength && passwordStrengthCount
                    ? Helper.passwordStrengthColor(
                        passwordStrengthCount,
                        showPasswordStrength,
                        true
                      )
                    : eyeColor || '#000000',
              }}
            />
          ) : (
            <VisibilityOffOutlined
              sx={{
                color:
                  showPasswordStrength && passwordStrengthCount
                    ? Helper.passwordStrengthColor(
                        passwordStrengthCount,
                        showPasswordStrength,
                        true
                      )
                    : eyeColor || '#000000',
              }}
            />
          )}
        </Button>
      </div>
      {showPasswordStrength && passwordStrengthCount > 0 && (
        <p
          className={`${Poppins400.className} text-[14px] ${passwordStrengthClassName}`}
          style={textStyles}
        >
          Password Strength: {Helper.passwordStrengthString(passwordStrengthCount)}
        </p>
      )}
    </div>
  );
};

const style = {
  black: {
    color: '#000000',
  },
};

export default PasswordInput;
