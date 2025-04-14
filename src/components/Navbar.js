// Navbar.jsx
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [timeLeft, setTimeLeft] = useState(null);
  const TIMER_DURATION = 20 * 60; // 20 minutes in seconds
  
  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      // Check if user has scrolled down enough to show sticky bar (200px)
      setIsScrolled(window.scrollY > 200);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Timer functionality
  useEffect(() => {
    // Check if timer already exists in localStorage
    const storedTimerEnd = localStorage.getItem('timerEndTime');
    
    if (!storedTimerEnd) {
      // First visit - set timer end time
      const endTime = Date.now() + TIMER_DURATION * 1000;
      localStorage.setItem('timerEndTime', endTime.toString());
      setTimeLeft(TIMER_DURATION);
    } else {
      // Returning visit - calculate remaining time
      const remaining = Math.max(0, Math.floor((parseInt(storedTimerEnd) - Date.now()) / 1000));
      setTimeLeft(remaining);
    }
    
    // Set up interval for countdown
    const interval = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
    
    // Clean up on unmount
    return () => clearInterval(interval);
  }, []);
  
  // Format time as mm:ss
  const formatTime = (seconds) => {
    if (seconds === null) return "20:00"; // Initial state before calculation
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <>
      {/* Regular Navbar - visible on all screens */}
      <header className="py-6 flex justify-between items-center max-w-7xl mx-auto px-4">
        <div className="w-30 h-30 relative">
          <Image 
            src="https://raw.githubusercontent.com/thinkagain-lab/academy/827d563df1ae8a49ff856defe56e1e0fb756e77d/public/TalLogoRound.png" 
            alt="Think Again Lab Logo" 
            width={100} 
            height={100}
            className="rounded-md"
          />
        </div>
        <a href="#register" className="bg-gradient-to-r from-blue-500 to-green-500 text-white inline-block px-8 py-3 rounded-full font-bold transition hover:scale-105 hover:bg-green-400">
          Register Now
        </a>
      </header>
      
      {/* Mobile Sticky Bottom Bar - Only visible on mobile when scrolled */}
      <div 
        className={`
          fixed bottom-0 left-0 right-0 z-50 bg-gray-900 border-t border-gray-800 
          md:hidden ${isScrolled ? 'translate-y-0' : 'translate-y-full'}
          transition-transform duration-300 ease-in-out
          flex items-center justify-between p-3
        `}
      >

        <div className="flex items-center">
          <span className="text-gray-300 text-xs mr-2">Offer Ends:</span>
          <div className="bg-gray-800 p-1 px-2 rounded border border-blue-500">
            <span className="text-lg font-mono font-bold bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">
              {formatTime(timeLeft)}
            </span>
          </div>
        </div>

        <a href="#register" className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-4 py-2 rounded-full font-bold text-sm">
          Register Now
        </a>
        

      </div>
    </>
  );
}