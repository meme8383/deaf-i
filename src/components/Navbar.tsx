import React from 'react';
import Link from 'next/link';
import { Icons } from './Icons';
import { buttonVariants } from './ui/button';
import NavItem from './NavItem';
import MobileNav from './MobileNav';

const Navbar = () => {
  return (
    <div className='sticky z-50 top-0 inset-x-0 h-16 bg-white'>
      <header className='relative bg-white'>
        <div className='mx-auto w-full max-w-screen-xl md:container'>
          <div className='border-b border-gray-200'>
            <div className='flex h-16 items-center px-3 md:px-0'>
              <div className='ml-4 flex'>
                <Link href='/'>
                  <Icons.logo className='h-10' />
                </Link>
              </div>

              <div className='hidden z-50 ml-4 lg:ml-8 md:block md:self-stretch'>
                <div className='flex lg:gap-3 h-full'>
                  <NavItem name='About Us' link='/about' />
                  <NavItem name='FAQ' link='/faq' />
                  <NavItem name='Resources' link='/resources' />
                  <NavItem name='Contact Us' link='/contact' />
                </div>
              </div>
              <div className='ml-auto flex items-center mr-4'>
                <div className='hidden md:flex md:flex-1 md:space-x-6'>
                  <Link
                    href='/donate'
                    className={buttonVariants({ variant: 'default' })}
                  >
                    Donate
                  </Link>
                </div>
                <div className='flex flex-1 space-x-6 md:hidden'>
                  <MobileNav />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
