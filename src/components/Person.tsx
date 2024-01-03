import Image from 'next/image';
import React from 'react';

interface PersonProps {
  name: string;
  description: string;
  image: string;
  swapped?: boolean;
}

const Person = ({ name, description, image, swapped }: PersonProps) => {
  const picture = (
    <div className='relative h-96 mt-5 md:mt-0'>
      <Image
        className='object-contain'
        src={image}
        alt={`picture of ${name}`}
        fill
      ></Image>
    </div>
  );

  return (
    <div className='md:grid grid-cols-2 md:gap-3 mt-5'>
      {!swapped && picture}
      <div className='w-full h-full'>
        <h1 className='text-2xl font-semibold tracking-tight border-b border-b-slate-400'>
          {name}
        </h1>
        <p className='leading-7 mt-4'>{description}</p>
      </div>
      {swapped && picture}
    </div>
  );
};

export default Person;
