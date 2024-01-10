import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { Content } from '@prismicio/client';
import { PrismicText, SliceComponentProps } from '@prismicio/react';

/**
 * Props for `AboutUs`.
 */
export type AboutUsProps = SliceComponentProps<Content.AboutUsSlice>;

/**
 * Component for "AboutUs" Slices.
 */
const AboutUs = ({ slice }: AboutUsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div id='about-us' className='scroll-m-20'>
        <MaxWidthWrapper>
          <div className='flex flex-col mt-5 mb-12 text-center'>
            <h1 className='text-3xl font-semibold tracking-tight border-b mx-auto md:px-16'>
              Mission Statement
            </h1>
            <p className='leading-7 mt-4 font-medium text-slate-800 md:mx-16'>
              <PrismicText field={slice.primary.mission_statement} />
            </p>
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  );
};

export default AboutUs;
