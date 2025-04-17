// components/Navbar.js
import { useState } from 'react';

export default function StudentNavbar({ username, onLogout }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="h-10 w-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                <span className="text-xl">🐍</span>
              </div>
              <span className="ml-3 text-xl font-bold text-white">Python Notes</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center">
            <div className="ml-4 flex items-center md:ml-6">
              <span className="text-gray-300 mr-4">Welcome, {username}</span>
              <button
                onClick={onLogout}
                className="bg-gray-700 py-2 px-4 border border-gray-600 rounded-md text-sm font-medium text-gray-200 hover:bg-gray-600"
              >
                Sign out
              </button>
            </div>
          </div>
          
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="bg-gray-700 p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-600 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1 sm:px-3">
            <div className="flex justify-between items-center px-4 py-2">
              <span className="text-gray-300">Welcome, {username}</span>
              <button
                onClick={onLogout}
                className="bg-gray-700 py-1 px-3 border border-gray-600 rounded-md text-sm font-medium text-gray-200 hover:bg-gray-600"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}