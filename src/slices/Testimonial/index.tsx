import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { Content } from '@prismicio/client';
import { PrismicText, SliceComponentProps } from '@prismicio/react';

/**
 * Props for `Testimonial`.
 */
export type TestimonialProps = SliceComponentProps<Content.TestimonialSlice>;

/**
 * Component for "Testimonial" Slices.
 */
const Testimonial = ({ slice }: TestimonialProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <MaxWidthWrapper className="mt-3">
        <div className="flex">
          <h1 className="text-center text-4xl border-b font-semibold mx-auto md:px-10 mb-3">
            Testimonials
          </h1>
        </div>
        {slice.items.map((testimonials, i) => (
          <div className="mb-5" key={i}>
            <h3 className="text-xl text-muted-foreground border-b mb-1">
              <PrismicText field={testimonials.name} />
            </h3>
            <p className="ml-5 text-md">
              <PrismicText field={testimonials.testimonial} />
            </p>
          </div>
        ))}
      </MaxWidthWrapper>
    </section>
  );
};

export default Testimonial;
