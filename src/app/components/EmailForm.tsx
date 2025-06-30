'use client';

import { useState } from 'react';
import { addEmailToWaitlist } from '../../lib/supabase';

interface EmailFormProps {
  isHero?: boolean;
}

export default function EmailForm({ isHero = false }: EmailFormProps) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!email) {
      setMessage('Please enter your email address');
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    setMessage('');

    try {
      const result = await addEmailToWaitlist(email);
      
      if (result.success) {
        setIsSuccess(true);
        setMessage('Thank you! You\'re now on our waitlist. We\'ll be in touch soon!');
        setEmail('');
      } else {
        setMessage(result.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error(error);
      setMessage('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isHero) {
    return (
      <button
        type="button"
        className="px-8 py-3 rounded-lg hover:opacity-90 transition-all whitespace-nowrap font-medium text-white cursor-pointer"
        style={{ backgroundColor: '#9739de' }}
        onClick={()=>{
          document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        Join the Waitlist & Get 50% Off for Life
      </button>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
      <input
        type="email"
        placeholder="Your Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full transition-all duration-200 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-black focus:outline-none focus:border-transparent border border-gray-300"
        required
        disabled={isLoading}
      />
      <button
        type="submit"
        disabled={isLoading || isSuccess}
        className="w-full px-8 py-3 rounded-lg hover:opacity-90 transition-all font-semibold text-white cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        style={{ backgroundColor: '#9739de' }}
      >
        {isLoading ? 'Adding you to waitlist...' : isSuccess ? 'Successfully added!' : 'Secure My Spot'}
      </button>
      
      {message && (
        <p className={`text-sm ${isSuccess ? 'text-green-500' : 'text-red-500'}`}>
          {message}
        </p>
      )}
      
      {!isSuccess && (
        <p className="text-sm text-gray-400">
          No spam, ever. Just product updates and your exclusive founding member invite.
        </p>
      )}
    </form>
  );
} 