// app/feedback/page.js
"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import SessionFeedbackForm from '../../components/SessionFeedbackForm';
import Image from 'next/image';
import { FaBrain } from 'react-icons/fa';

export default function FeedbackPage() {
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in (just like in the dashboard)
    if (typeof window !== 'undefined' && localStorage.getItem('isLoggedIn') !== 'true') {
      router.push('/login'); // Redirect to login if not logged in
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      {/* Background elements */}
      <div className="fixed inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500 blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-green-500 blur-[120px]"></div>
        <div className="absolute top-2/3 left-1/2 w-72 h-72 rounded-full bg-purple-500 blur-[80px]"></div>
      </div>
      
      {/* Navbar */}
      <nav className="bg-gray-800/70 backdrop-blur-md sticky top-0 z-50 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex flex-row gap-2 items-center">
              <div className="">
                            <Image 
                                            src="/TalLogoRound(1).png" 
                                            alt="Think Again Lab Logo" 
                                            width={50} 
                                            height={50}
                                            className="rounded-md"
                                          />
              </div>
              <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
                Think Again Academy
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => router.push('/dashboard/session1')}
                className="bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 py-1 px-3 rounded-full text-sm transition"
              >
                Back to Dashboard
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Form Content */}
      <SessionFeedbackForm />
    </div>
  );
}