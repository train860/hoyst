'use client';

export default function NavigationButton() {
  const handleClick = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button 
      type="button"
      onClick={handleClick}
      className="text-white px-6 py-2 rounded-lg hover:opacity-90 transition-all font-medium cursor-pointer"
      style={{backgroundColor: '#9739de'}}
    >
      Join Waitlist
    </button>
  );
} 