'use client';

import { Content } from '@prismicio/client';
import { PrismicNextImage } from '@prismicio/next';
import { PrismicText, SliceComponentProps } from '@prismicio/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type SwiperType from 'swiper';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useState } from 'react';
import { Progress } from '@/components/ui/progress';
import { Icons } from '@/components/Icons';

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [progress, setProgress] = useState(0);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div
        id="home"
        className="relative group flex w-full h-[45vw] scroll-m-20"
      >
        <div className="flex mx-auto w-full h-full -z-10">
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            slidesPerView={1}
            className="w-full h-full"
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            speed={500}
            onSwiper={(swiper) => setSwiper(swiper)}
            loop
            onAutoplayTimeLeft={(_swiper, _timeLeft, percentage) =>
              setProgress(percentage)
            }
          >
            {slice.items.map((item, index) => (
              <SwiperSlide key={index} className="brightness-50">
                <PrismicNextImage
                  loading="eager"
                  field={item.image}
                  fill
                  className="object-cover object-center -z-30 h-full w-full"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex flex-col absolute h-full w-full top-0 z-10">
            <Progress value={(1 - progress) * 100} />
          </div>
        </div>
        <div className="hidden absolute md:flex bg-white rotate-45 h-[200%] w-lvw -translate-x-[40vw] opacity-40 -z-10"></div>
        <div className="absolute flex w-full h-full z-20">
          <div className="flex h-full justify-center">
            <button
              onClick={(e) => {
                e.preventDefault();
                swiper?.slidePrev();
              }}
              className="group-hover:opacity-100 opacity-0 transition-opacity duration-300"
            >
              <ChevronLeft size={48} className="text-slate-300" />
            </button>
          </div>
          <div className="flex h-full w-full">
            <div className="h-full justify-center w-full md:w-[45vw] flex flex-col md:ml-5">
              <h1 className="hidden md:flex font-bold tracking-tight text-3xl md:text-9xl text-black mb-10 lg:mb-16">
                <Icons.logo className="w-[30vw]" />
              </h1>
              <h3 className="hidden md:flex font-semibold tracking-tight text-xl md:text-4xl text-black">
                <PrismicText field={slice.primary.subheader} />
              </h3>
            </div>
          </div>
          <div className="flex flex-col h-full justify-center">
            <button
              onClick={(e) => {
                e.preventDefault();
                swiper?.slideNext();
              }}
              className="group-hover:opacity-100 opacity-0 transition-opacity duration-300"
            >
              <ChevronRight size={48} className="text-slate-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
