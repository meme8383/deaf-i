import DonateForm from '@/components/DonateForm';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import NewsletterForm from '@/components/NewsletterForm';
import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import { Instagram, Mail } from 'lucide-react';
import Link from 'next/link';

/**
 * Props for `ContactUs`.
 */
export type ContactUsProps = SliceComponentProps<Content.ContactUsSlice>;

/**
 * Component for "ContactUs" Slices.
 */
const ContactUs = ({ slice }: ContactUsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div id="contact" className="scroll-m-20 mt-3 mb-5">
        <MaxWidthWrapper className="max-w-5xl">
          <div className="md:grid md:grid-cols-2">
            <div>
              <div className="flex">
                <h1 className="text-center text-4xl border-b font-semibold mx-auto md:px-10 mb-3">
                  Contact us
                </h1>
              </div>
              <NewsletterForm />
              <div className="flex flex-col w-full max-w-xl mx-auto">
                <Link
                  href={`mailto:${slice.primary.email}`}
                  className="relative flex flex-1 my-3"
                  target="_blank"
                >
                  <Mail size={32} className="text-muted-foreground" />
                  <p className="mx-3 text-xl text-slate-800">
                    Email us at{' '}
                    <span className="text-blue-600">{slice.primary.email}</span>
                  </p>
                </Link>
                <Link
                  href="https://www.instagram.com/deafi_official"
                  target="_blank"
                  className="relative flex flex-1 my-3"
                >
                  <Instagram size={32} className="text-muted-foreground" />
                  <p className="mx-3 text-xl text-slate-800">
                    Follow us on Instagram at{' '}
                    <span className="text-blue-600">@deafi_official</span>
                  </p>
                </Link>
              </div>
            </div>
            <DonateForm />
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  );
};

export default ContactUs;
