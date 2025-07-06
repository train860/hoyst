'use client';
import Logo from "./Logo";
import Link from "next/link";

export default function StaticNavigation() {
  return (
    <nav 
      className="fixed top-0 left-0 right-0 bg-white shadow-sm z-[9999] border-b border-gray-200" 
      role="navigation" 
      aria-label="Main navigation"
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Logo width={36} height={36} theme="light" />
            <h1 className="text-2xl font-bold text-gray-900">
              Hoyst
            </h1>
          </Link>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/#workflow" 
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
            >
              How it Works
            </Link>
            <Link 
              href="/#theme-editor" 
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
            >
              Theme editor
            </Link>
            <Link 
              href="/#features" 
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
            >
              Features
            </Link>
          </div>
          
          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            <Link 
              href="/#waitlist"
              className="text-white px-6 py-2 rounded-lg hover:opacity-90 transition-all font-medium cursor-pointer"
              style={{backgroundColor: '#9739de'}}
            >
              Join Waitlist
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 