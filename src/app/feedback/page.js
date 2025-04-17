// app/feedback/page.js
"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import SessionFeedbackForm from '../../components/SessionFeedbackForm';
import Image from 'next/image';
import { FaBrain } from 'react-icons/fa';
import DashboardNavbar from '@/components/DashboardNavbar';

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
      <DashboardNavbar showBackButton={true}/>

      {/* Form Content */}
      <SessionFeedbackForm />
    </div>
  );
}