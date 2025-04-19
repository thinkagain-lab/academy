"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/lib/firebase';

export default function AuthGuard({ children, requiredRole = null }) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        router.push('/login');
        return;
      }

      try {
        // Verify with backend and get user data
        const response = await fetch('/api/auth/user', {
          headers: {
            'Authorization': `Bearer ${await user.getIdToken()}`
          }
        });
        
        if (!response.ok) {
          throw new Error('Failed to authenticate');
        }
        
        const userData = await response.json();
        
        // Check if user has required role
        if (requiredRole && userData.role !== requiredRole) {
          // Redirect based on role
          if (userData.role === 'Admin') {
            router.push('/admin/dashboard');
          } else if (userData.role === 'Instructor') {
            router.push('/instructor/dashboard');
          } else {
            router.push('/dashboard/session1');
          }
          return;
        }
        
        setLoading(false);
      } catch (error) {
        console.error('Auth check error:', error);
        // If authentication fails, redirect to login
        router.push('/login');
      }
    });
    
    return () => unsubscribe();
  }, [router, requiredRole]);

  if (loading) {
    return (
      <div className="min-h-screen w-full bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-300">Loading...</p>
        </div>
      </div>
    );
  }

  return children;
}