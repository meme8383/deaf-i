import { cn } from '@/lib/utils';
import Link from 'next/link';
import { buttonVariants } from './ui/button';

const NavItem = ({ name, link }: { name: string; link: string }) => {
  return (
    <div className="relative flex items-center">
      <Link
        href={link}
        className={cn(buttonVariants({ variant: 'link' }), 'text-foreground')}
      >
        {name}
      </Link>
    </div>
  );
};

export default NavItem;
