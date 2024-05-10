/* eslint-disable */
'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import Label from '../Label/Label';
import styles from './styles.module.css';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);

  return (
    <div className={styles.container}>
      <div className="flex max-w-[1536px] w-full m-auto flex-col-reverse md:flex md:flex-col-reverse lg:flex lg:flex-row">
        <div className="flex-1 pt-[51.5px] m-auto">
          <div className="max-w-[528px] text-center lg:text-left" data-aos="fade-up">
            <Label
              label={'HAVE IT TODAY!'}
              marginBottom={16}
              fontSize={'36px'}
              fontWeight={'700'}
              color={'#212121'}
            />
            <Label
              label={
                'Stuff is an ecommerce platform dedicated in providing the best online shopping experience!'
              }
              marginBottom={24}
              fontSize={'16px'}
              fontWeight={'400'}
              color={'#212121'}
            />
            <div className="hidden lg:flex">
              <Link href="https://play.google.com/store/apps/details?id=com.veritaspay_ecomm">
                <Image
                  src="/android.svg"
                  width={192}
                  height={270}
                  alt="logo"
                  className="cursor-pointer"
                />
              </Link>

              <Link href="https://apps.apple.com/ph/app/stuff-ph/id6448742686">
                <Image
                  src="/applenew.svg"
                  width={192}
                  height={270}
                  alt="logo"
                  className=" cursor-pointer"
                />
              </Link>
            </div>

            <div className="flex flex-col justify-center items-center lg:hidden">
              <Link href="https://play.google.com/store/apps/details?id=com.veritaspay_ecomm">
                <Image
                  src="/android.svg"
                  width={334}
                  height={159}
                  alt="logo"
                  className=" cursor-pointer"
                />
              </Link>
              <Link href="https://apps.apple.com/ph/app/stuff-ph/id6448742686">
                <Image
                  src="/apple.svg"
                  width={334}
                  height={159}
                  alt="logo"
                  className=" cursor-pointer"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-1 justify-center" data-aos="zoom-in">
          <div className="flex flex-1 justify-end pr-[15px]" data-aos="zoom-in">
            <div className="max-w-[693px] w-full h-auto ">
              <Image src="/hero.svg" width={693} height={515} alt="logo" id="app-logo" />{' '}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
