import Image from 'next/image';
import React from 'react';

const MissionStatement = () => {
  return (
    <div className='flex flex-col mt-5 mb-12 text-center'>
      <h1 className='text-3xl font-semibold tracking-tight border-b mx-auto md:px-16'>
        Mission Statement
      </h1>
      <p className='leading-7 mt-4 font-medium text-slate-800 md:mx-16'>
        Deaf-i&apos;s purpose is to further awareness of the unique needs of
        cochlear implant recipients through advocacy. We aim to improve
        awareness by promoting education, outreach, equity, and support. We
        strive to create a community that fosters inclusivity, empowerment, and
        accessibility for all. Our programs include but are not limited to
        providing free lectures and resources that benefit the quality of life
        of cochlear implant recipients, raising social consciousness about the
        cause on a local and global level, and holding fundraising events to
        maximize our impact.
      </p>
    </div>
  );
};

export default MissionStatement;
