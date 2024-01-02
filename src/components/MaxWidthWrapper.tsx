import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react';

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div className={cn('mx-auto w-full max-w-screen-x1 container', className)}>
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
