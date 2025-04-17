// pages/linkedin-template/page.js
"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FaLinkedin, FaCopy, FaCheck, FaArrowLeft } from 'react-icons/fa';
import DashboardNavbar from '@/components/DashboardNavbar';

export default function LinkedInTemplate() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    if (typeof window !== 'undefined' && localStorage.getItem('isLoggedIn') !== 'true') {
      router.push('/login'); // Redirect to login if not logged in
    } else {
      setIsLoading(false);
    }
  }, [router]);

  const linkedinPostContent = `Just kicked off my **Machine Learning with Python** bootcamp with @Think Again Lab — and I'm already feeling like a mini coder! 

In **Session 1**, we:
• Explored the history of Python (did you know it's named after Monty Python, not the snake?!)
• Set up our coding playground using **Google Colab**
• Wrote our very first Python scripts — from printing messages to creating fun emoji intros
• Played a "Guess the Output" challenge (Python is full of surprises!)
• Learned how Python powers companies like Netflix, NASA, and Instagram!

This is just the beginning of a 6-month journey into the world of **coding, data, and machine learning** — can't wait to build real-world projects and share my progress.

If you're curious about Python or ML, I'd love to connect and share what I learn. Let's grow together! 


#Python #MachineLearning #BootcampJourney #ThinkAgainLab #ThinkAgainAcademy #LearningByDoing #9PMPOST #AI #RobotManOfIndia`;

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(linkedinPostContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleBackToDashboard = () => {
    router.push('/dashboard/session1');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-2xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      {/* Background elements */}
      <div className="fixed inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500 blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-green-500 blur-[120px]"></div>
        <div className="absolute top-2/3 left-1/2 w-72 h-72 rounded-full bg-purple-500 blur-[80px]"></div>
      </div>
      
      {/* Navbar */}
      <DashboardNavbar showBackButton={true} />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8 relative z-10">
        <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-8 mb-6">
          <div className="flex items-center mb-6">
            <div className="p-3 bg-blue-500/20 rounded-full mr-4">
              <FaLinkedin className="text-blue-400 text-2xl" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
                LinkedIn Post Template
              </h1>
              <p className="text-gray-300">Session 1: Getting Started with Python</p>
            </div>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 mb-6">
            <p className="italic text-blue-300 mb-4">
              ✨ "Share your learning journey with your professional network!"
            </p>
            
            <div className="bg-gray-800/50 rounded-lg p-5 whitespace-pre-line mb-4">
              {linkedinPostContent}
            </div>
            
            <button 
              onClick={handleCopyToClipboard} 
              className="group relative bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-bold py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition duration-300 flex items-center"
            >
              {copied ? (
                <>
                  <FaCheck className="mr-2" />
                  Copied to clipboard!
                </>
              ) : (
                <>
                  <FaCopy className="mr-2" />
                  Copy to clipboard
                </>
              )}
            </button>
          </div>

          <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-4 mb-6">
            <h3 className="font-bold text-blue-300 mb-2">📱 Tips for your LinkedIn post:</h3>
            <ul className="list-disc pl-5 space-y-2">
                <li>Feel free to personalize the content to reflect your own experience</li>
                <li>Add a photo from your session if you'd like to make it more engaging</li>
                <li>The best time to post is usually between 8-10am or 6-8pm on weekdays</li>
                <li>Engage with comments to boost visibility</li>
                <li>
                Don't forget to tag the instructors and Think Again Lab!
                <div className="mt-2 pl-2 border-l-2 border-blue-400 text-blue-200 text-sm">
                    <p className="mb-1">Tag these instructors in your post:</p>
                    <p className="mb-1">
                    <a
                        href="https://www.linkedin.com/in/thinkerarijithajra/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-blue-300"
                    >
                        @Aarijit Hajra
                    </a>
                    </p>
                    <p>
                    <a
                        href="https://www.linkedin.com/in/sharan-deep-mukhopadhyay-9b03751bb/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-blue-300"
                    >
                        @Sharandeep Mukhopadhyay
                    </a>
                    </p>
                </div>
                </li>
            </ul>
            </div>


          <div className="flex justify-center mt-8">
            <button 
              onClick={handleBackToDashboard}
              className="group relative bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold py-4 px-8 rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transition duration-300 flex items-center overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></span>
              <FaArrowLeft className="mr-3 text-xl relative z-10" />
              <span className="relative z-10">Back to Dashboard</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}