"use client";
import { useState, useEffect } from 'react';
import { FaLock, FaCheck, FaChevronRight, FaBars, FaTimes } from 'react-icons/fa';
import { useRouter, usePathname } from 'next/navigation';

export default function CourseSidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSession, setActiveSession] = useState(1);
  const [sessions, setSessions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Fetch session data from API
  useEffect(() => {
    // In a real app, this would be an API call
    const fetchSessions = async () => {
      setIsLoading(true);
      try {
        // Simulating API call with timeout
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // This would be the response from your API
        const sessionsData = [
          { id: 1, title: "Introduction to Python", isUnlocked: true, isCompleted: true },
          { id: 2, title: "Data Basics & Operations", isUnlocked: true, isCompleted: false },
          { id: 3, title: "Variables & Input/Output", isUnlocked: false, isCompleted: false },
          { id: 4, title: "Control Flow & Conditionals", isUnlocked: false, isCompleted: false },
          { id: 5, title: "Loops & Iteration", isUnlocked: false, isCompleted: false },
          { id: 6, title: "Lists & Collections", isUnlocked: false, isCompleted: false },
          { id: 7, title: "Functions & Modules", isUnlocked: false, isCompleted: false },
          { id: 8, title: "Dictionaries", isUnlocked: false, isCompleted: false },
          { id: 9, title: "Error Handling", isUnlocked: false, isCompleted: false },
          { id: 10, title: "File Operations", isUnlocked: false, isCompleted: false },
          { id: 11, title: "OOP Basics", isUnlocked: false, isCompleted: false },
          { id: 12, title: "Classes & Objects", isUnlocked: false, isCompleted: false },
          { id: 13, title: "Inheritance & Polymorphism", isUnlocked: false, isCompleted: false },
          { id: 14, title: "Working with APIs", isUnlocked: false, isCompleted: false },
          { id: 15, title: "Data Processing", isUnlocked: false, isCompleted: false },
          { id: 16, title: "Intro to Data Science", isUnlocked: false, isCompleted: false },
          { id: 17, title: "NumPy Essentials", isUnlocked: false, isCompleted: false },
          { id: 18, title: "Pandas Fundamentals", isUnlocked: false, isCompleted: false },
          { id: 19, title: "Data Visualization", isUnlocked: false, isCompleted: false },
          { id: 20, title: "Web Scraping", isUnlocked: false, isCompleted: false },
          { id: 21, title: "Flask Basics", isUnlocked: false, isCompleted: false },
          { id: 22, title: "Databases & SQL", isUnlocked: false, isCompleted: false },
          { id: 23, title: "Regular Expressions", isUnlocked: false, isCompleted: false },
          { id: 24, title: "Testing in Python", isUnlocked: false, isCompleted: false },
          { id: 25, title: "Async Programming", isUnlocked: false, isCompleted: false },
          { id: 26, title: "Machine Learning Intro", isUnlocked: false, isCompleted: false },
          { id: 27, title: "Clustering & Classification", isUnlocked: false, isCompleted: false },
          { id: 28, title: "Neural Networks Basics", isUnlocked: false, isCompleted: false },
          { id: 29, title: "Natural Language Processing", isUnlocked: false, isCompleted: false },
          { id: 30, title: "Computer Vision Intro", isUnlocked: false, isCompleted: false },
          { id: 31, title: "Project Planning", isUnlocked: false, isCompleted: false },
          { id: 32, title: "Final Project", isUnlocked: false, isCompleted: false }
        ];
        
        setSessions(sessionsData);
      } catch (error) {
        console.error("Failed to fetch sessions:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSessions();
  }, []);

  // Determine active session from URL
  useEffect(() => {
    if (pathname) {
      // Match paths like dashboard/session1, dashboard/session2, etc.
      const match = pathname.match(/\/dashboard\/session(\d+)/i);
      if (match && match[1]) {
        setActiveSession(parseInt(match[1]));
      }
    }
  }, [pathname]);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handle session click
  const handleSessionClick = (session) => {
    if (session.isUnlocked) {
      setActiveSession(session.id);
      router.push(`/dashboard/session${session.id}`);
      
      // On mobile, close the menu after selecting
      if (window.innerWidth < 768) {
        setIsMobileMenuOpen(false);
      }
    }
  };

  // Close mobile menu on resize if screen becomes larger
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  // Loading state
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // Render session item
  const renderSessionItem = (session) => (
    <div
      key={session.id}
      onClick={() => session.isUnlocked && handleSessionClick(session)}
      className={`flex items-center justify-between p-3 rounded-lg transition-colors ${
        session.isUnlocked
          ? "cursor-pointer hover:bg-gray-800 " + 
            (activeSession === session.id ? "bg-blue-900/30 border border-blue-800" : "")
          : "opacity-60 cursor-not-allowed"
      }`}
    >
      <div className="flex items-center">
        <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
          session.isCompleted ? "bg-green-500" : 
          (session.isUnlocked ? "bg-blue-500" : "bg-gray-700")
        }`}>
          {session.isCompleted ? (
            <FaCheck className="text-white text-xs" />
          ) : (
            session.isUnlocked ? (
              <span className="text-xs text-white">{session.id}</span>
            ) : (
              <FaLock className="text-gray-500 text-xs" />
            )
          )}
        </div>
        <span className="text-sm">{session.title}</span>
      </div>
      {session.isUnlocked && (
        <FaChevronRight className={`text-xs ${activeSession === session.id ? "text-blue-400" : "text-gray-500"}`} />
      )}
    </div>
  );

  return (
    <>
      {/* Mobile Hamburger Menu */}
      <div className="md:hidden fixed top-16 left-0 right-0 bg-gray-900 border-b border-gray-700 z-20 py-3 px-4 flex justify-between items-center">
        <div className="text-sm text-gray-400">
          Session {activeSession}: {sessions.find(s => s.id === activeSession)?.title || ''}
        </div>
        <button 
          onClick={toggleMobileMenu}
          className="p-2 bg-gray-800 rounded-md hover:bg-gray-700 transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu (Popup) */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-20 pt-24 bg-gray-900/95 backdrop-blur-sm overflow-y-auto">
          <div className="px-4 py-2">
            <h2 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 mb-4">
              Course Sessions
            </h2>
            <div className="space-y-1">
              {sessions.map(session => renderSessionItem(session))}
            </div>
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden md:block fixed left-0 top-16 bottom-0 w-64 bg-gray-900/70 backdrop-blur-sm border-r border-gray-700 overflow-y-auto z-20">
        <div className="p-4">
          <h2 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 mb-4">
            Course Sessions
          </h2>
          <div className="space-y-1">
            {sessions.map(session => renderSessionItem(session))}
          </div>
        </div>
      </div>

      {/* Content margin for desktop */}
      <div className="hidden md:block md:ml-64">
        {/* This is just to ensure the main content is pushed right */}
      </div>
    </>
  );
}