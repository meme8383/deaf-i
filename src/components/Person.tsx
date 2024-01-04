import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

interface PersonProps {
  name: string;
  role: string;
  description: string;
  image: string;
  swapped?: boolean;
}

const Person = ({ name, description, image, swapped, role }: PersonProps) => {
  return (
    <div className='md:grid md:grid-cols-2 md:gap-3 mt-5'>
      <div
        className={cn(
          'flex h-72 lg:h-96 mt-5 md:mt-0 items-center justify-center',
          {
            'md:order-2': swapped,
          }
        )}
      >
        <div className='relative h-full aspect-square rounded-full overflow-hidden'>
          <Image
            src={image}
            alt={`picture of ${name}`}
            fill
            objectFit='contain'
          />
        </div>
      </div>
      <div className='w-full h-full'>
        <h1 className='mt-1 md:mt-0 text-2xl font-semibold tracking-tight border-b border-b-slate-400'>
          {name}
          <span className='text-lg font-sans text-muted-foreground ml-3'>
            {role}
          </span>
        </h1>
        <p className='leading-7 mt-4'>{description}</p>
      </div>
    </div>
  );
};

export default Person;
