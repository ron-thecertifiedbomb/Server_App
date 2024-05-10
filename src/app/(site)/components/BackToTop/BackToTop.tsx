/* eslint-disable */
'use client'
import { useEffect,useState } from 'react';
import { FiArrowUp } from 'react-icons/fi';

const BackToTop = (): JSX.Element => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100) {
      setVisible(true);
    } else if (scrolled <= 100) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);

    return () => {
      window.removeEventListener('scroll', toggleVisible);
    };
  }, []);

  return (
    <button
      className={visible ? 'bg-[#ff6700] hover:bg-[#ff8532] rounded-full h-[40px] w-[40px] flex justify-center items-center' : ''}
    >
      {visible ? (
        <FiArrowUp
          onClick={scrollToTop}
          style={{ color: 'white', fontSize: '25px' }}
        />
      ) : (
        ''
      )}
    </button>
  );
};

export default BackToTop;
