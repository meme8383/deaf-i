import React from 'react';
import MaxWidthWrapper from './MaxWidthWrapper';
import { Dot } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-500 w-full">
      <MaxWidthWrapper className="my-4">
        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-xl text-slate-200 font-semibold">
            © 2024 Deaf-i. All rights reserved.
          </h1>
          <div className="md:flex text-lg text-slate-200 font-semibold text-center">
            <h3>Hosted with Vercel</h3>
            <Dot size={30} className="hidden md:flex" />
            <h3>Deaf-i is a registered nonprofit</h3>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
