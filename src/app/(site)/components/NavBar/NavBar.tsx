'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Poppins500 } from '@/shared/fonts/fontfamily';

import Hamburger from './Hamburger/Hamburger';
import NavBarMenu from './NavMenu/NavMenu';

const NavBar = () => {
  const [showNavComponents, setShowNavComponents] = useState(false);
  const pathname = usePathname();
  const switchColor = ['/successpage'].includes(pathname);

  const toggleShowNavComponents = () => {
    setShowNavComponents(!showNavComponents);
  };

  useEffect(() => {
    const handleResize = () => {
      setShowNavComponents(false);
    };

    const handleScroll = () => {
      setShowNavComponents(false);
    };

    // Attach event listener for window resize
    window.addEventListener('resize', handleResize);
    // Attach event listener for scroll
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    {
      id: 'home',
      link: 'Home',
      to: '/',
    },
    {
      id: 'privacy and policy',
      link: 'Privacy Policy',
      to: '/privacy-policy',
    },
    {
      id: 'faqs',
      link: 'FAQs',
      to: '/faqs',
    },
    {
      id: 'terms and condition',
      link: 'Terms and Conditions',
      to: '/terms-and-conditions',
    },
    {
      id: 'contact us',
      link: 'Contact Us',
      to: '/contact-us',
    },
  ];

  return (
    <section
      className={`nav-wrapper w-full h-[97px] fixed z-10 top-0 ${
        switchColor ? 'bg-white' : 'bg-[#fff7f3]'
      }`}
    >
      <nav className="nav-menu h-[80px] flex max-w-[1536px] w-full md:h-[97px] justify-between items-center m-auto fixed top-0 left-0 right-0 bg-transparent pl-[15px] pr-[15px]">
        <Link href="/">
          <Image src={'/stuff-logo.svg'} width={80} height={100} alt="logo" />
        </Link>
        <section className="sm:flex md:flex gap-[40px]">
          {navLinks.map((item, index) => (
            <div className="hidden md:hidden lg:flex gap-[22px]" key={index}>
              <Link href={item.to}>
                <p
                  className={`${Poppins500.className} text-[#1d2124] font-[500] hover:text-[#FF6700] text-[18px] leading-normal`}
                >
                  {item.link}
                </p>
              </Link>
            </div>
          ))}
          <div className="sm:flex md:flex lg:hidden">
            <Hamburger showNavMenu={showNavComponents} toggleShowNavBar={toggleShowNavComponents} />
            <NavBarMenu
              showNavMenu={showNavComponents}
              toggleShowNavBar={toggleShowNavComponents}
            />
          </div>
        </section>
      </nav>
    </section>
  );

  // return (
  //   <div>
  //     <div className="container mx-auto">

  //     </div>
  //   </div>
  // )
};

export default NavBar;
