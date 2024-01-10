'use client';

import { Content } from '@prismicio/client';
import { PrismicNextImage } from '@prismicio/next';
import { PrismicText, SliceComponentProps } from '@prismicio/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import type SwiperType from 'swiper';
import { useState } from 'react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div
        id='home'
        className='relative w-full h-lvh md:h-[512px] items-center justify-center scroll-m-20 bg-gray-500'
      >
        <Swiper
          onSwiper={(swiper) => setSwiper(swiper)}
          spaceBetween={50}
          modules={[Pagination, Autoplay, EffectFade]}
          slidesPerView={1}
          className='w-full h-full'
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          effect={'fade'}
        >
          {slice.items.map((item, index) => (
            <SwiperSlide key={index} className='brightness-50 bg-no-repeat'>
              <PrismicNextImage
                loading='eager'
                field={item.image}
                fill
                className='object-cover object-center -z-10'
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='absolute h-full w-full justify-center md:items-center flex flex-col top-0 px-5 z-10'>
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
