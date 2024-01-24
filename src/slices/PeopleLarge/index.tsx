import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { cn } from '@/lib/utils';
import { Content, RichTextField } from '@prismicio/client';
import { PrismicNextImage } from '@prismicio/next';
import { PrismicText, SliceComponentProps } from '@prismicio/react';

/**
 * Props for `PeopleLarge`.
 */
export type PeopleLargeProps = SliceComponentProps<Content.PeopleLargeSlice>;

/**
 * Component for "PeopleLarge" Slices.
 */
const PeopleLarge = ({ slice }: PeopleLargeProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div
        className={cn('py-3', {
          'bg-slate-200': slice.variation === 'boardMembers',
        })}
      >
        <MaxWidthWrapper>
          <div className="text-foreground md:mx-10">
            <h1
              className={cn(
                'w-full border-b  tracking-tight font-semibold text-3xl',
                {
                  'border-b-slate-400': slice.variation === 'boardMembers',
                }
              )}
            >
              {slice.variation === 'boardMembers'
                ? 'Board Members'
                : 'Our People'}
            </h1>
            {slice.items.map((person, index) => (
              <div className="lg:grid lg:grid-cols-3 my-4 mx-5" key={index}>
                <div className="lg:col-span-1 justify-center flex items-center">
                  <PrismicNextImage
                    field={person.picture}
                    className="w-60 h-60 rounded-2xl"
                  />
                </div>
                <div className="lg:col-span-2 my-auto">
                  <h2
                    className={cn(
                      'text-2xl font-semibold tracking-tight border-b',
                      {
                        'border-b-slate-400':
                          slice.variation === 'boardMembers',
                      }
                    )}
                  >
                    <PrismicText field={person.name} />
                    <span className="text-lg font-sans text-muted-foreground ml-3">
                      <PrismicText field={person.role} />
                    </span>
                  </h2>
                  <p className="leading-7 mt-1">
                    <PrismicText field={person.description} />
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  );
};

export default PeopleLarge;
