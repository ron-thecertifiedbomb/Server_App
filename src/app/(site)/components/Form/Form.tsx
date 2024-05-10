/* eslint-disable */
'use client';
import React, { useRef, useState } from 'react';
import TextField from '../TextField/TextField';
import { handleChange } from './FormUtilities/FormHandleChange';
import { DropDownLists } from '../DropDown/DropDownList';
import DropDown from '../DropDown/DropDown';
import TextArea from '../TextArea/TextArea';
import FileUpload from '../FileUpload/FileUpload';
import Label from '../Label/Label';
import RadioButtons from '../RadioButtons/RadioButtons';
import config from '../../utilities/config.json';
import styles from './FormUtilities/styles.module.css';
import { useRouter } from 'next/navigation';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

const Form: React.FC = () => {
  const router = useRouter();
  const { contactUsRecipients } = config;

  const [selectedFile, setSelectedFile] = useState<any>(null);
  const [fileSizeError, setFileSizeError] = useState(false);
  const [fileTypeError, setFileTypeError] = useState(false);
  const [fileTypeAndSizeError, setFileTypeAndSizeError] = useState(false);

  const validFileTypes = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'image/gif',
    'image/png',
    'image/jpeg',
  ];

  const handleFileSelection = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.size <= 5242880) {
        // 5 MB in bytes
        if (validFileTypes.includes(selectedFile.type)) {
          setSelectedFile(selectedFile);
          setFileSizeError(false);
          setFileTypeError(false);
          setFileTypeAndSizeError(false);
        } else {
          setFileSizeError(false);
          setFileTypeAndSizeError(false);
          setFileTypeError(true);
          setSelectedFile(null);
          // throw new Error(
          //   "Invalid file format. Only accepts files with the following extensions: .pdf .doc .gif .png .jpg .jpeg"
          // );
        }
      } else if (!validFileTypes.includes(selectedFile.type)) {
        setFileSizeError(false);
        setFileTypeError(false);
        setFileTypeAndSizeError(true);
        setSelectedFile(null);
        // throw new Error(
        //   "File upload is larger than 5MB and is an invalid file format"
        // );
      } else {
        setFileSizeError(true);
        setFileTypeError(false);
        setFileTypeAndSizeError(false);
        setSelectedFile(null);
        // throw new Error("File upload is larger than 5MB");
      }
    }
  };

  const [setType, setToChangeType] = useState<string>('Buyer');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [comments, setComments] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [commentsError, setCommentsError] = useState('');
  const [store, setStore] = useState('');
  const [storeError, setStoreError] = useState('');
  const [errorValueConcern, setErrorValueConcern] = useState(false);
  const [inputValue, setInputValue] = useState<string>('');
  const [modeValue, setModeValue] = useState('');
  const [errorPreferredModeOfCommunication, setErrorPreferredModeOfCommunication] = useState(false);

  const [selectedOption, setSelectedOption] = useState<{
    label: string;
    value: string;
  } | null>(null);

  const [selectModeOption, setSelectModeOption] = useState<{
    label: string;
    value: string;
  } | null>(null);

  const resetFields = {
    setToChangeType,
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
    setSelectedOption,
    setSelectModeOption,
    setModeValue,
    setInputValue,
    setErrorPreferredModeOfCommunication,
    setFileSizeError,
    setFileTypeError,
    setFileTypeAndSizeError,
    setSelectedFile,
    clearFileSelection: () => {
      const fileInput = document.getElementById('file_upload') as HTMLInputElement;
      if (fileInput) {
        fileInput.value = '';
      }
      setSelectedFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    },
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  function clearFileSelection() {
    const fileInput = document.getElementById('file_upload') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }

    setSelectedFile(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }

  const handleChangeFunction = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    handleChange(
      event,
      setName,
      setNameError,
      setStore,
      setStoreError,
      setPhone,
      setPhoneError,
      setEmail,
      setEmailError,
      setComments,
      setCommentsError
    );
  };

  let contactForm = new FormData();
  let NewForm = new FormData();

  NewForm.append('file', selectedFile);

  const addForm = () => {
    let env = 'devgateway.eshop2drop.com';

    fetch(`https://${env}/api/contactus/file-temp-upload`, {
      method: 'post',
      body: NewForm,
    })
      .then((res) => res.json())
      .then((data) => {
        // will return the file name of the uploaded file if successfully processed
        if (data.isSuccessful) contactForm.append('filePath', data.filePath); //supplant only if response was successful

        //=============send email with the rest of the contact us form data============
        contactForm.append('type', setType);
        contactForm.append('name', name);
        contactForm.append('storeName', store);
        contactForm.append('emailAddress', email);
        contactForm.append('contactNumber', phone);
        contactForm.append('concerns', modeValue);
        contactForm.append('concernsAndDescription', comments);
        contactForm.append('preferredModeOfCommunication', inputValue);
        contactForm.append('toEmail', contactUsRecipients.join(","));

        fetch(`https://${env}/api/contactus/send-h2h-contact-us`, {
          body: contactForm,
          method: 'post',
        })
          .then((res) => {
            console.log("Result: ", res);
          })
          .catch((err) => alert(err));
      })
      .catch((err) => alert(err));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name.trim()) {
      setNameError('This field is required.');
    }
    if (!email.trim()) {
      setEmailError('This field is required.');
    }
    if (!phone.trim()) {
      setPhoneError('This field is required.');
    }
    if (!comments.trim()) {
      setCommentsError('This field is required.');
    }

    if (!selectedOption) {
      setErrorValueConcern(true);
    }
    if (!selectModeOption) {
      // Add this check for selectModeOption
      setErrorPreferredModeOfCommunication(true);
    }

    if (
      !phoneError &&
      selectedOption &&
      modeValue &&
      inputValue &&
      selectModeOption &&
      name.trim() &&
      email.trim() &&
      phone.trim() &&
      comments.trim() &&
      name.length <= 50 &&
      store.length <= 50 &&
      phone.length <= 20 &&
      email.length <= 30 &&
      comments.length <= 200 &&
      /^\S+@\S+\.\S+$/.test(email) &&
      /^[0-9]+$/.test(phone) &&
      !fileSizeError &&
      !fileTypeError &&
      !fileTypeAndSizeError &&
      !nameError &&
      !storeError &&
      !commentsError
    ) {
      addForm();
      router.push('/successpage');
    }
  };

  return (
    <section className="relative pl-[34px] pr-[34px] lg:pl-0 lg:pr-0">
      <GoogleReCaptchaProvider
        reCaptchaKey="6LeuX3kmAAAAALtTKtRyf0PTVGVx0ucM4dB15ofs"
        scriptProps={{
          async: false,
          defer: false,
          appendTo: 'head',
          nonce: undefined,
        }}
      >
        <form
          onSubmit={handleSubmit}
          className="pt-[35px] mb-[80px] md:mb-[48px] max-w-[1020px] w-full m-auto md:p-2px lg:pt-[86px] relative z-1"
        >
          <Label
            label={'I am a'}
            marginBottom={14}
            fontSize={'18px'}
            fontWeight={'500'}
            color={'#434343'}
          />
          <RadioButtons
            setType={setType}
            setToChangeType={setToChangeType}
            setSelectedOption={setSelectedOption}
            resetFields={resetFields}
            clearFileSelection={clearFileSelection}
          />

          <Label
            label={'Complete Name'}
            marginBottom={12}
            fontSize={'18px'}
            fontWeight={'500'}
            color={'#434343'}
          />

          <TextField
            placeholder={'Complete Name'}
            name={'name'}
            value={name}
            id={'name'}
            handleChange={handleChangeFunction}
            error={nameError}
          />

          <Label 
            label={"Store Name"} 
            marginBottom={12} 
            fontWeight={'500'}
            fontSize={'18px'}
            color={'#434343'}
            additionalLabel={
            <span className="text-[#f00]" id="Optional">
              (Optional)
            </span>} 
          />

          <TextField
            placeholder={'Enter your store name'}
            name={'store'}
            value={store}
            id={'store'}
            handleChange={handleChangeFunction}
            error={storeError}
          />
          <Label
            label={'Contact Number'}
            marginBottom={14}
            fontSize={'18px'}
            fontWeight={'500'}
            color={'#434343'}
          />
          <TextField
            placeholder={'Enter your contact number'}
            name={'phone'}
            value={phone}
            id={'phone'}
            handleChange={handleChangeFunction}
            error={phoneError}
          />
          <Label
            label={'Email Address'}
            marginBottom={14}
            fontSize={'18px'}
            fontWeight={'500'}
            color={'#434343'}
          />
          <TextField
            placeholder={'Enter your email address'}
            name={'email'}
            value={email}
            id={'email'}
            handleChange={handleChangeFunction}
            error={emailError}
          />
          <Label
            label={'Concerns'}
            marginBottom={14}
            fontSize={'18px'}
            fontWeight={'500'}
            color={'#434343'}
          />
          <DropDown
            options={setType === 'Buyer' ? DropDownLists.buyer : DropDownLists.seller}
            defaultValue={selectedOption}
            onSelect={setSelectedOption}
            error={errorValueConcern}
            setErrorValueConcern={setErrorValueConcern}
            setModeValue={setModeValue}
            defaultLabel="Select your concern"
            zindex={styles.dropdown_wrapper}
          />
          <Label
            label={'Concern/s Description'}
            marginBottom={14}
            fontSize={'18px'}
            fontWeight={'500'}
            color={'#434343'}
          />
          <TextArea
            name={'comments'}
            value={comments}
            handleChange={handleChangeFunction}
            error={commentsError}
          />

          <Label
            label={'Preferred Mode of Communication'}
            marginBottom={14}
            fontSize={'18px'}
            fontWeight={'500'}
            color={'#434343'}
          />
          <DropDown
            options={DropDownLists.mode}
            defaultValue={selectModeOption}
            onSelect={setSelectModeOption}
            error={errorPreferredModeOfCommunication}
            setErrorPreferredModeOfCommunication={setErrorPreferredModeOfCommunication}
            setInputValue={setInputValue}
            defaultLabel="Select your preferred mode of communication"
            zindex={styles.select_wrapper}
          />

          <FileUpload
            selectedFile={selectedFile}
            fileSizeError={fileSizeError}
            setFileSizeError={setFileSizeError}
            fileTypeError={fileTypeError}
            setFileTypeError={setFileTypeError}
            fileTypeAndSizeError={fileTypeAndSizeError}
            setFileTypeAndSizeError={setFileTypeAndSizeError}
            handleFileSelection={handleFileSelection}
            setSelectedFile={setSelectedFile}
            clearFileSelection={clearFileSelection}
          />
          <div className="flex gap-5 pt-[20px] relative flex-col-reverse justify-start w-full  lg:flex-row lg:justify-end lg:items-end mt-[67px] lg:pt-[47px] lg:gap-0 ">
            <div className="absolute w-[350px]  top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:w-[1200px]  lg:w-[1200px]  border-gray-600 border-t-2 border-dashed border-spacing-1.5 "></div>

            <button
              type="submit"
              className="w-full text-[18px] lg:w-[180px] h-[52px] bg-[#e60c2b]  rounded-md text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </GoogleReCaptchaProvider>
    </section>
  );
};

export default Form;
