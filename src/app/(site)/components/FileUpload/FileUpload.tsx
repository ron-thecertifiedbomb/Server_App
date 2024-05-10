/* eslint-disable */
'use client'
import React, { useRef } from "react";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";

import PopUp from '../PopUp/PopUp'

interface FileUploadProps {
  selectedFile: File | null;
  fileSizeError: boolean;
  setFileSizeError: React.Dispatch<React.SetStateAction<boolean>>;
  fileTypeError: boolean;
  setFileTypeError: React.Dispatch<React.SetStateAction<boolean>>;
  fileTypeAndSizeError: boolean;
  setFileTypeAndSizeError: React.Dispatch<React.SetStateAction<boolean>>;
  handleFileSelection: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setSelectedFile: React.Dispatch<React.SetStateAction<File | null>>;
  clearFileSelection: () => void;
}

const FileUpload: React.FC<FileUploadProps> = ({
  selectedFile,
  fileSizeError,
  setFileSizeError,
  fileTypeError,
  setFileTypeError,
  fileTypeAndSizeError,
  setFileTypeAndSizeError,
  handleFileSelection,
  setSelectedFile,
  clearFileSelection
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClearFileSelection = () => {
    setSelectedFile(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }

    if (clearFileSelection) {
      clearFileSelection();
    }
  };

  return (
    <main>
      <PopUp
        fileSizeError={fileSizeError}
        setFileSizeError={setFileSizeError}
        fileTypeError={fileTypeError}
        setFileTypeError={setFileTypeError}
        fileTypeAndSizeError={fileTypeAndSizeError}
        setFileTypeAndSizeError={setFileTypeAndSizeError}
        handleClearFileSelection={handleClearFileSelection}
      />
       <label className="font-[500] text-[#434343] text-[18px]">
        Upload Image/File{" "}
        <span className=" text-[18px] text-[#f00]">(Optional)</span>
      </label>

      <div className="flex flex-col mt-[9px]">
        <div className="flex flex-col gap-[10px] lg:gap-[24px] lg:flex lg:flex-row lg:items-center">
          <label
            htmlFor="file_upload"
            className="flex w-full lg:w-[140px] text-[16px] font-[500] h-[42px] bg-[#ff6700] rounded justify-center items-center cursor-pointer text-[white]"
          >
            Select files...
          </label>
          <p className=" text-[12px] lg:text-[14px] font-normal text-[#cecece]">
            Accepted File Types: .pdf .doc .gif .png .jpg .jpeg, Maximum upload file size: 5mb. File number limit: 1
          </p>
        </div>
        <input type="file" id="file_upload" ref={fileInputRef} onChange={handleFileSelection} />

        {selectedFile && (
          <div className="flex gap-2 mt-[17px] lg:gap-3">
            <div className="max-w-[60px] w-full">
            <Image src="/uploadimage.svg" width={100} height={100} alt="logo" />
            </div>

            <div className="flex flex-col">
              <p className="font-Roboto text-[12px] lg:text-[14px] font-medium">{selectedFile.name}</p>
              <p className="font-Roboto text-[12px] lg:text-[14px]">{Math.round(selectedFile.size / 1024)} kb</p>
            </div>

            <div className="flex justify-center items-center p-1 lg:items-start lg:pt-4">
              <div
                className="flex justify-center items-center h-[12px] w-[12px] bg-[#ff0000] rounded-full cursor-pointer"
                onClick={handleClearFileSelection}
              >
                <IoMdClose style={{ color: "white", fontSize: "10px" }} />
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default FileUpload;
