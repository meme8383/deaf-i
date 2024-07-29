import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PrismicRichText } from '@prismicio/react';

import { createClient } from '@/prismicio';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import CommentsSection from '@/components/CommentsSection';

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID('blog', params.uid)
    .catch(() => notFound());

  return (
    <MaxWidthWrapper className="mt-3">
      <div className="flex">
        <div className="text-center text-4xl border-b font-semibold mx-auto md:px-10 mb-3">
          <PrismicRichText field={page.data.title} />
        </div>
      </div>
      <div className="mt-5 font-md text-foreground indent-8 max-w-3xl mx-auto">
        <PrismicRichText field={page.data.body} />
      </div>
      <div className="mt-8 mb-8">
        <CommentsSection
          url={process.env.NEXT_PUBLIC_URL + '/blog/' + params.uid}
          title={page.data.meta_title as string}
          id={params.uid}
        />
      </div>
      <div className="mt-8 text-sm text-gray-500 text-center">
        <p>
          &copy; {new Date().getFullYear()} All rights reserved. Unauthorized
          use or reproduction of this content is prohibited.
        </p>
      </div>
    </MaxWidthWrapper>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const page = await client
    .getByUID('blog', params.uid)
    .catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType('blog');

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
