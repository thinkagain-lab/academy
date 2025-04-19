"use client";
import { useState, useEffect } from 'react';
import { FaLock, FaUser } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const router = useRouter();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      // Sign in with Firebase
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Fetch user data from our database
      const response = await fetch('/api/auth/user', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${await user.getIdToken()}`
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      
      const userData = await response.json();
      
      // Store basic user info in localStorage
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userId', userData.user_id);
      localStorage.setItem('name', userData.name);
      localStorage.setItem('role', userData.role);
      
      // Redirect based on role
      if (userData.role === 'Admin') {
        router.push('/admin/dashboard');
      } else if (userData.role === 'Instructor') {
        router.push('/instructor/dashboard');
      } else {
        router.push('/dashboard/session1');
      }
    } catch (error) {
      console.error("Login error:", error);
      setError(error.message || 'Invalid email or password');
      
      // Clear any stale auth data
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('userId');
      localStorage.removeItem('name');
      localStorage.removeItem('role');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Check if user is already logged in
    const checkAuth = async () => {
      setIsCheckingAuth(true);
      
      // Check if we're coming from a logout action
      const isLoggedOut = sessionStorage.getItem('justLoggedOut');
      if (isLoggedOut === 'true') {
        // Clear the flag
        sessionStorage.removeItem('justLoggedOut');
        setIsCheckingAuth(false);
        return;
      }
      
      const unsubscribe = auth.onAuthStateChanged(async (user) => {
        if (user) {
          try {
            // Get a fresh token to ensure it's valid
            const token = await user.getIdToken(true);
            
            // Verify with backend and get user data
            const response = await fetch('/api/auth/user', {
              headers: {
                'Authorization': `Bearer ${token}`
              }
            });
            
            if (response.ok) {
              const userData = await response.json();
              const role = userData.role;
              
              if (role === 'Admin') {
                router.push('/admin/dashboard');
              } else if (role === 'Instructor') {
                router.push('/instructor/dashboard');
              } else {
                router.push('/dashboard/session1');
              }
            } else {
              // If backend verification fails, sign out from Firebase
              await auth.signOut();
              localStorage.clear();
            }
          } catch (error) {
            console.error("Auth check error:", error);
            await auth.signOut();
            localStorage.clear();
          }
        }
        
        setIsCheckingAuth(false);
      });
      
      return unsubscribe;
    };
    
    const authCheck = checkAuth();
    
    return () => {
      // Clean up the subscription when the component unmounts
      if (authCheck && typeof authCheck.then === 'function') {
        authCheck.then(unsubscribe => {
          if (unsubscribe && typeof unsubscribe === 'function') {
            unsubscribe();
          }
        });
      }
    };
  }, [router]);

  if (isCheckingAuth) {
    return (
      <div className="min-h-screen w-full bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p>Checking authentication...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-gray-900 text-white flex items-center justify-center p-4">
      {/* Background blurs */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/6 w-40 sm:w-56 md:w-64 h-40 sm:h-56 md:h-64 rounded-full bg-blue-500 blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 right-1/6 w-56 sm:w-72 md:w-96 h-56 sm:h-72 md:h-96 rounded-full bg-green-500 blur-3xl opacity-20"></div>
        <div className="absolute top-2/3 left-1/3 w-48 sm:w-60 md:w-72 h-48 sm:h-60 md:h-72 rounded-full bg-purple-500 blur-3xl opacity-20"></div>
      </div>
      
      {/* Login container */}
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md p-[2px] rounded-xl bg-gradient-to-r from-blue-500 to-green-500 relative z-10 shadow-xl">
        <div className="bg-gray-800 rounded-xl p-4 sm:p-6 md:p-8">
          {/* Logo and header section */}
          <div className="text-center mb-5 sm:mb-6">
            <div className="flex justify-center mb-3 sm:mb-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-700 rounded-full flex items-center justify-center overflow-hidden">
                <Image 
                  src="/TalLogoRound(1).png" 
                  alt="Think Again Lab Logo" 
                  width={40}
                  height={40}
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                  priority
                />
              </div>
            </div>
            
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 leading-tight">
              Think Again Academy
            </h1>
            <p className="text-xs sm:text-sm text-gray-300">Sign in to access your Python course</p>
          </div>
          
          {/* Login form */}
          <form onSubmit={handleLogin} className="space-y-4">
            {error && (
              <div className="bg-red-500/20 border border-red-500 text-red-300 px-3 py-2 rounded text-xs sm:text-sm">
                {error}
              </div>
            )}
            
            <div>
              <div className="flex items-center bg-gray-700 rounded px-3 py-2">
                <FaUser className="text-gray-400 mr-2 flex-shrink-0 text-sm" />
                <input
                  type="email"
                  className="w-full bg-transparent text-white focus:outline-none text-xs sm:text-sm"
                  placeholder="Email Address"
                  value={email}
                  onChange={handleEmailChange}
                  required
                  autoComplete="email"
                />
              </div>
            </div>
            
            <div>
              <div className="flex items-center bg-gray-700 rounded px-3 py-2">
                <FaLock className="text-gray-400 mr-2 flex-shrink-0 text-sm" />
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full bg-transparent text-white focus:outline-none text-xs sm:text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                  autoComplete="current-password"
                />
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-400 hover:text-gray-200 text-xs sm:text-sm flex-shrink-0 ml-1"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>
            
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold py-2 px-4 rounded-full hover:shadow-lg hover:shadow-blue-500/20 transition duration-300 text-xs sm:text-sm disabled:opacity-50"
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}