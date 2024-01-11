'use client';

import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { cn } from '@/lib/utils';
import { Content } from '@prismicio/client';
import { PrismicNextImage } from '@prismicio/next';
import { PrismicText, SliceComponentProps } from '@prismicio/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

/**
 * Props for `People`.
 */
export type PeopleProps = SliceComponentProps<Content.PeopleSlice>;

/**
 * Component for "People" Slices.
 */
const People = ({ slice }: PeopleProps): JSX.Element => {
  const [selected, setSelected] = useState(0);
  const [fade, setFade] = useState(false);

  const [textIndex, setTextIndex] = useState(0);
  const people = slice.items;

  useEffect(() => {
    setFade(true);
    const timer = setTimeout(() => {
      setFade(false);
      setTextIndex(selected);
    }, 150);
    return () => clearTimeout(timer);
  }, [selected]);

  const next = () => {
    setSelected((prev) => (prev + 1) % people.length);
  };

  const prev = () => {
    setSelected((prev) => (prev - 1 + people.length) % people.length);
  };

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="bg-slate-200 my-5 py-2">
        <MaxWidthWrapper>
          <div className="text-foreground md:mx-10 py-5">
            <h1 className="w-full border-b border-b-slate-400 tracking-tight font-semibold text-3xl">
              Our People
            </h1>
            <div className="flex mt-5 w-full h-64 items-center justify-center">
              <button
                className={cn('my-auto', {
                  'text-slate-300': selected === 0,
                  'text-slate-500': selected !== 0,
                })}
                onClick={() => prev()}
                disabled={selected === 0}
              >
                <ChevronLeft size={48} />
              </button>
              <div className="hidden lg:flex">
                {people.map((person, i) => (
                  <button
                    onClick={() => setSelected(i)}
                    key={i}
                    className={cn(
                      'h-36 relative items-center justify-center m-auto aspect-square rounded-full overflow-hidden mx-1 xl:mx-3 duration-300 ease-in-out',
                      {
                        'hover:scale-110': selected !== i,
                        'h-64': selected === i,
                      }
                    )}
                  >
                    <PrismicNextImage
                      className="object-contain"
                      field={person.picture}
                      fill
                      loading="eager"
                    />
                  </button>
                ))}
              </div>
              <div className="relative lg:hidden">
                <button
                  className={cn(
                    'relative h-56 aspect-square rounded-full overflow-hidden transition-opacity duration-300',
                    {
                      'opacity-0': fade,
                      'opacity-100': !fade,
                    }
                  )}
                >
                  <PrismicNextImage
                    className="object-contain"
                    field={people[textIndex].picture}
                    fill
                  />
                </button>
              </div>
              <button
                className={cn('my-auto', {
                  'text-slate-300': selected === people.length - 1,
                  'text-slate-500': selected !== people.length - 1,
                })}
                onClick={() => next()}
                disabled={selected === people.length - 1}
              >
                <ChevronRight size={48} />
              </button>
            </div>
            <div
              className={cn('mt-5 transition-opacity duration-300', {
                'opacity-0': fade,
                'opacity-100': !fade,
              })}
            >
              <h1 className="text-2xl font-semibold tracking-tight border-b border-b-slate-400">
                <PrismicText field={people[textIndex].name} />
                <span className="text-lg font-sans text-muted-foreground ml-3">
                  <PrismicText field={people[textIndex].role} />
                </span>
              </h1>
              <p className="leading-7 mt-4">
                <PrismicText field={people[textIndex].description} />
              </p>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  );
};

export default People;
