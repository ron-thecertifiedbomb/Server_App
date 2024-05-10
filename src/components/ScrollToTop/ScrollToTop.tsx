/* eslint-disable react-native/no-inline-styles */
'use client';

import React, { useCallback, useLayoutEffect, useState } from 'react';
import { FiArrowUp } from 'react-icons/fi';

import { ScrollToTopProps } from '@/shared/interfaces';

const ScrollToTop = ({ target = null }: ScrollToTopProps) => {
  const [visible, setVisible] = useState(false);

  const getScrollElement = (target: string | null) => {
    return target ? document.getElementById(target) : document.documentElement;
  };

  const toggleVisible = useCallback(() => {
    const element = getScrollElement(target);
    const scrolled = element?.scrollTop;
    if (scrolled) {
      setVisible(scrolled > 100 ? true : false);
    }
  }, [target]);

  const scrollToTop = () => {
    const element = getScrollElement(target);
    element?.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useLayoutEffect(() => {
    const element = getScrollElement(target);
    element?.addEventListener('scroll', toggleVisible);
    return () => {
      element?.removeEventListener('scroll', toggleVisible);
    };
  }, [toggleVisible, target]);

  return (
    <button
      className={`${
        visible ? '' : 'hidden'
      } fixed bg-[#ff6700] hover:bg-[#ff8532] rounded-full h-[40px] w-[40px] flex justify-center items-center right-[40px] bottom-[30px]`}
    >
      <FiArrowUp onClick={scrollToTop} style={{ color: 'white', fontSize: '25px' }} />
    </button>
  );
};

export default ScrollToTop;
