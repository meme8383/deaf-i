import MaxWidthWrapper from '@/components/MaxWidthWrapper';

const questions = [
  {
    question: 'Question?',
    answer: 'answer',
  },
  {
    question: 'Question?',
    answer: 'answer',
  },
  {
    question: 'Question?',
    answer: 'answer',
  },
];

export default function Page() {
  return (
    <MaxWidthWrapper className='mt-5'>
      {questions.map((question, i) => (
        <div className='mb-5' key={i}>
          <h3 className='text-xl text-muted-foreground border-b'>
            {question.question}
          </h3>
          <p className='ml-5 text-md'>{question.answer}</p>
        </div>
      ))}
    </MaxWidthWrapper>
  );
}
