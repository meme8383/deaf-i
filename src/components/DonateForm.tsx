'use client';

import React, { useState } from 'react';

import { formatAmountForDisplay } from '@/utils/stripe-helpers';
import { createCheckoutSession } from '@/app/actions/stripe';
import { Button } from './ui/button';
import MaxWidthWrapper from './MaxWidthWrapper';
import { Input } from './ui/input';
import { cn } from '@/lib/utils';
import { Label } from './ui/label';
import { Loader2 } from 'lucide-react';

const MIN_AMOUNT = 5.0;
const MAX_AMOUNT = 500.0;

export default function DonateForm(): JSX.Element {
  const [loading, setLoading] = useState<boolean>(false);
  const [input, setInput] = useState<{ customDonation: number | undefined }>({
    customDonation: undefined,
  });

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ): void => {
    setInput({ customDonation: parseFloat(e.target.value) });
  };

  const formAction = async (data: FormData): Promise<void> => {
    setLoading(true);
    const { url } = await createCheckoutSession(data);

    window.location.assign(url as string);
  };

  const chooseAmount = (e: React.FormEvent, amount: number): void => {
    e.preventDefault();
    setInput({ customDonation: amount });
  };

  return (
    <div id="donate" className="scroll-m-20">
      <MaxWidthWrapper>
        <div className="flex">
          <h1 className="text-center text-4xl border-b font-semibold mx-auto md:px-10 mb-3">
            Donate Now
          </h1>
        </div>
        <div className="flex flex-col w-full items-center justify-center">
          <form action={formAction} className="w-full max-w-sm" noValidate>
            <Label htmlFor="customDonation">Select or enter an amount</Label>
            <div className="grid grid-cols grid-cols-4">
              {[10, 50, 100, 500].map((amount) => (
                <Button
                  key={amount}
                  className="mt-1 mx-1 bg-black hover:bg-gray-600"
                  onClick={(e) => chooseAmount(e, amount)}
                >
                  {'$' + amount}
                </Button>
              ))}
            </div>
            <p className="absolute my-auto text-slate-600 translate-x-2 translate-y-5">
              $
            </p>
            <Input
              className={cn('w-full mt-3 px-5', {
                'focus-visible:ring-red-500': input.customDonation
                  ? input.customDonation < MIN_AMOUNT ||
                    input.customDonation > MAX_AMOUNT
                  : false,
              })}
              name="customDonation"
              type="number"
              min={MIN_AMOUNT}
              max={MAX_AMOUNT}
              step="any"
              placeholder="Enter an amount"
              onChange={handleInputChange}
              value={input.customDonation}
            />
            {(
              input.customDonation
                ? input.customDonation < MIN_AMOUNT ||
                  input.customDonation > MAX_AMOUNT
                : false
            ) ? (
              <p className="text-red-500 text-sm mt-1">
                Please enter a value between{' '}
                {formatAmountForDisplay(MIN_AMOUNT, 'usd')} and{' '}
                {formatAmountForDisplay(MAX_AMOUNT, 'usd')}
              </p>
            ) : null}
            <div className="mt-3 w-full flex items-center">
              <Button
                className="w-full"
                type="submit"
                disabled={
                  loading ||
                  input.customDonation === undefined ||
                  input.customDonation < MIN_AMOUNT ||
                  input.customDonation > MAX_AMOUNT
                }
              >
                Donate{' '}
                {input.customDonation
                  ? formatAmountForDisplay(input.customDonation, 'usd')
                  : ''}
              </Button>
              <Loader2
                className={cn('animate-spin ml-2', {
                  hidden: !loading,
                })}
                size={32}
              />
            </div>
          </form>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
