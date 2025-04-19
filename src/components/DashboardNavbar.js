// components/Navbar.js
"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';
import { auth } from '@/lib/firebase';

export default function DashboardNavbar({ showBackButton = false }) {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const handleLogout = async () => {
    try {
      // Clear all localStorage items
      localStorage.clear();
      
      // Set the logout flag that the Login component checks for
      sessionStorage.setItem('justLoggedOut', 'true');
      
      // Sign out from Firebase
      await auth.signOut();
      
      // Navigate to login page
      router.push('/login');
      setMobileMenuOpen(false);
    } catch (error) {
      console.error("Logout error:", error);
      // Still attempt to redirect even if logout fails
      router.push('/login');
    }
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && !event.target.closest('.mobile-menu-container')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <nav className="bg-gray-800/70 backdrop-blur-md sticky top-0 z-50 border-b border-gray-700">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex flex-row gap-2 items-center">
            <Image 
              src="/TalLogoRound(1).png" 
              alt="Think Again Lab Logo" 
              width={40} 
              height={40}
              className="rounded-md"
            />
            <span className="text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 whitespace-nowrap">
              Think Again Academy
            </span>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <span className="text-gray-300">Welcome, Student!</span>
            {showBackButton ? (
              <button
                onClick={handleBackToDashboard}
                className="bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 py-1 px-3 rounded-full text-sm transition"
              >
                Back to Dashboard
              </button>
            ) : (
              <button
                onClick={handleLogout}
                className="bg-red-500/20 hover:bg-red-500/30 text-red-300 py-1 px-3 rounded-full text-sm transition"
              >
                Logout
              </button>
            )}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="p-2 rounded-md text-gray-300 hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu, show/hide based on menu state */}
      {mobileMenuOpen && (
        <div className="md:hidden mobile-menu-container">
          <div className="bg-gray-800/90 backdrop-blur-md border-b border-gray-700 px-4 py-3 space-y-3">
            <div className="text-gray-300 px-1">Welcome, Student!</div>
            {showBackButton ? (
              <button
                onClick={handleBackToDashboard}
                className="w-full text-left bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 py-2 px-3 rounded-md text-sm transition"
              >
                Back to Dashboard
              </button>
            ) : (
              <button
                onClick={handleLogout}
                className="w-full text-left bg-red-500/20 hover:bg-red-500/30 text-red-300 py-2 px-3 rounded-md text-sm transition"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}