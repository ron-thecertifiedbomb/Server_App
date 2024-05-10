/* eslint-disable */
'use client'
import React, { useState, useEffect } from 'react';
import Label from '../Label/Label';
import styles from './styles.module.css';

interface BannerProps {
  title: string;
}

const Banner: React.FC<BannerProps> = ({ title }) => {
  const [fontSize, setFontSize] = useState("46px");

  useEffect(() => {
    const handleResize = () => {
      // Adjust font size based on screen width
      const screenWidth = window.innerWidth;
      const newFontSize = screenWidth <= 580 ? "26px" : "46px";
      setFontSize(newFontSize);
    };


    handleResize();

   
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <main className={styles.container}>
      <section className={styles.sub_container}>
        <Label
          label={title}
          marginTop={36}
          marginBottom={14}
          fontSize={fontSize}
          fontWeight={"700"}
          color={'#e60c2b'}
          mediaqueries={styles.banner_title}
        />
      </section>
    </main>
  );
};

export default Banner;
