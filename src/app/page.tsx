import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className='relative w-full h-[512px] items-center justify-center'>
        <Image
          src='/home/foodbank.jpg'
          alt='food bank group photo'
          fill
          objectFit='cover'
          className='brightness-50 bg-no-repeat'
        />
        <div className='absolute h-full w-full justify-center items-center flex flex-col '>
          <h1 className='font-bold tracking-tight text-6xl text-white'>
            Deaf-i
          </h1>
          <h3 className='font-semibold tracking-tight text-3xl text-white'>
            Founded for and by families with hearing-impaired members
          </h3>
        </div>
      </div>
      <MaxWidthWrapper>
        <div className='text-center'>
          <h1 className='text-9xl font-bold tracking-tight'>WIP :)</h1>
        </div>
      </MaxWidthWrapper>
    </>
  );
}
