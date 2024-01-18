import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Content } from '@prismicio/client';
import { PrismicText, SliceComponentProps } from '@prismicio/react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

/**
 * Props for `FrequentlyAsked`.
 */
export type FrequentlyAskedProps =
  SliceComponentProps<Content.FrequentlyAskedSlice>;

/**
 * Component for "FrequentlyAsked" Slices.
 */
const FrequentlyAsked = ({ slice }: FrequentlyAskedProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div id="faq" className="scroll-m-20">
        <MaxWidthWrapper>
          <div className="flex">
            <h1 className="text-center text-4xl border-b font-semibold mx-auto md:px-10 mb-3">
              Frequently Asked Questions
            </h1>
          </div>
          {slice.items.map((question, i) => (
            <div className="mb-5" key={i}>
              <h3 className="text-xl text-muted-foreground border-b mb-1">
                <PrismicText field={question.question} />
              </h3>
              <p className="ml-5 text-md">
                <PrismicText field={question.answer} />
              </p>
            </div>
          ))}
          <div className="flex w-full">
            <Link
              className={cn(
                buttonVariants({ variant: 'link' }),
                'ml-auto gap-1.5 text-lg'
              )}
              href="/faq"
            >
              Read More
              <ArrowRight size={20} />
            </Link>
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  );
};

export default FrequentlyAsked;
