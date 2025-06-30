'use client';
import NavigationButton from "./NavigationButton";
import { useState, useEffect } from "react";
import Logo from "./Logo";
export default function Navigation() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Calculate opacity based on scroll position (0-100px scroll range)
  const backgroundOpacity = Math.min(scrollY / 100, 1);
  const isScrolled = scrollY > 50;

  return (
    <nav 
      className="fixed top-0 left-0 right-0 backdrop-blur-md shadow-sm z-[9999] transition-all duration-300" 
      style={{
        backgroundColor: `rgba(255, 255, 255, ${backgroundOpacity * 0.95})`,
      }}
      role="navigation" 
      aria-label="Main navigation"
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Logo width={36} height={36} theme={isScrolled ? 'light' : 'dark'} />
            <h1 className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Hoyst
            </h1>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
           
            <button 
              type="button"
              onClick={() => scrollToSection('workflow')} 
              className={`cursor-pointer transition-colors duration-300 ${
                isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-gray-200 hover:text-white'
              }`}
            >
              How it Works
            </button>
            <button 
              type="button"
              onClick={() => scrollToSection('theme-editor')} 
              className={`cursor-pointer transition-colors duration-300 ${
                isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-gray-200 hover:text-white'
              }`}
            >
              Theme editor
            </button>
            <button 
              type="button"
              onClick={() => scrollToSection('features')} 
              className={`cursor-pointer transition-colors duration-300 ${
                isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-gray-200 hover:text-white'
              }`}
            >
              Features
            </button>
            
          </div>
          
          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            <NavigationButton />
          </div>
        </div>
        </div>
    </nav>
  );
} 