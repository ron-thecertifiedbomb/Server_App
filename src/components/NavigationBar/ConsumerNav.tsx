'use client';

import React, { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { compose } from 'redux';

import { withNavHoc, withNavSelector } from '@/redux/slice/navSlice/hoc';
import { Links } from '@/shared/constants';

interface ConsumerNavProps {
  addRecentSearch: any;
  updateSearchKey: any;
  recentSearch: any;
}

const ConsumerNav = (props: ConsumerNavProps) => {
  const { addRecentSearch, updateSearchKey, recentSearch } = props;
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [openMobileSearch, setOpenMobileSearch] = useState(false);

  const handleSearch = (keyword: string) => {
    setSearch(keyword);
    updateSearchKey(keyword);
    addRecentSearch(keyword);
    router.push('/search?q=' + keyword);
  };

  return (
    <div className="h-[80px] bg-white shadow w-full z-50">
      {/* NAVBAR */}
      <div className="container w-full h-full mx-auto flex justify-between items-center p-[24px]">
        <div className="flex items-center">
          <Link href="/" className="relative">
            <Image
              className="!relative !w-[67.33px] !h-[32px]"
              src={'/stuff-logo.svg'}
              alt="Stuff Logo"
              fill
              priority
            />
          </Link>
        </div>

        <div className="group flex justify-center items-center grow">
          <div className="hidden lg:flex relative justify-between gap-[5px] border-[1px] border-[#C6C6C6] rounded-[4px] w-[500px] xl:w-[733px] h-[60px] p-[10px]">
            <input
              className={`peer font-rubik xl:font-poppins font-regular w-full outline-none text-[14px] leading-[16.59px] xl:leading-[21px]`}
              type="text"
              value={search}
              placeholder="Search Item"
              onChange={(e: any) => {
                setSearch(e.target.value);
              }}
              onKeyDown={(e: any) => {
                if (e.keyCode === 13) {
                  handleSearch(search);
                  setOpenMobileSearch(false);
                }
              }}
            />

            <div
              className="flex justify-center items-center h-[40px] w-[40px] bg-primary rounded-[4px] cursor-pointer"
              onClick={() => {
                handleSearch(search);
                setOpenMobileSearch(false);
              }}
            >
              <SearchOutlinedIcon sx={{ color: '#FFFFFF', height: 16, width: 16 }} />
            </div>

            {/* RECENT SEARCH */}
            <div
              className={`${
                recentSearch && recentSearch.length > 0 ? '' : 'hidden'
              } invisible peer-active:visible peer-focus:visible group-active:visible group-focus:visible absolute left-0 top-[67px] z-20 bg-white shadow p-2 w-full`}
            >
              <p className={`font-poppins font-[400] text-[14px] text-[var(--gray8B)]`}>
                Recent search:
              </p>
              <div className="overflow-y-auto no-scrollbar max-h-[300px]">
                {recentSearch?.map((item: string, i: number) => (
                  <p
                    key={i}
                    className={`font-poppins font-normal text-[16px] block cursor-pointer py-[5px] px-[10px] rounded-[4px] hover:bg-[var(--grayLight)]`}
                    onClick={() => {
                      handleSearch(item);
                      setOpenMobileSearch(false);
                    }}
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-[16px]">
          <div className="flex lg:hidden justify-center items-center">
            <button
              className="flex justify-center items-center"
              onClick={() => setOpenMobileSearch(!openMobileSearch)}
            >
              <SearchOutlinedIcon className="!h-[24px] !w-[24px] xl:!h-[32px] xl:!w-[32px] text-[#333]" />
            </button>
          </div>

          {/* TEMPORARY: Link to Stuff-Site */}
          <div className="flex justify-center items-center">
            <Link href={Links.STUFF_SITE}>
              <button className="flex justify-center items-center">
                <ShoppingCartOutlinedIcon className="!h-[24px] !w-[24px] xl:!h-[32px] xl:!w-[32px] text-[#333]" />
              </button>
            </Link>
          </div>

          {/* TEMPORARY: Hidden no user feature yet */}
          <div className="hidden flex justify-center items-center">
            <button className="flex justify-center items-center">
              <NotificationsIcon className="!h-[24px] !w-[24px] xl:!h-[32px] xl:!w-[32px] text-[#333]" />
            </button>
          </div>

          {/* TEMPORARY: Link to Stuff-Site */}
          <div className="flex justify-center items-center">
            <Link href={Links.STUFF_SITE}>
              <button className="flex justify-center items-center">
                <AccountCircleIcon className="!h-[24px] !w-[24px] xl:!h-[32px] xl:!w-[32px] text-[#333]" />
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* MOBILE SEARCH VIEW */}
      <div
        className={`${
          openMobileSearch ? 'w-[100%]' : 'w-[0%]'
        } fixed top-0 left-0 z-20 flex flex-col h-full bg-white whitespace-nowrap overflow-hidden transition-width ease-in-out duration-[500ms] `}
      >
        <div
          className="flex items-center  px-[10px] h-[50px] cursor-pointer"
          onClick={() => setOpenMobileSearch(!openMobileSearch)}
        >
          <KeyboardArrowLeftRoundedIcon fontSize="large" sx={{ color: 'var(--primary)' }} />
          <p className="font-poppins font-[500] mt-[4px]">Search</p>
        </div>

        <div className="flex items-center border-[1px] border-[var(--gray8B)] mx-[25px] pl-[20px] pr-[5px] py-[5px] h-[50px] rounded-[4px]">
          <input
            className={`text-[16px] font-poppins font-[400] outline-none bg-transparent border-0 w-full`}
            type="text"
            value={search}
            name="mobile-search"
            placeholder="Search Item"
            onChange={(e: any) => setSearch(e.target.value)}
            onKeyDown={(e: any) => {
              if (e.keyCode === 13) {
                handleSearch(search);
                setOpenMobileSearch(false);
              }
            }}
          />
          <div
            className="flex justify-center items-center h-[40px] w-[40px] bg-primary rounded-[4px] cursor-pointer"
            onClick={() => {
              handleSearch(search);
              setOpenMobileSearch(false);
            }}
          >
            <SearchOutlinedIcon sx={{ color: '#FFFFFF', height: 20, width: 20 }} />
          </div>
        </div>

        <div className="flex flex-col px-[30px] py-[5px] h-[calc(100vh_-_109px)]">
          <p className="text-[16px] text-[var(--gray8B)] font-poppins font-normal">Recent Search</p>
          <div className="h-[100%] overflow-y-auto no-scrollbar">
            {recentSearch?.map((item: string, i: number) => (
              <p
                key={i}
                className={`font-poppins font-normal text-[18] block cursor-pointer py-[5px] px-[10px] rounded-[4px] hover:bg-[var(--grayLight)]`}
                onClick={() => {
                  handleSearch(item);
                  setOpenMobileSearch(false);
                }}
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const WrappedComponent = compose(withNavHoc, withNavSelector)(ConsumerNav);
export default WrappedComponent;
