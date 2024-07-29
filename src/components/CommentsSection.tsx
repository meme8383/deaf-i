'use client';

import dynamic from 'next/dynamic';

const DiscussionEmbed = dynamic(
  () => import('disqus-react').then((mod) => mod.DiscussionEmbed),
  { ssr: false }
);

import React from 'react';

const CommentsSection = (props: { url: string; title: string; id: string }) => {
  const disqusConfig = {
    url: props.url,
    identifier: props.id,
    title: props.title,
    language: 'en',
  };
  return <DiscussionEmbed shortname="deaf-i" config={disqusConfig} />;
};

export default CommentsSection;
