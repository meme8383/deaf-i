import React from 'react';
import { createClient } from '@/prismicio';
import { PrismicRichText } from '@prismicio/react';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';

const page = async () => {
  const client = createClient();
  const blogPosts = await client.getAllByType('blog');
  return (
    <MaxWidthWrapper className="mt-3 flex flex-col items-center">
      <h1 className="text-center text-4xl border-b font-semibold mx-auto md:px-10 mb-3">
        Blog Posts
      </h1>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {blogPosts.map((post) => (
          <a
            key={post.id}
            href={`/blog/${post.uid}`}
            className="bg-gray-50 shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="p-6">
              <h2 className="text-2xl font-bold text-black mb-2">
                <PrismicRichText field={post.data.title} />
              </h2>
              <p className="text-gray-500 text-sm mb-2">
                {new Date(post.first_publication_date).toLocaleDateString(
                  'en-US',
                  {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  }
                )}
              </p>
              <div className="text-gray-600 text-sm mb-3 line-clamp-2">
                <PrismicRichText field={post.data.body} />
              </div>
              <p className="text-blue-600 text-base font-medium text-end">
                Read more →
              </p>
            </div>
          </a>
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default page;
