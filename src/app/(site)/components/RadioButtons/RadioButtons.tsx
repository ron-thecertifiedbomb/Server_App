/* eslint-disable */
'use client'
import React, { useState } from 'react';

import styles from './styles.module.css'

interface ResetFieldsProps {
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setPhone: (phone: string) => void;
  setComments: (comments: string) => void;
  setNameError: (error: string) => void;
  setEmailError: (error: string) => void;
  setPhoneError: (error: string) => void;
  setCommentsError: (error: string) => void;
  setStore: (store: string) => void;
  setStoreError: (error: string) => void;
  setErrorValueConcern: (error: boolean) => void;
  setSelectModeOption: (option: any) => void;
  setModeValue: (value: string) => void;
  setInputValue: (value: string) => void;
  setErrorPreferredModeOfCommunication: (error: boolean) => void;
  setFileSizeError: (error: boolean) => void;
  setFileTypeError: (error: boolean) => void;
  setFileTypeAndSizeError: (error: boolean) => void;
  setSelectedFile: (file: any) => void;
  clearFileSelection: () => void;
}

interface RadioButtonProps {
  setType: string;
  setToChangeType: (type: string) => void;
  setSelectedOption: (option: any) => void;
  resetFields: ResetFieldsProps;
  clearFileSelection: () => void;
}

const RadioButtons: React.FC<RadioButtonProps> = ({
  setType,
  setToChangeType,
  setSelectedOption,
 resetFields
}) => {

  const [type] = useState([
    {
      id: 1,
      title: 'Buyer',
    },
    {
      id: 2,
      title: 'Seller',
    },
  ]);

  const {
    setName,
    setEmail,
    setPhone,
    setComments,
    setNameError,
    setEmailError,
    setPhoneError,
    setCommentsError,
    setStore,
    setStoreError,
    setErrorValueConcern,
    setSelectModeOption,
    setModeValue,
    setErrorPreferredModeOfCommunication,
    setFileSizeError,
    setFileTypeError,
    setFileTypeAndSizeError,
    setSelectedFile,
    clearFileSelection,
  } = resetFields;

  const handleRadioChange = (item: { title: string }) => {
    if (setType === item.title) {
      return; 
    }

    setToChangeType(item.title);
    setSelectedOption(null);
    setName('');
    setEmail('');
    setPhone('');
    setComments('');
    setNameError('');
    setEmailError('');
    setPhoneError('');
    setCommentsError('');
    setStore('');
    setStoreError('');
    setErrorValueConcern(false);
    setSelectModeOption(null);
    setModeValue('');
    setErrorPreferredModeOfCommunication(false);
    setFileSizeError(false);
    setFileTypeError(false);
    setFileTypeAndSizeError(false);
    setSelectedFile(null);
    clearFileSelection();
  };

  return (
    <main className={styles.radio_container}>
      {type.map((item, index) => (
        <div className={styles.radio_label_container } key={index}>
          {setType === item.title ? (
            <div
              className={styles.outer_circle_selected}
              onClick={() => handleRadioChange(item)}
            >
              <div
                className={styles.inner_circle_selected}
                onClick={() => handleRadioChange(item)}
              ></div>
            </div>
          ) : (
            <div
              className={styles.outer_circle}
              onClick={() => handleRadioChange(item)}
            >
              <div
                className={styles.inner_circle}
                onClick={() => handleRadioChange(item)}
              ></div>
            </div>
          )}
          <div className="h-[25px]">
            <div>
              <h1 className={styles.radio_title}>{item.title}</h1>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
};

export default RadioButtons;
