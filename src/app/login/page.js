"use client";
import { useState, useEffect } from 'react';
import { FaLock, FaUser } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  // Hard-coded credentials using an object to map usernames to passwords
  const validCredentials = {
    "student": "python123",
    "swagata": "swagata123",
    "admin": "admin123",
    "teacher": "teach456"
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (validCredentials[username] === password) {
      localStorage.setItem('isLoggedIn', 'true');
      // You might also want to store the username to personalize the experience
      localStorage.setItem('username', username);
      setError('');
      router.push('/dashboard/session1'); // Navigate to the main component
    } else {
      setError('Invalid username or password');
    }
  };

  useEffect(() => {
    // Check if user is already logged in
    if (localStorage.getItem('isLoggedIn') === 'true') {
      router.push('/dashboard/session1');
    }
  }, [router]);

  return (
    <div className="min-h-screen w-full bg-gray-900 text-white flex items-center justify-center p-4">
      {/* Background blurs - adjusted for better mobile display */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/6 w-40 sm:w-56 md:w-64 h-40 sm:h-56 md:h-64 rounded-full bg-blue-500 blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 right-1/6 w-56 sm:w-72 md:w-96 h-56 sm:h-72 md:h-96 rounded-full bg-green-500 blur-3xl opacity-20"></div>
        <div className="absolute top-2/3 left-1/3 w-48 sm:w-60 md:w-72 h-48 sm:h-60 md:h-72 rounded-full bg-purple-500 blur-3xl opacity-20"></div>
      </div>
      
      {/* Login container with responsive width */}
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md p-[2px] rounded-xl bg-gradient-to-r from-blue-500 to-green-500 relative z-10 shadow-xl">
        <div className="bg-gray-800 rounded-xl p-4 sm:p-6 md:p-8">
          {/* Logo and header section */}
          <div className="text-center mb-5 sm:mb-6">
            {/* Logo container */}
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
            
            {/* Title with proper text wrapping on smaller screens */}
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 leading-tight">
              Think Again Academy
            </h1>
            <p className="text-xs sm:text-sm text-gray-300">Sign in to access your Python course</p>
          </div>
          
          {/* Login form with improved spacing and sizing */}
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
                  type="text"
                  className="w-full bg-transparent text-white focus:outline-none text-xs sm:text-sm"
                  placeholder="Username"
                  value={username}
                  onChange={handleUsernameChange}
                  required
                  autoComplete="off"
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
                  autoComplete="off"
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
              className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold py-2 px-4 rounded-full hover:shadow-lg hover:shadow-blue-500/20 transition duration-300 text-xs sm:text-sm"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}