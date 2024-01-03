import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';
import { Menu } from 'lucide-react';
import NavItem from './NavItem';
import { buttonVariants } from './ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger className='group -m-2 flex items-center p-2'>
        <Menu
          aria-hidden
          className='h-10 w-10 flex-shrink-0 text-gray-500 group-hover:text-gray-700'
        />
      </SheetTrigger>
      <SheetContent className='flex w-full flex-col sm:max-w-lg'>
        <div className='flex h-full flex-col items-center justify-center space-y-10'>
          <SheetTrigger asChild>
            <Link
              href='/'
              className={cn(
                buttonVariants({
                  variant: 'link',
                  className: 'w-full text-3xl',
                }),
                'text-foreground'
              )}
            >
              Home
            </Link>
          </SheetTrigger>
          <SheetTrigger asChild>
            <Link
              href='/about'
              className={cn(
                buttonVariants({
                  variant: 'link',
                  className: 'w-full text-3xl',
                }),
                'text-foreground'
              )}
            >
              About Us
            </Link>
          </SheetTrigger>
          <SheetTrigger asChild>
            <Link
              href='/faq'
              className={cn(
                buttonVariants({
                  variant: 'link',
                  className: 'w-full text-3xl',
                }),
                'text-foreground'
              )}
            >
              FAQ
            </Link>
          </SheetTrigger>
          <SheetTrigger asChild>
            <Link
              href='/resources'
              className={cn(
                buttonVariants({
                  variant: 'link',
                  className: 'w-full text-3xl',
                }),
                'text-foreground'
              )}
            >
              Resources
            </Link>
          </SheetTrigger>
          <SheetTrigger asChild>
            <Link
              href='/contact'
              className={cn(
                buttonVariants({
                  variant: 'link',
                  className: 'w-full text-3xl',
                }),
                'text-foreground'
              )}
            >
              Contact Us
            </Link>
          </SheetTrigger>
          <SheetTrigger asChild>
            <Link
              href='/donate'
              className={cn(
                buttonVariants({
                  variant: 'link',
                  className: 'w-full text-3xl',
                }),
                'text-primary'
              )}
            >
              Donate
            </Link>
          </SheetTrigger>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
