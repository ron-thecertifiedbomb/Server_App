'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Links } from '@/shared/constants';
import { Poppins400, Poppins500 } from '@/shared/fonts/fontfamily';

import styles from './Footer.module.css';

const Footer = () => {
  const pathname = usePathname();
  // const currentPathName = pathname.split('/')[1];

  const business = `LOTS' A STUFF CORPORATION`;
  const buildingName = 'SMB Prestige Bldg.';
  const address = '40 San Buenaventura St.,';
  const addressLine2 = 'Bagong Ilog, Pasig City, Metro Manila Philippines';
  const website = 'Stuff.com.ph';
  const email = 'customerservice@stuff.com.ph';
  const contactLabel = 'For immediate concerns, please email us at';

  const hide = [Links.PRODUCT, Links.LOGIN, Links.REGISTER, Links.VERIFY].includes(pathname);

  return (
    <div className={`text-white bg-primary p-[34px] lg:p-[60px] ${hide && 'hidden lg:block'}`}>
      <div className="container mx-auto">
        <div className="lg:flex items-top mb-4">
          <div className={`text-center  lg:text-left w-full`}>
            <p className={`${(styles.footerBusiness, Poppins500.className)} mb-2 lg:text-[21px]`}>
              {business}
            </p>
            <p
              className={`${
                (styles.footerParagraph, Poppins400.className)
              } text-[12px] lg:text-[16px]`}
            >
              {buildingName}
            </p>
            <p
              className={`${
                (styles.footerParagraph, Poppins400.className)
              }  text-[12px] lg:text-[16px]`}
            >
              {address}
            </p>
            <p
              className={`${
                (styles.footerParagraph, Poppins400.className)
              } text-[12px] lg:text-[16px]`}
            >
              {addressLine2}
            </p>
            <p
              className={`${
                (styles.footerParagraph, Poppins400.className)
              } text-[15px] lg:text-[16px] mt-3`}
            >
              <a href="/" className={`${Poppins500.className} hover:text-[#FF6700]`}>
                {website}
              </a>
            </p>
          </div>
          <div className="w-full pr-[15px]">
            <div className="hidden justify-center gap-[26px] lg:flex lg:justify-end">
              <a
                href="/"
                className={`${
                  (styles.footerLink, Poppins500.className)
                }  whitespace-nowrap mr-4 hover:text-[#FF6700]`}
              >
                Home
              </a>
              <a
                href="/privacy-policy"
                className={`${
                  (styles.footerLink, Poppins500.className)
                } mr-4 whitespace-nowrap hover:text-[#FF6700]`}
              >
                Privacy Policy
              </a>
              <a
                href="/faqs"
                className={`${
                  (styles.footerLink, Poppins500.className)
                } mr-4 whitespace-nowrap hover:text-[#FF6700]`}
              >
                FAQs
              </a>
              <a
                href="/terms-and-conditions"
                className={`${
                  (styles.footerLink, Poppins500.className)
                } mr-4 whitespace-nowrap hover:text-[#FF6700]`}
              >
                Terms and Conditions
              </a>
              <a
                href="/contact-us"
                className={`${
                  (styles.footerLink, Poppins500.className)
                } whitespace-nowrap hover:text-[#FF6700]`}
              >
                Contact Us
              </a>
            </div>
            <div className="text-center lg:text-right">
              <p
                className={`${
                  (styles.footerLink, Poppins400.className)
                } mt-[40px] mb-1 text-[14px] lg:text-[18px]`}
              >
                {contactLabel}
              </p>
              <p className={`${styles.footerLink}`}>
                <a className={`${Poppins400.className} text-[14px] lg:text-[16px]`}>{email}</a>
              </p>
            </div>
            <div className="flex flex-wrap lg:hidden justify-center lg:justify-end gap-[2px] mt-10">
              <Link
                href="/"
                className={`${
                  (styles.footerLink, Poppins500.className)
                } text-[16px] whitespace-nowrap mr-4 active:text-[var(--accordion-bottom-border)]`}
              >
                Home
              </Link>
              <Link
                href="/privacy-policy"
                className={`${
                  (styles.footerLink, Poppins500.className)
                }  text-[16px] whitespace-nowrap mr-4 active:text-[var(--accordion-bottom-border)]`}
              >
                Privacy Policy
              </Link>
              <Link
                href="/faqs"
                className={`${
                  (styles.footerLink, Poppins500.className)
                }  text-[16px]  whitespace-nowrap mr-4 active:text-[var(--accordion-bottom-border)]`}
              >
                FAQs
              </Link>
              <Link
                href="/terms-and-conditions"
                className={`${
                  (styles.footerLink, Poppins500.className)
                }  text-[16px] whitespace-nowrap mr-4 active:text-[var(--accordion-bottom-border)]`}
              >
                Terms and Conditions
              </Link>
              <Link
                href="/contact-us"
                className={`${
                  (styles.footerLink, Poppins500.className)
                }  text-[16px] whitespace-nowrap active:text-[var(--accordion-bottom-border)]`}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        <hr className={styles.divider} />
        <p
          className={`${styles.allRightsReserved} ${Poppins400.className} text-center lg:text-left`}
        >
          {new Date().getFullYear()} - Stuff all rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
