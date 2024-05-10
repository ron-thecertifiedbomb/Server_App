import React from 'react';
import Image from 'next/image';

const AuthNavigationBar = () => {
  return (
    <div className={`bg-white flex flex-1 shadow w-full sticky top-0 z-10`}>
      <div className={`lg:container lg:mx-auto px-6 py-4 flex flex-1 flex-row justify-between`}>
        <Image alt="Stuff-logo" src={'/stuff-logo.svg'} height={32} width={67} />
      </div>
    </div>
  );
};

export default AuthNavigationBar;
