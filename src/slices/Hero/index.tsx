import { Content } from '@prismicio/client';
import { PrismicNextImage } from '@prismicio/next';
import { PrismicText, SliceComponentProps } from '@prismicio/react';
import Image from 'next/image';

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div
        id='home'
        className='relative w-full h-lvh md:h-[512px] items-center justify-center scroll-m-20'
      >
        <PrismicNextImage
          field={slice.primary.image}
          fill
          className='brightness-50 bg-no-repeat object-cover'
        />
        <div className='absolute h-full w-full justify-center md:items-center flex flex-col top-0 px-5'>
          <h1 className='font-bold tracking-tight text-6xl text-white mb-5'>
            Deaf-i
          </h1>
          <h3 className='font-semibold tracking-tight text-3xl text-white'>
            <PrismicText field={slice.primary.subheader} />
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Hero;
