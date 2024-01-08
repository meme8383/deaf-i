import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ResourceItem = ({
  image,
  href,
  description,
  title,
}: {
  image: string;
  href: string;
  description: string;
  title: string;
}) => {
  return (
    <Link href={href} target='_blank' rel='noopener noreferrer'>
      <div className='bg-slate-100 mb-5 flex flex-col rounded-lg h-52 border border-slate-400 overflow-hidden hover:scale-105 duration-300 ease-in-out shadow hover:shadow-xl'>
        <div className='mt-2 relative w-full overflow-hidden h-16'>
          <Image
            className='object-contain w-full h-full'
            src={image}
            alt={`${title} logo`}
            fill
          />
        </div>
        {/* <div className='text-center mx-auto'>
        <h1 className='px-4 text-3xl font-semibold tracking-tight border-b'>
          {title}
        </h1>
      </div> */}
        <div className='mx-3 mt-3'>
          <p className='text-lg font-medium text-slate-600'>{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ResourceItem;
