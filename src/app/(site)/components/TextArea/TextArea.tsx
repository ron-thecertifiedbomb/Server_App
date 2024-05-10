/* eslint-disable */
import React from 'react';

interface TextAreaProps {
  name: string;
  value: string;
  error: string;
  handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.FC<TextAreaProps> = ({ name, value, error, handleChange }) => {
  return (
    <>
      <textarea
        className='py-[10px] px-[15px] placeholder-[#cecece]'
        placeholder="Enter your concerns description"
        name={name}
        value={value}
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

export default TextArea;
