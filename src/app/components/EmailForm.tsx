'use client';

interface EmailFormProps {
  isHero?: boolean;
}

export default function EmailForm({ isHero = false }: EmailFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted');
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
        className="w-full transition-all duration-200 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-black focus:outline-none focus:border-transparent border border-gray-300"
        required
      />
      <button
        type="submit"
        className="w-full px-8 py-3 rounded-lg hover:opacity-90 transition-all font-semibold text-white cursor-pointer"
        style={{ backgroundColor: '#9739de' }}
      >
        Secure My Spot
      </button>
      <p className="text-sm text-gray-400">
        No spam, ever. Just product updates and your exclusive founding member invite.
      </p>
    </form>
  );
} 