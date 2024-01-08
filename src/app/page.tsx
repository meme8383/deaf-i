import Image from 'next/image';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import MissionStatement from '@/components/About/MissionStatement';
import People from '@/components/About/People';
import FAQ from '@/components/FAQ/FAQ';
import Resources from '@/components/Resources/Resources';

export default function Home() {
  return (
    <>
      <div className='relative w-full h-dvh md:h-[512px] items-center justify-center'>
        <Image
          src='/home/Forest Background.jpg'
          alt='food bank group photo'
          fill
          className='brightness-50 bg-no-repeat object-cover'
        />
        <div className='absolute h-full w-full justify-center md:items-center flex flex-col top-0 px-5'>
          <h1 className='font-bold tracking-tight text-6xl text-white mb-5'>
            Deaf-i
          </h1>
          <h3 className='font-semibold tracking-tight text-3xl text-white'>
            Founded for and by families with hearing-impaired members
          </h3>
        </div>
      </div>
      <div id='about-us' className='scroll-m-20'>
        <MaxWidthWrapper>
          <MissionStatement />
        </MaxWidthWrapper>
        <div className='bg-slate-200 my-5 py-2'>
          <MaxWidthWrapper>
            <People />
          </MaxWidthWrapper>
        </div>
      </div>
      <div id='faq' className='scroll-m-20'>
        <MaxWidthWrapper>
          <div className='flex'>
            <h1 className='text-center text-4xl border-b font-semibold mx-auto px-10 mb-3'>
              Frequently Asked Questions
            </h1>
          </div>
          <FAQ />
        </MaxWidthWrapper>
      </div>
      <div id='resources' className='scroll-m-20 bg-slate-200 my-5 py-2'>
        <MaxWidthWrapper>
          <div className='flex'>
            <h1 className='text-center text-4xl border-b font-semibold mx-auto px-10 border-slate-400'>
              Resources
            </h1>
          </div>
          <Resources />
        </MaxWidthWrapper>
      </div>
      <div id='contact' className='scroll-m-20 my-5 py-2'></div>
      <div id='donate' className='scroll-m-20 my-5 py-2'></div>
    </>
  );
}
