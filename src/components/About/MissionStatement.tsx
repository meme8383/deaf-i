import Image from 'next/image';
import React from 'react';

const MissionStatement = () => {
  return (
    <div className='text-foreground md:mx-10 mt-5 md:grid md:grid-cols-2 md:gap-3'>
      <div>
        <h1 className='text-3xl font-semibold tracking-tight border-b'>
          Mission Statement
        </h1>
        <p className='leading-7 mt-4 font-medium text-slate-800'>
          Deaf-i&apos;s purpose is to further awareness of the unique needs of
          cochlear implant recipients through advocacy. We aim to improve
          awareness by promoting education, outreach, equity, and support. We
          strive to create a community that fosters inclusivity, empowerment,
          and accessibility for all. Our programs include but are not limited to
          providing free lectures and resources that benefit the quality of life
          of cochlear implant recipients, raising social consciousness about the
          cause on a local and global level, and holding fundraising events to
          maximize our impact.
        </p>
      </div>
      <div className='relative h-96 mt-2 md:mt-0'>
        <Image
          className='object-contain relative'
          src='/about/FullSizeRender.jpg'
          alt='jad'
          fill
        ></Image>
      </div>
    </div>
  );
};

export default MissionStatement;
