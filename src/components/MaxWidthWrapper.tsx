import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react';

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return <div className={cn('container', className)}>{children}</div>;
};

export default MaxWidthWrapper;
