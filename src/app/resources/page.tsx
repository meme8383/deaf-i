import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Image from 'next/image';
import Link from 'next/link';

const items = [
  {
    image: '/resources/cochlear.png',
    href: 'https://www.cochlear.com/us/en/home',
    description: 'xx',
    title: 'Cochlear',
  },
  {
    image: '/resources/agb.png',
    href: 'https://www.agbell.org/',
    description: 'x',
    title: 'a.g.bell',
  },
  {
    image: '/resources/hlaa.png',
    href: 'https://www.hearingloss.org/',
    description: 'xxx',
    title: 'Hearing Loss Association of America',
  },
];

const Item = ({
  image,
  href,
  description,
  title,
}: {
  image: string;
  href: string;
  description: string;
  title: string;
}) => (
  <Link href={href} target='_blank' rel='noopener noreferrer'>
    <div className='mb-5 flex flex-col rounded-lg h-96 border border-slate-400 overflow-hidden hover:scale-105 duration-300 ease-in-out shadow hover:shadow-xl'>
      <div className='mt-2 relative w-full overflow-hidden h-16'>
        <Image
          className='object-contain w-full h-full'
          src={image}
          alt={`${title} logo`}
          fill
        />
      </div>
      {/* <div className='text-center mx-auto'>
        <h1 className='px-4 text-3xl font-semibold tracking-tight border-b'>
          {title}
        </h1>
      </div> */}
      <div className='text-lg font-medium mx-3'>
        <p className=''>{description}</p>
      </div>
    </div>
  </Link>
);

export default function Page() {
  return (
    <MaxWidthWrapper>
      <div className='md:grid md:grid-cols-3 md:gap-3 lg:gap-8 mt-5'>
        {items.map((item, i) => (
          <Item key={i} {...item} />
        ))}
      </div>
    </MaxWidthWrapper>
  );
}
