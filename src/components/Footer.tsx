import React from 'react';
import MaxWidthWrapper from './MaxWidthWrapper';

const Footer = () => {
  return (
    <footer className='bg-slate-500 w-full h-24'>
      <MaxWidthWrapper className='mt-4'>
        <div className='flex flex-col justify-center items-center '>
          <h1 className='text-xl text-slate-200 font-semibold'>
            © 2024 Deaf-i. All rights reserved.
          </h1>
          <h3 className='text-lg text-slate-200 font-semibold'>
            Hosted with Vercel
          </h3>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
