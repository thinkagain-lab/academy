"use client";

import Image from 'next/image';
import Link from 'next/link';
import AnimatedButton from '@/components/AnimatedButton';

export default function UpcomingCourses() {
  // Course data extracted from the masterclass page
  const upcomingCourse = {
    title: "AI in Earth Observation",
    subtitle: "USING GIS & REMOTE-SENSING",
    date: "May 04, 2025",
    time: "12:30-14:30",
    format: "ONLINE",
    image: "https://raw.githubusercontent.com/thinkagain-lab/academy/refs/heads/main/public/background.png",
    description: "Discover how AI is revolutionizing GIS and Earth Observation through automation, GeoAI tools, and real-world applications.",
    regularPrice: "₹699",
    discountedPrice: "₹399",
    mentorName: "Dr. Surya Deb Chakraborty",
    mentorRole: "Senior Analyst, University of Dubai (Ex-ESRI, Ex-ISRO)",
    hostName: "Aarijit Hajra",
    hostRole: "CEO, THINK AGAIN LAB"
  };

  return (
    <section className="my-16">
      <h2 className="text-4xl font-bold text-center mb-12 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-gradient-to-r after:from-blue-500 after:to-green-500">
        Upcoming Masterclasses
      </h2>
      
      <div className="bg-gradient-to-r from-blue-500 to-green-500 p-[2px] rounded-xl">
        <div className="bg-gray-800 rounded-xl overflow-hidden flex flex-col md:flex-row">
          {/* Course Image */}
          <div className="relative h-64 md:h-auto md:w-2/5">
            <Image
              src={upcomingCourse.image}
              alt={upcomingCourse.title}
              fill
              className="object-cover"
            />
            <div className="absolute top-4 left-4 bg-green-500 text-gray-900 px-4 py-2 rounded-lg font-bold">
              {upcomingCourse.date}
            </div>
          </div>
          
          {/* Course Details */}
          <div className="p-6 md:w-3/5 flex flex-col justify-between">
            <div>
              <div className="flex items-center mb-4">
                <div className="text-blue-500 font-bold mr-4">
                  {upcomingCourse.time} • {upcomingCourse.format}
                </div>
                <div className="flex items-center">
                  <span className="text-lg line-through text-gray-400 mr-2">{upcomingCourse.regularPrice}</span>
                  <span className="text-2xl font-bold text-green-500">{upcomingCourse.discountedPrice}</span>
                </div>
              </div>
              
              <h3 className="text-3xl font-bold mb-2">
                <span className="text-blue-500">{upcomingCourse.title.split(" ")[0]}</span>{" "}
                {upcomingCourse.title.split(" ").slice(1).join(" ")}
              </h3>
              
              <h4 className="text-xl mb-4 text-gray-300">{upcomingCourse.subtitle}</h4>
              
              <p className="text-gray-300 mb-6">
                {upcomingCourse.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mr-3">
                    <span className="font-bold">SD</span>
                  </div>
                  <div>
                    <p className="font-bold text-blue-500">{upcomingCourse.mentorName}</p>
                    <p className="text-sm text-gray-400">Mentor</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center mr-3">
                    <span className="font-bold text-gray-900">AH</span>
                  </div>
                  <div>
                    <p className="font-bold text-green-500">{upcomingCourse.hostName}</p>
                    <p className="text-sm text-gray-400">Host</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/Masterclass/GeoAI" className="flex-1 min-w-[120px]">
                <button className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white py-3 px-6 rounded-lg font-bold transition-all">
                  Learn More
                </button>
              </Link>
              
              <Link href="/Masterclass/GeoAI#register" className="flex-1 min-w-[120px]">
                <AnimatedButton className="w-full">
                  Register Now
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-8">
        <Link href="/all-courses">
          <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-6 rounded-lg font-bold transition-all">
            View All Courses
          </button>
        </Link>
      </div>
    </section>
  );
}