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
        className="relative w-full h-[50vw] max-h-[700px] scroll-m-20 bg-slate-300 group"
      >
        <div className="mx-auto w-full h-full">
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
            onAutoplayTimeLeft={(swiper, timeLeft, percentage) =>
              setProgress(percentage)
            }
          >
            {slice.items.map((item, index) => (
              <SwiperSlide key={index} className="brightness-50">
                <PrismicNextImage
                  loading="eager"
                  field={item.image}
                  fill
                  className="object-cover object-center -z-10 h-full w-full"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex flex-col absolute h-full w-full top-0 z-10">
            <Progress value={(1 - progress) * 100} />
            <div className="flex h-full w-full">
              <div className="flex flex-col h-full justify-center">
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
              <div className="flex flex-col justify-center lg:items-center h-full w-full">
                <h1 className="font-bold tracking-tight text-4xl md:text-6xl text-white mb-5 md:mb-10 lg:mb-5">
                  Deaf-i
                </h1>
                <h3 className="font-semibold tracking-tight sm:text-2xl md:text-3xl text-white">
                  <PrismicText field={slice.primary.subheader} />
                </h3>
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
