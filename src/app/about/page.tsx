import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Person from '@/components/Person';
import Image from 'next/image';

const people = [
  {
    name: 'Farah Bader',
    image: '/about/farah.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    name: 'Jad Bader',
    image: '/about/jad.jpg',
    description:
      'Jad Bader is currently studying neuroscience at Wahington University intending to go to medical school to become an Otolaryngologist. He is currently doing clinical neuroscience laboratory research at WashU’s medical campus and is leading the next generation of his scholarship cohort the “Danforth Scholars” as their seminar leader.',
  },
  {
    name: 'Barbara Bader',
    image: '/about/barbara.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];

export default function Page() {
  return (
    <>
      <MaxWidthWrapper>
        <section>
          <div className='text-foreground md:mx-10 mt-5 md:grid md:grid-cols-2 md:gap-3'>
            <div>
              <h1 className='text-3xl font-semibold tracking-tight border-b'>
                Mission Statement
              </h1>
              <p className='leading-7 mt-4'>
                Deaf-i&apos;s purpose is to further awareness of the unique
                needs of cochlear implant recipients through advocacy. We aim to
                improve awareness by promoting education, outreach equity and
                support. We strive to create a community that fosters
                inclusivity, empowerment, and accessibility for all. Our
                programs include but are not limited to provide free lectures
                and resources that to benefit quality of life cochlear implant
                recipients to raise social consciousness about the cause on a
                local and global level and to hold fundraising events to
                maximize our impact.
              </p>
            </div>
            <div className='relative h-96 mt-2 md:mt-0'>
              <Image
                className='object-contain relative'
                src='/about/FullSizeRender.jpg'
                alt='jad'
                fill
              ></Image>
            </div>
          </div>
        </section>
      </MaxWidthWrapper>

      <section className='bg-slate-200 my-5 py-2'>
        <MaxWidthWrapper>
          <div className='text-foreground md:mx-10'>
            <h1 className='w-full border-b border-b-slate-400 tracking-tight font-semibold text-3xl'>
              Our People
            </h1>
            <div className='mt-5'>
              {people.map((person, i) => (
                <Person
                  key={i}
                  name={person.name}
                  image={person.image}
                  description={person.description}
                  swapped={i % 2 === 1}
                />
              ))}
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
