"use client";
import { useState, useEffect } from 'react';
import { FaLock, FaUser } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

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
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500 blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-green-500 blur-[120px]"></div>
        <div className="absolute top-2/3 left-1/2 w-72 h-72 rounded-full bg-purple-500 blur-[80px]"></div>
      </div>
      
      <div className="p-[2px] rounded-xl w-full max-w-md bg-gradient-to-r from-blue-500 to-green-500 relative z-10">
        <div className="bg-gray-800 rounded-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
              Think Again Academy
            </h1>
            <p className="text-gray-300">Sign in to access your Python course</p>
          </div>
          
          <form onSubmit={handleLogin}>
            {error && <div className="bg-red-500/20 border border-red-500 text-red-300 px-4 py-2 rounded mb-4">{error}</div>}
            
            <div className="mb-4">
              <div className="flex items-center bg-gray-700 rounded px-3 py-2">
                <FaUser className="text-gray-400 mr-3" />
                <input
                  type="text"
                  className="w-full bg-transparent text-white focus:outline-none"
                  placeholder="Username"
                  value={username}
                  onChange={handleUsernameChange}
                  required
                  autoComplete="off"
                  style={{ zIndex: 20 }}
                />
              </div>
            </div>
            
            <div className="mb-6">
              <div className="flex items-center bg-gray-700 rounded px-3 py-2">
                <FaLock className="text-gray-400 mr-3" />
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full bg-transparent text-white focus:outline-none"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                  autoComplete="off"
                  style={{ zIndex: 20 }}
                />
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-400 hover:text-gray-200"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white font-bold py-3 px-4 rounded-full hover:shadow-lg hover:shadow-blue-500/20 transition duration-300"
            >
              Sign In
            </button>
            
          </form>
        </div>
      </div>
    </div>
  );
}