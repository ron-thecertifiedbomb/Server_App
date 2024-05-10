/* eslint-disable */
'use client'
import React from "react";
import Image from "next/image";

const SuccessfulPageModal: React.FC = () => {

  return (

    <main className="w-full h-[calc(100vh-100px)] bg-[#ffffff] flex justify-center items-center">
         <section className="flex  justify-center items-center max-w-[1140px] w-full  m-auto bg-[#ffffff] pt-[91px] pb-[46px]">
    <div className="  flex flex-col gap-4 justify-center items-center w-full">
      <Image src="/stuff-logo.svg" width={200} height={200} alt="logo" />
      <div className="flex flex-col items-center mt-[20px] w-full pl-[36px] pr-[36px]">
        <h1 className=" font-Roboto text-[22px] md:text-[31px] font-bold text-[#fa7419] tracking-tight">
          Thank you for reaching out!
        </h1>
        <h1 className=" mt-[14px] font-Roboto text-[14px] w-[275px] md:w-full text-center md:text-[18px] font-normal  text-[#ffffff tracking-tight">
          We received your message and we'll get back to you as soon as we can!
        </h1>
        <a href="/">
        <button
          className="mt-[25px] flex max-w-[360px] w-full md:w-[360px] h-[52px]  justify-center items-center bg-[#e60c2b] rounded"
        >
          <h1 className=" font-Roboto text-[16px] tracking-normal text-white">
            Go back to home page
          </h1>
        </button>
            </a>
      </div>
    </div>
    </section>
    </main>
  );
};

export default SuccessfulPageModal;
