import React from 'react';
import ResourceItem from './ResourceItem';

const items = [
  {
    image: '/resources/cochlear.png',
    href: 'https://www.cochlear.com/us/en/home',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    title: 'Cochlear',
  },
  {
    image: '/resources/agb.png',
    href: 'https://www.agbell.org/',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    title: 'a.g.bell',
  },
  {
    image: '/resources/hlaa.png',
    href: 'https://www.hearingloss.org/',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    title: 'Hearing Loss Association of America',
  },
];

const Resources = () => {
  return (
    <div className='md:grid md:grid-cols-3 md:gap-3 lg:gap-8 mt-5'>
      {items.map((item, i) => (
        <ResourceItem key={i} {...item} />
      ))}
    </div>
  );
};

export default Resources;
