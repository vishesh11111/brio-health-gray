import React from 'react';
import Image from 'next/image';

export const Home = () => {
  return (
    <Image
      width={100}
      height={100}
      className='h-[18px] w-[18px]'
      src='/sidebar/home.svg'
      alt=''
    />
  );
};

export const Discover = () => {
  return (
    <Image
      width={100}
      className='h-[18px] w-[18px]'
      height={100}
      src='/sidebar/discover.svg'
      alt=''
    />
  );
};
export const Setting = () => {
  return (
    <Image
      width={100}
      className='h-[18px] w-[18px]'
      height={100}
      src='/sidebar/setting.svg'
      alt=''
    />
  );
};

export const CreateIcon = () => {
  return (
    <Image
      width={100}
      className='h-[15px] w-[15px] shrink-0'
      height={100}
      src='/sidebar/create.svg'
      alt=''
    />
  );
};
