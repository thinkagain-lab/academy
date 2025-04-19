"use client";
import { useState } from 'react';
import { FaLock, FaUser, FaEnvelope } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import Link from 'next/link';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    // Validate passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }
    
    // Validate password strength
    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      setLoading(false);
      return;
    }
    
    try {
      // Create user with Firebase
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Update profile
      await updateProfile(user, {
        displayName: name
      });
      
      // Register user in our database
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${await user.getIdToken()}`
        },
        body: JSON.stringify({
          name,
          role: 'Learner', // Default role for new registrations
        }),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Registration failed');
      }
      
      const userData = await response.json();
      
      // Store basic user info in localStorage
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userId', userData.user_id);
      localStorage.setItem('name', userData.name);
      localStorage.setItem('role', userData.role);
      
      // Redirect to dashboard
      router.push('/dashboard/session1');
    } catch (error) {
      console.error("Registration error:", error);
      setError(error.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-900 text-white flex items-center justify-center p-4">
      {/* Background blurs */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/6 w-40 sm:w-56 md:w-64 h-40 sm:h-56 md:h-64 rounded-full bg-blue-500 blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 right-1/6 w-56 sm:w-72 md:w-96 h-56 sm:h-72 md:h-96 rounded-full bg-green-500 blur-3xl opacity-20"></div>
        <div className="absolute top-2/3 left-1/3 w-48 sm:w-60 md:w-72 h-48 sm:h-60 md:h-72 rounded-full bg-purple-500 blur-3xl opacity-20"></div>
      </div>
      
      {/* Registration container */}
      <div className="w-full max-w-sm md:max-w-md p-[2px] rounded-xl bg-gradient-to-r from-blue-500 to-green-500 relative z-10 shadow-xl">
        <div className="bg-gray-800 rounded-xl p-6 md:p-8">
          {/* Logo and header section */}
          <div className="text-center mb-6">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center overflow-hidden">
                <Image 
                  src="/TalLogoRound(1).png" 
                  alt="Think Again Lab Logo" 
                  width={40}
                  height={40}
                  className="w-12 h-12 object-contain"
                  priority
                />
              </div>
            </div>
            
            <h1 className="text-2xl md:text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 leading-tight">
              Create an Account
            </h1>
            <p className="text-sm text-gray-300">Join Think Again Academy today</p>
          </div>
          
          {/* Registration form */}
          <form onSubmit={handleRegister} className="space-y-4">
            {error && (
              <div className="bg-red-500/20 border border-red-500 text-red-300 px-3 py-2 rounded text-sm">
                {error}
              </div>
            )}
            
            <div>
              <div className="flex items-center bg-gray-700 rounded px-3 py-2">
                <FaUser className="text-gray-400 mr-2 flex-shrink-0" />
                <input
                  type="text"
                  className="w-full bg-transparent text-white focus:outline-none text-sm"
                  placeholder="Full Name"
                  value={name}
                  onChange={handleNameChange}
                  required
                  autoComplete="name"
                />
              </div>
            </div>
            
            <div>
              <div className="flex items-center bg-gray-700 rounded px-3 py-2">
                <FaEnvelope className="text-gray-400 mr-2 flex-shrink-0" />
                <input
                  type="email"
                  className="w-full bg-transparent text-white focus:outline-none text-sm"
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
                <FaLock className="text-gray-400 mr-2 flex-shrink-0" />
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full bg-transparent text-white focus:outline-none text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                  autoComplete="new-password"
                />
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-400 hover:text-gray-200 text-xs flex-shrink-0 ml-1"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>
            
            <div>
              <div className="flex items-center bg-gray-700 rounded px-3 py-2">
                <FaLock className="text-gray-400 mr-2 flex-shrink-0" />
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full bg-transparent text-white focus:outline-none text-sm"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  required
                  autoComplete="new-password"
                />
              </div>
            </div>
            
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold py-2 px-4 rounded-full hover:shadow-lg hover:shadow-blue-500/20 transition duration-300 text-sm disabled:opacity-50"
            >
              {loading ? 'Creating Account...' : 'Create Account'}
            </button>
            
            <div className="text-center text-gray-400 text-xs mt-4">
              Already have an account?{' '}
              <Link href="/login" className="text-blue-400 hover:text-blue-300">
                Sign In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}