'use client';

import { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormMessage } from './ui/form';
import { cn } from '@/lib/utils';

const formSchema = z.object({
  email: z.string().email('Invalid email address'),
});

export default function NewsletterForm() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setMessage('');
    setLoading(true);
    setSuccess(false);

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      setLoading(false);

      if (response.ok) {
        form.reset();
        setMessage('You have successfully subscribed to our newsletter!');
        setSuccess(true);
      } else {
        setMessage(data.error || 'An error occurred. Please try again.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
      setLoading(false);
    }
  };

  const handleInputChange = () => {
    setMessage('');
    setSuccess(false);
  };

  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-2xl font-semibold">Subscribe to our newsletter</h3>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
          noValidate
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="rounded-r-none focus-visible:ring-0 focus-visible:ring-offset-0"
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                        handleInputChange();
                      }}
                    />
                    <Button
                      type="submit"
                      disabled={loading}
                      className="rounded-l-none w-32"
                    >
                      {loading ? (
                        <Loader2 className="animate-spin" size={24} />
                      ) : (
                        'Subscribe'
                      )}
                    </Button>
                  </div>
                </FormControl>
                <FormMessage>
                  {message && (
                    <p
                      className={cn('m-0', {
                        'text-red-500': !success,
                        'text-green-500': success,
                      })}
                    >
                      {message}
                    </p>
                  )}
                </FormMessage>
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
}
