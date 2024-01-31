import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thank you for your donation!',
};

export default function ResultLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <>
      <MaxWidthWrapper className="mt-10 h-full">{children}</MaxWidthWrapper>
    </>
  );
}
