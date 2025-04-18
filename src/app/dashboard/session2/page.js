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
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    router.push('/login'); // Redirect to login page
  };

  const CodeBlock = ({ children }) => (
    <div className="bg-gray-800 rounded-lg p-4 my-3 overflow-x-auto">
      <pre className="text-green-400 font-mono text-sm">
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
    <div className="min-h-screen bg-gray-900 text-white relative">
      <Head>
        <title>Data Basics & Operations | Think Again Academy</title>
        <meta name="description" content="Python course for beginners" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Background elements */}
      <div className="fixed inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-500 blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-yellow-500 blur-[120px]"></div>
        <div className="absolute top-2/3 left-1/2 w-72 h-72 rounded-full bg-blue-500 blur-[80px]"></div>
      </div>
      
      {/* Navbar */}
      <DashboardNavbar/>

      <CourseSidebar />

      {/* Main Content */}
      <main className="pt-24 md:pt-8 md:ml-64 max-w-4xl mx-auto px-4 py-8 relative z-10">
        <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-8 mb-6">
          <div className="flex items-center mb-6">
            <div className="p-2 sm:p-3 bg-purple-500/20 rounded-full mr-3 sm:mr-4">
              <FaPython className="text-purple-400 text-2xl" />
            </div>
            <div>
              <h1 className="text-xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Data Basics & Operations
              </h1>
              <p className="text-sm sm:text-base text-gray-300">Session 2: Working with Python Data Types</p>
            </div>
          </div>
          
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-3 sm:p-4 mb-6">
            <p className="italic text-purple-300 text-sm sm:text-base">
              ✨ "In the world of programming, data is the foundation upon which everything is built."
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-purple-300">🎯 Session Goals</h2>
          <p className="mb-4">By the end of this session, you will:</p>
          <ul className="list-none space-y-2 mb-6">
            <li className="flex items-center">
              <FaCheckCircle className="text-green-400 mr-2" />
              <span>Understand what Python data types are (Numbers, Strings, Booleans)</span>
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-400 mr-2" />
              <span>Perform arithmetic operations like a pro (+, -, *, /, %, **, //)</span>
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-400 mr-2" />
              <span>Practice your skills through fun, interactive challenges</span>
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-400 mr-2" />
              <span>Begin to think like a coder using logic and creativity 🧠✨</span>
            </li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 text-purple-300">🔍 Let's Explore: DATA TYPES</h2>
          <p className="mb-4">Just like in real life, Python sorts things into categories. Here are the ones you'll meet today:</p>
          
          <ol className="list-decimal pl-5 space-y-3 mb-6">
            <li><span className="font-bold text-yellow-300">Integers (int)</span> - Whole numbers: <code className="bg-gray-800 px-2 py-1 rounded text-green-400">10</code>, <code className="bg-gray-800 px-2 py-1 rounded text-green-400">-5</code>, <code className="bg-gray-800 px-2 py-1 rounded text-green-400">2025</code></li>
            <li><span className="font-bold text-yellow-300">Floating point numbers (float)</span> - Numbers with decimals: <code className="bg-gray-800 px-2 py-1 rounded text-green-400">3.14</code>, <code className="bg-gray-800 px-2 py-1 rounded text-green-400">0.5</code>, <code className="bg-gray-800 px-2 py-1 rounded text-green-400">-7.8</code></li>
            <li><span className="font-bold text-yellow-300">Strings (str)</span> - Text inside quotes: <code className="bg-gray-800 px-2 py-1 rounded text-green-400">'hello'</code>, <code className="bg-gray-800 px-2 py-1 rounded text-green-400">"Python is fun"</code></li>
            <li><span className="font-bold text-yellow-300">Booleans (bool)</span> - True or False values: <code className="bg-gray-800 px-2 py-1 rounded text-green-400">True</code>, <code className="bg-gray-800 px-2 py-1 rounded text-green-400">False</code></li>
          </ol>
          
          <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-4 mb-6">
            <h3 className="font-bold text-blue-300 mb-2">🧠 Real Life Examples:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Your age → <code className="bg-gray-800 px-2 py-1 rounded text-green-400">int</code></li>
              <li>Price of coffee → <code className="bg-gray-800 px-2 py-1 rounded text-green-400">float</code></li>
              <li>Your name → <code className="bg-gray-800 px-2 py-1 rounded text-green-400">str</code></li>
              <li>Are you over 18? → <code className="bg-gray-800 px-2 py-1 rounded text-green-400">bool</code></li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-purple-300">➕ LET'S MATH IT OUT!</h2>
          <p className="mb-4">Python can do math for you. Here are your superpowers:</p>
          
          <div className="overflow-x-auto mb-6">
            <table className="w-full bg-gray-800/50 border border-gray-700 rounded-lg">
              <thead>
                <tr className="bg-gray-800">
                  <th className="py-2 px-4 text-left">Operation</th>
                  <th className="py-2 px-4 text-left">Symbol</th>
                  <th className="py-2 px-4 text-left">Example</th>
                  <th className="py-2 px-4 text-left">Output</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-700">
                  <td className="py-2 px-4">Add</td>
                  <td className="py-2 px-4"><code>+</code></td>
                  <td className="py-2 px-4"><code>5 + 2</code></td>
                  <td className="py-2 px-4"><code>7</code></td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="py-2 px-4">Subtract</td>
                  <td className="py-2 px-4"><code>-</code></td>
                  <td className="py-2 px-4"><code>10 - 3</code></td>
                  <td className="py-2 px-4"><code>7</code></td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="py-2 px-4">Multiply</td>
                  <td className="py-2 px-4"><code>*</code></td>
                  <td className="py-2 px-4"><code>4 * 3</code></td>
                  <td className="py-2 px-4"><code>12</code></td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="py-2 px-4">Divide</td>
                  <td className="py-2 px-4"><code>/</code></td>
                  <td className="py-2 px-4"><code>10 / 2</code></td>
                  <td className="py-2 px-4"><code>5.0</code></td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="py-2 px-4">Remainder</td>
                  <td className="py-2 px-4"><code>%</code></td>
                  <td className="py-2 px-4"><code>7 % 3</code></td>
                  <td className="py-2 px-4"><code>1</code></td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="py-2 px-4">Power</td>
                  <td className="py-2 px-4"><code>**</code></td>
                  <td className="py-2 px-4"><code>2 ** 3</code></td>
                  <td className="py-2 px-4"><code>8</code></td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="py-2 px-4">Floor Division</td>
                  <td className="py-2 px-4"><code>//</code></td>
                  <td className="py-2 px-4"><code>7 // 2</code></td>
                  <td className="py-2 px-4"><code>3</code></td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="bg-yellow-900/20 border border-yellow-800 rounded-lg p-4 mb-6">
            <h3 className="font-bold text-yellow-300 mb-2">⚡ Mini Challenge:</h3>
            <p>What will <code className="bg-gray-800 px-2 py-1 rounded text-green-400">15 % 4</code> output? Try it in Google Colab!</p>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-purple-300">🧵 STRINGS - Words, Sentences & Emojis 💬</h2>
          <p className="mb-4">Strings are how Python handles text:</p>
          
          <CodeBlock>{`print("Hello, world!")
print('I ❤️ Python')`}</CodeBlock>
          
          <div className="bg-green-900/20 border border-green-800 rounded-lg p-4 mb-6">
            <h3 className="font-bold text-green-300 mb-2">🎯 Try This:</h3>
            <CodeBlock>{`first_name = "Ada"
print("Hi " + first_name + "! Keep coding ✨")`}</CodeBlock>
            
            <h3 className="font-bold text-green-300 mt-4 mb-2">🚀 Bonus:</h3>
            <CodeBlock>{`print("Na" * 5 + " Batman!")`}</CodeBlock>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-purple-300">🔀 BOOLEAN LOGIC (True or False?)</h2>
          <p className="mb-4">Booleans are the logic part of Python:</p>
          
          <CodeBlock>{`print(10 > 5)     # True
print(3 == 3)     # True
print("a" in "apple") # True`}</CodeBlock>
          
          <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-4 mb-6">
            <h3 className="font-bold text-blue-300 mb-2">📌 Think of These As:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Is the door open? → True or False</li>
              <li>Do I have enough balance? → True or False</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-purple-300">🎮 Code Puzzle Challenge</h2>
          <p className="mb-4">Time to play! Try these in Colab:</p>
          
          <div className="mb-6">
            <p className="font-bold text-yellow-300">🔎 Puzzle 1</p>
            <CodeBlock>{`name = input("Your name: ")
print("Welcome, " + name + "! 🐍")`}</CodeBlock>
          </div>
          
          <div className="mb-6">
            <p className="font-bold text-yellow-300">🔢 Puzzle 2</p>
            <CodeBlock>{`print("Python! " * 3)`}</CodeBlock>
          </div>
          
          <div className="mb-6">
            <p className="font-bold text-yellow-300">🧠 Puzzle 3</p>
            <CodeBlock>{`num = 15
print("Even?", num % 2 == 0)`}</CodeBlock>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-purple-300">✅ TASK LIST</h2>
          <div className="space-y-2 mb-6">
            {[
              "Identify types: Write 2 examples of int, float, str, and bool",
              "Create your own calculator using arithmetic operators",
              "Write your name and print a fun message with it"
            ].map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="h-5 w-5 rounded border border-purple-400 mr-2 flex-shrink-0"></div>
                <span>{item}</span>
              </div>
            ))}
          </div>
          {/* <p className="mb-6 text-center font-bold text-yellow-300">📝 Submit your Colab file on the dashboard!</p> */}

          <h2 className="text-2xl font-bold mb-4 text-purple-300">🏆 BADGES & MILESTONES</h2>
          <h3 className="font-bold text-blue-300 mb-2">🎯 Milestones Unlocked:</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {[
              "Understood Python data types ✅",
              "Used arithmetic operators ✅",
              "Solved code puzzles ✅"
            ].map((milestone, index) => (
              <div key={index} className="flex items-center p-3 bg-gray-800/50 rounded-lg border border-gray-700">
                <FaCheckCircle className="text-green-400 mr-2 flex-shrink-0" />
                <span>{milestone}</span>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-lg p-4 flex items-center mb-6">
            <FaTrophy className="text-yellow-400 text-2xl mr-3" />
            <div>
              <p className="text-yellow-300 font-bold">Badge Earned:</p>
              <p>Data Dynamo 🧠💡</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-purple-300">🚀 NEXT UP:</h2>
          <div className="bg-gradient-to-r from-purple-900/30 to-green-900/30 rounded-lg p-6 mb-6">
            <p className="mb-2">In the next session, we'll explore <span className="font-bold">variables</span>, <span className="font-bold">input/output</span>, and <span className="font-bold">more string tricks!</span> 🧪</p>
            <p className="italic">Until then, keep experimenting on Google Colab — and remember, every bug is a clue, and every solution is a celebration! 🎉</p>
          </div>
          
          {/* Cool button for Colab Notebook Access */}
          <div className="flex justify-center mb-6">
            <a 
              href="https://colab.research.google.com/drive/1CUeg-qa1OTyz4mvYkJ3O7J0oysVeUWRE?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group relative bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold py-4 px-8 rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transition duration-300 flex items-center overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></span>
              <FaLaptopCode className="mr-3 text-2xl relative z-10" />
              <span className="relative z-10">Access Class Notebook</span>
              <span className="absolute -right-10 group-hover:right-3 top-1/2 transform -translate-y-1/2 transition-all duration-300 opacity-0 group-hover:opacity-100">→</span>
            </a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8">
          <a 
            href="/dashboard/session2/linkedin-template" 
            className="w-full md:w-auto group relative bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-bold py-4 px-8 rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transition duration-300 flex items-center justify-center overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></span>
            <FaLinkedin className="mr-3 text-xl relative z-10" />
            <span className="relative z-10">LinkedIn Post Template</span>
            <span className="absolute -right-10 group-hover:right-3 top-1/2 transform -translate-y-1/2 transition-all duration-300 opacity-0 group-hover:opacity-100">→</span>
          </a>
          
          <a 
            href="/dashboard/session2/feedback" 
            className="w-full md:w-auto group relative bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold py-4 px-8 rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transition duration-300 flex items-center justify-center overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></span>
            <FaPaperPlane className="mr-3 text-xl relative z-10" />
            <span className="relative z-10">Submit Session Feedback</span>
            <span className="absolute -right-10 group-hover:right-3 top-1/2 transform -translate-y-1/2 transition-all duration-300 opacity-0 group-hover:opacity-100">→</span>
          </a>
        </div>
      </main>
    </div>
  );
}