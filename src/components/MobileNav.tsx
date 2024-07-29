import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { buttonVariants } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

const navItems = [
  {
    name: 'Home',
    href: '/#home',
  },
  {
    name: 'About Us',
    href: '/#about-us',
  },
  {
    name: 'FAQ',
    href: '/#faq',
  },
  {
    name: 'Testimonials',
    href: '/testimonials',
  },
  {
    name: 'Resources',
    href: '/#resources',
  },
  {
    name: 'Blog',
    href: '/blog',
  },
  {
    name: 'Contact Us',
    href: '/#contact',
  },
];

const MobileNavItem = ({ name, href }: { name: string; href: string }) => {
  return (
    <SheetTrigger asChild>
      <Link
        href={href}
        className={cn(
          buttonVariants({
            variant: 'link',
            className: 'w-full text-4xl',
          }),
          'text-foreground'
        )}
      >
        {name}
      </Link>
    </SheetTrigger>
  );
};

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger className="group -m-2 flex items-center p-2">
        <Menu
          aria-hidden
          className="h-10 w-10 flex-shrink-0 text-gray-500 group-hover:text-gray-700"
        />
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col sm:max-w-lg">
        <div className="flex h-full flex-col items-center justify-center space-y-10">
          {navItems.map((item) => (
            <MobileNavItem key={item.name} name={item.name} href={item.href} />
          ))}
          <SheetTrigger asChild>
            <Link
              href="/#donate"
              className={cn(
                buttonVariants({
                  variant: 'link',
                  className: 'w-full text-4xl',
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
