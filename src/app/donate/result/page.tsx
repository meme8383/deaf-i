import type { Stripe } from 'stripe';

import { stripe } from '@/lib/stripe';
import Link from 'next/link';

export default async function ResultPage({
  searchParams,
}: {
  searchParams: { session_id: string };
}): Promise<JSX.Element> {
  if (!searchParams.session_id)
    throw new Error('Please provide a valid session_id (`cs_test_...`)');

  const checkoutSession: Stripe.Checkout.Session =
    await stripe.checkout.sessions.retrieve(searchParams.session_id, {
      expand: ['line_items', 'payment_intent'],
    });

  const paymentIntent = checkoutSession.payment_intent as Stripe.PaymentIntent;

  if (paymentIntent.status !== 'succeeded') {
    return (
      <div className="flex flex-col items-center justify-center my-auto">
        <h1 className="font-semibold tracking-tight text-3xl text-destructive">
          There was an error with your donation. Please try again.
        </h1>
        <p className="text-xl text-center">
          If you continue to have issues, please{' '}
          <Link
            href="/#contact"
            className="text-blue-600 border-b border-blue-600"
          >
            contact us
          </Link>
          .
        </p>
        <p className="text-md text-center">
          Status: <span className="font-semibold">{paymentIntent.status}</span>
        </p>
        {paymentIntent.last_payment_error?.message && (
          <p className="text-md text-center">
            {paymentIntent.last_payment_error.message}
          </p>
        )}
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center my-auto">
        <h1 className="font-semibold tracking-tight text-3xl text-primary">
          Thank you for your donation!
        </h1>
        <p className="text-md text-center">
          Transaction id:{' '}
          <span className="font-semibold">{paymentIntent.id}</span>
        </p>
      </div>
    </>
  );
}
