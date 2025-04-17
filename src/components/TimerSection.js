// TimerSection.jsx
"use client";

import { useState, useEffect } from 'react';
import AnimatedButton from './AnimatedButton';

export default function TimerSection() {
  const [timeLeft, setTimeLeft] = useState(null);
  const TIMER_DURATION = 20 * 60; // 20 minutes in seconds
  
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
  
  // Get today's date in format: April 15, 2025
  const today = new Date();
  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  const formattedDate = today.toLocaleDateString('en-US', options);
  
  // If timer hasn't been initialized yet, show loading state
  if (timeLeft === null) {
    return null;
  }
  
  return (
    <section className=" bg-gray-800 rounded-xl p-6 my-12 mx-auto max-w-5xl">
      <div className="p-[2px] rounded-xl bg-gradient-to-r from-blue-500 to-green-500">
        <div className="bg-gray-800 rounded-xl p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-center md:text-left">
                <span className="bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">Limited Time Special Offer</span>
              </h3>
              <p className="text-gray-300 mb-2 text-center md:text-left">
                Register now to secure your spot before this special discount expires! 
                Only a few seats remain for this exclusive masterclass.
              </p>
              <p className="text-gray-300 font-semibold mb-4 text-center md:text-left">
                Register before <span className="text-green-500">{formattedDate}</span> to avail this offer.
              </p>
              <div className='flex flex-col md:flex-row px-5 md:px-0'>
              <a 
                href="#register">
                    <AnimatedButton>CLAIM DISCOUNT NOW</AnimatedButton>
                
              </a>
              </div>
            </div>
            
            <div className="flex-shrink-0 text-center">
              <div className="mb-2 text-gray-300">Offer Expires In:</div>
              <div className="bg-gray-900 p-4 rounded-lg border-2 border-blue-500">
                <div className="text-3xl md:text-4xl font-mono font-bold bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">
                  {formatTime(timeLeft)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}