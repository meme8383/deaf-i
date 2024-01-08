import React from 'react';
import Person from './Person';

const people = [
  {
    name: 'Farah Bader',
    role: 'Founder, CEO',
    image: '/about/farah-crop.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    name: 'Jad Bader',
    role: 'Co-Founder, President',
    image: '/about/jad-crop.jpg',
    description:
      'Jad Bader is currently studying neuroscience at Wahington University intending to go to medical school to become an Otolaryngologist. He is currently doing clinical neuroscience laboratory research at WashU\'s medical campus and is leading the next generation of his scholarship cohort the "Danforth Scholars" as their seminar leader.',
  },
  {
    name: 'Barbara Bader',
    role: 'Incorporator, Registered Agent',
    image: '/about/barbara-crop.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    name: 'Eduard Tanase',
    role: 'CTO, Web Developer',
    image: '/about/eduard-crop.jpg',
    description:
      "Eduard Tanase is a computer engineering student at Purdue University. He is a Software Lead of Purdue's IEEE Neurotech Committee and is currently doing research in the field of computational neuroscience. He intends to pursue a master's degree in computer science after completing his undergraduate studies.",
  },
  {
    name: 'Elena Kaufman',
    role: 'Social Media Marketing Director',
    image: '/about/ellie.jpg',
    description:
      'Elena Kaufman is an undergraduate student at Washington University in St. Louis, studying Psychological & Brain Sciences, with plans to pursue her Doctorate in Occupational Therapy. Growing up with a mother with unilateral hearing loss, Elena became dedicated to fostering the change her mother hoped to see by aiding in efforts towards awareness and advocacy. Her active engagement in the Students’ Association of Speech & Hearing Sciences involves community projects that aim to destigmatize hearing loss and promote inclusivity, ultimately aiming to bridge the gap between access and accessibility.',
  },
];

const People = () => {
  return (
    <div className='text-foreground md:mx-10 py-5'>
      <h1 className='w-full border-b border-b-slate-400 tracking-tight font-semibold text-3xl'>
        Our People
      </h1>
      <div className='mt-5 md:grid md:grid-cols-2 md:gap-5'>
        {people.map((person, i) => (
          <Person
            key={i}
            role={person.role}
            name={person.name}
            image={person.image}
            description={person.description}
            swapped={i % 2 === 1}
          />
        ))}
      </div>
    </div>
  );
};

export default People;
