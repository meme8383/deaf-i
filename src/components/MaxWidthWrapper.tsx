import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return <div className={cn('container mb-10 animate-fade-in-load', className)}>{children}</div>;
};

export default MaxWidthWrapper;
