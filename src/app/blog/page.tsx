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
            className="bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                <PrismicRichText field={post.data.title} />
              </h2>
              <p className="text-gray-600 text-sm">Read more...</p>
            </div>
          </a>
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default page;
