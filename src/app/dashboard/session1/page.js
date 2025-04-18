"use client";
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FaPython, FaCheckCircle, FaTrophy, FaBookOpen, FaPaperPlane, FaLaptopCode, FaLinkedin } from 'react-icons/fa';
import DashboardNavbar from '@/components/DashboardNavbar';
import CourseSidebar from '@/components/CourseSidebar';

export default function Dashboard() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in
    if (localStorage.getItem('isLoggedIn') !== 'true') {
      router.push('/login'); // Redirect to login if not logged in
    } else {
      setIsLoading(false);
    }

    // Prevent copy-paste functionality
    const preventCopy = (e) => {
      e.preventDefault();
      return false;
    };

    // Prevent right-click context menu
    // const preventContextMenu = (e) => {
    //   e.preventDefault();
    //   return false;
    // };

    // Prevent print screen and screenshots
    const preventPrintScreen = (e) => {
      if (
        (e.keyCode === 44) || // Print Screen
        (e.ctrlKey && e.keyCode === 80) || // Ctrl+P
        (e.ctrlKey && e.keyCode === 83) || // Ctrl+S
        (e.ctrlKey && e.shiftKey && e.keyCode === 73) || // Ctrl+Shift+I (DevTools)
        (e.ctrlKey && e.shiftKey && e.keyCode === 67) // Ctrl+Shift+C (DevTools)
      ) {
        e.preventDefault();
        return false;
      }
    };

    // Add event listeners
    document.addEventListener('copy', preventCopy);
    document.addEventListener('cut', preventCopy);
    // document.addEventListener('contextmenu', preventContextMenu);
    document.addEventListener('keydown', preventPrintScreen);
    
    // Cleanup event listeners when component unmounts
    return () => {
      document.removeEventListener('copy', preventCopy);
      document.removeEventListener('cut', preventCopy);
      // document.removeEventListener('contextmenu', preventContextMenu);
      document.removeEventListener('keydown', preventPrintScreen);
    };
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    router.push('/login'); // Redirect to login page
  };

  const CodeBlock = ({ children }) => (
    <div className="bg-gray-800 rounded-lg p-2 sm:p-4 my-3 overflow-x-auto user-select-none">
      <pre className="text-green-400 font-mono text-xs sm:text-sm">
        {children}
      </pre>
    </div>
  );

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-2xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white relative user-select-none">
      <Head>
        <title>Introduction to Python | Think Again Academy</title>
        <meta name="description" content="Python course for beginners" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Meta tag to prevent screenshots in iOS */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <style>{`
          * {
            -webkit-user-select: none;
            -ms-user-select: none;
            user-select: none;
            -webkit-touch-callout: none;
          }
          
          /* Disable text selection */
          .user-select-none {
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
          
          /* Add watermark effect */
          .watermark-container {
            position: relative;
          }
          
          .watermark {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1000;
            background: repeating-linear-gradient(
              45deg,
              rgba(255, 255, 255, 0.02),
              rgba(255, 255, 255, 0.02) 10px,
              rgba(255, 255, 255, 0.04) 10px,
              rgba(255, 255, 255, 0.04) 20px
            );
          }
          
          .watermark::before {
            content: "Think Again Academy";
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(-45deg);
            font-size: 4rem;
            color: rgba(255, 255, 255, 0.03);
            white-space: nowrap;
            pointer-events: none;
          }
        `}</style>
      </Head>

      {/* Watermark overlay */}
      <div className="watermark"></div>

      {/* Background elements */}
      <div className="fixed inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500 blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-green-500 blur-[120px]"></div>
        <div className="absolute top-2/3 left-1/2 w-72 h-72 rounded-full bg-purple-500 blur-[80px]"></div>
      </div>
      
      {/* Navbar */}
      <DashboardNavbar />

      {/* Sidebar - already mobile responsive */}
      <CourseSidebar />

      {/* Main Content */}
      <main className="pt-24 md:pt-8 md:ml-64 max-w-4xl mx-auto px-4 py-8 relative z-10 watermark-container">
        <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-4 sm:p-8 mb-6">
          <div className="flex items-center mb-6">
            <div className="p-2 sm:p-3 bg-blue-500/20 rounded-full mr-3 sm:mr-4">
              <FaPython className="text-blue-400 text-xl sm:text-2xl" />
            </div>
            <div>
              <h1 className="text-xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
                Introduction to Python
              </h1>
              <p className="text-sm sm:text-base text-gray-300">Session 1: Getting Started with Python</p>
            </div>
          </div>
          
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-3 sm:p-4 mb-6">
            <p className="italic text-blue-300 text-sm sm:text-base">
              ✨ "Every coder was once a beginner who dared to write their first line of code."
            </p>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-blue-300">🎯 Session Goals</h2>
          <p className="mb-3 sm:mb-4 text-sm sm:text-base">By the end of this session, you will:</p>
          <ul className="list-none space-y-2 mb-6 text-sm sm:text-base">
            <li className="flex items-center">
              <FaCheckCircle className="text-green-400 mr-2 flex-shrink-0" />
              <span>Understand what Python is and why it matters</span>
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-400 mr-2 flex-shrink-0" />
              <span>Know how to use <strong>Google Colab</strong> to write Python code</span>
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-400 mr-2 flex-shrink-0" />
              <span>Write and run your <strong>first Python script</strong></span>
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-400 mr-2 flex-shrink-0" />
              <span>Crack the "Guess the Output" icebreaker game</span>
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-400 mr-2 flex-shrink-0" />
              <span>Feel like a coding wizard in the making 🧙‍♂️</span>
            </li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-blue-300">🕰️ A Very Short History of Python</h2>
          <ul className="list-disc pl-5 space-y-2 mb-6 text-sm sm:text-base">
            <li><span className="font-bold">🧠 Created by:</span> Guido van Rossum in 1989</li>
            <li><span className="font-bold">🎭 Named after:</span> <em>Monty Python's Flying Circus</em> (not the snake!)</li>
            <li><span className="font-bold">🚀 Used by:</span> Google, NASA, Netflix, Instagram, Spotify, and even the International Space Station!</li>
            <li><span className="font-bold">🌍 Why it matters:</span> Python is everywhere — from web apps to robots, games to AI, automation to art.</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-blue-300">💡 Why Learn Python?</h2>
          <ul className="list-disc pl-5 space-y-2 mb-4 text-sm sm:text-base">
            <li><span className="font-bold">Simple syntax</span> → Looks like English</li>
            <li><span className="font-bold">Powerful libraries</span> → For AI, data, automation, etc.</li>
            <li><span className="font-bold">Huge community</span> → You'll never code alone</li>
            <li><span className="font-bold">Career booster</span> → Python devs are in high demand</li>
          </ul>
          
          <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-3 sm:p-4 mb-6">
            <h3 className="font-bold text-blue-300 mb-2 text-sm sm:text-base">📱 Real-World Magic:</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base">
              <li>Instagram backend? Python.</li>
              <li>Netflix recommendation engine? Python.</li>
              <li>Self-driving car algorithms? You guessed it — Python.</li>
            </ul>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-blue-300">⚙️ Using Google Colab</h2>
          <p className="text-base sm:text-lg mb-2">Google Colab = Your Python Notebook in the Cloud ☁️</p>
          
          <h3 className="font-bold text-blue-300 mb-2 text-sm sm:text-base">🔑 What is it?</h3>
          <ul className="list-disc pl-5 space-y-2 mb-4 text-sm sm:text-base">
            <li>A free tool from Google to write and run Python in your browser</li>
            <li>No installation needed</li>
            <li className="break-words">Just visit: <a href="https://colab.research.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">https://colab.research.google.com</a></li>
            <li>Click "New Notebook" and start coding!</li>
          </ul>
          
          <h3 className="font-bold text-blue-300 mb-2 text-sm sm:text-base">✨ Features:</h3>
          <ul className="list-disc pl-5 space-y-2 mb-6 text-sm sm:text-base">
            <li>Save your code in Google Drive</li>
            <li>Share like a Google Doc</li>
            <li>Run code with Shift + Enter</li>
            <li>Add comments, headings, and more</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-blue-300">🧙‍♀️ Your First Python Spell: Hello, World!</h2>
          <CodeBlock>print("Hello, World!")</CodeBlock>
          
          <p className="mb-6 text-sm sm:text-base">
            <span className="font-bold">🔍 What it does:</span><br />
            Prints a message to the screen — your computer just spoke your language!
          </p>

          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-blue-300">🎮 Icebreaker Challenge: Guess the Output!</h2>
          <p className="mb-4 text-sm sm:text-base">Here's some Python. Can you predict the result?</p>
          
          <div className="mb-6">
            <p className="font-bold text-sm sm:text-base">Example 1:</p>
            <CodeBlock>print("5" * 3)</CodeBlock>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-sm sm:text-base">
              <p>🧠 Guess: 👉</p>
              <div className="bg-gray-700 px-3 py-1 rounded mt-2 sm:mt-0">💡 Answer: <code>555</code> (because it repeats the string 3 times)</div>
            </div>
          </div>

          <div className="mb-6">
            <p className="font-bold text-sm sm:text-base">Example 2:</p>
            <CodeBlock>print("Python"[::-1])</CodeBlock>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-sm sm:text-base">
              <p>🧠 Guess: 👉</p>
              <div className="bg-gray-700 px-3 py-1 rounded mt-2 sm:mt-0">💡 Answer: <code>nohtyP</code> (reverse the string)</div>
            </div>
          </div>
          
          <p className="mb-6 text-sm sm:text-base">Keep playing this with friends or family — Python is full of surprises!</p>

          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-blue-300">🧪 Try It Yourself! Challenge Lab</h2>
          <p className="mb-4 text-sm sm:text-base">🔥 Try writing this:</p>
          <CodeBlock>{`name = input("What's your name? ")
emoji = input("Pick an emoji: ")
print(f"Hi {name}, welcome to Python {emoji}")`}</CodeBlock>
          
          <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-3 sm:p-4 mb-6">
            <h3 className="font-bold text-blue-300 mb-2 text-sm sm:text-base">🧠 Challenge:</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
              <li>Change it to print your dream job</li>
              <li>Print the message 5 times</li>
            </ul>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-blue-300">🏁 Milestones Unlocked Today:</h2>
          <div className="grid grid-cols-1 gap-4 mb-6">
            {[
              "Wrote your first line of code",
              "Ran code using Google Colab",
              "Played your first Python guessing game",
              "Understood variables and f-strings",
              "Created a personalized Python program"
            ].map((milestone, index) => (
              <div key={index} className="flex items-center p-3 bg-gray-800/50 rounded-lg border border-gray-700 text-sm sm:text-base">
                <FaCheckCircle className="text-green-400 mr-2 flex-shrink-0" />
                <span>{milestone}</span>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-900/30 to-green-900/30 rounded-lg p-3 sm:p-4 flex items-center mb-6">
            <FaTrophy className="text-yellow-400 text-xl sm:text-2xl mr-3 flex-shrink-0" />
            <div className="text-sm sm:text-base">
              <p className="text-yellow-300 font-bold">Badge Unlocked:</p>
              <p>Code Wizard Novice 🧙</p>
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-blue-300">📌 Your To-Do Checklist</h2>
          <div className="space-y-2 mb-6 text-sm sm:text-base">
            {[
              "Create your Google Colab notebook",
              "Save it with the name: `Session1_Intro_YourName`",
              "Practice printing your name, age, favorite emoji",
              "Try at least 3 code snippets from today's demo",
              "Share your coolest output in the class group"
            ].map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="h-5 w-5 rounded border border-blue-400 mr-2 flex-shrink-0"></div>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-blue-300">📚 Homework</h2>
          <ol className="list-decimal pl-5 space-y-2 mb-6 text-sm sm:text-base">
            <li>Write a script that asks for your name and lucky number — then prints a sentence.</li>
            <li>Try printing a triangle using `*` (stars).</li>
            <li>Explore 2 built-in Python functions on w3schools.com</li>
          </ol>

          <div className="bg-gradient-to-r from-blue-900/30 to-green-900/30 rounded-lg p-4 sm:p-6 mb-6">
            <h2 className="text-xl sm:text-2xl font-bold mb-2 text-blue-300">💬 Quote of the Day</h2>
            <p className="italic text-base sm:text-lg">
              "The only way to learn to code is to write code. Start now. Don't stop."
            </p>
          </div>
          
          {/* Cool button for Colab Notebook Access */}
          <div className="flex justify-center mb-6">
            <a 
              href="https://colab.research.google.com/drive/1CX8BjSMKWovyTeWRmFVn9kqNGOUhX-N4?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full sm:w-auto group relative bg-gradient-to-r from-blue-600 to-green-500 text-white font-bold py-3 sm:py-4 px-4 sm:px-8 rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition duration-300 flex items-center justify-center overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></span>
              <FaLaptopCode className="mr-2 sm:mr-3 text-xl sm:text-2xl relative z-10" />
              <span className="relative z-10 text-sm sm:text-base">Access Class Notebook</span>
              <span className="absolute -right-10 group-hover:right-3 top-1/2 transform -translate-y-1/2 transition-all duration-300 opacity-0 group-hover:opacity-100">→</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mt-8">
          <a 
            href="/dashboard/session1/linkedin-template" 
            className="w-full group relative bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-bold py-3 sm:py-4 px-4 sm:px-8 rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition duration-300 flex items-center justify-center overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></span>
            <FaLinkedin className="mr-2 sm:mr-3 text-lg sm:text-xl relative z-10" />
            <span className="relative z-10 text-sm sm:text-base">LinkedIn Post Template</span>
            <span className="absolute -right-10 group-hover:right-3 top-1/2 transform -translate-y-1/2 transition-all duration-300 opacity-0 group-hover:opacity-100">→</span>
          </a>
          
          <a 
            href="/dashboard/session1/feedback" 
            className="w-full group relative bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold py-3 sm:py-4 px-4 sm:px-8 rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transition duration-300 flex items-center justify-center overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></span>
            <FaPaperPlane className="mr-2 sm:mr-3 text-lg sm:text-xl relative z-10" />
            <span className="relative z-10 text-sm sm:text-base">Submit Session Feedback</span>
            <span className="absolute -right-10 group-hover:right-3 top-1/2 transform -translate-y-1/2 transition-all duration-300 opacity-0 group-hover:opacity-100">→</span>
          </a>
        </div>
      </main>
    </div>
  );
}