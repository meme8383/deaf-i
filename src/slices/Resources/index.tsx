import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { Content } from '@prismicio/client';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import { PrismicText, SliceComponentProps } from '@prismicio/react';

/**
 * Props for `Resources`.
 */
export type ResourcesProps = SliceComponentProps<Content.ResourcesSlice>;

/**
 * Component for "Resources" Slices.
 */
const Resources = ({ slice }: ResourcesProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div id="resources" className="scroll-m-20 bg-slate-200 my-5 py-2">
        <MaxWidthWrapper>
          <div className="flex">
            <h1 className="text-center text-4xl border-b font-semibold mx-auto md:px-10 border-slate-400">
              Resources
            </h1>
          </div>
          <div className="md:grid md:grid-cols-3 md:gap-3 lg:gap-8 mt-5">
            {slice.items.map((item, i) => (
              <PrismicNextLink
                field={item.link}
                rel="noopener noreferrer"
                key={i}
              >
                <div className="bg-white mb-5 flex flex-col rounded-lg h-72  border-slate-400 overflow-hidden hover:scale-105 duration-300 ease-in-out shadow hover:shadow-xl">
                  <div className="mt-2 relative w-full overflow-hidden h-16">
                    <PrismicNextImage
                      className="object-contain w-full h-full"
                      field={item.logo}
                      fill
                    />
                  </div>
                  <div className="mx-3 mt-3">
                    <p className="text-lg font-medium text-slate-600">
                      <PrismicText field={item.description} />
                    </p>
                  </div>
                </div>
              </PrismicNextLink>
            ))}
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  );
};

export default Resources;
