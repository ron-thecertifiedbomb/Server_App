/* eslint-disable */
import React from 'react';
import styles from './styles.module.css';

interface TextFieldProps {
  placeholder: string;
  name: string;
  value: string | number;
  id: string;
  error: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField: React.FC<TextFieldProps> = ({
  placeholder,
  name,
  value,
  id,
  handleChange,
  error,
}) => {
  return (
    <>
      <input
        placeholder={placeholder}
        name={name}
        type="text"
        value={value}
        id={id}
        onChange={handleChange}
      />
      <>
        {error ? (
          <div >
            <p className='text-red-500 text-[16px] mt-[10px] mb-[24px]'>{error}</p>
          </div> 
        ) : (
          <div >
            <p className='mb-[22px]'>{error}</p>
          </div> 
        )}
      </>
    </>
  );
};

export default TextField;
