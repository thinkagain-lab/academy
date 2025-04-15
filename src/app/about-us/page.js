'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState('mission');
  
  const tabs = [
    { id: 'mission', label: 'Our Mission' },
    { id: 'vision', label: 'Our Vision' },
    // { id: 'team', label: 'Our Team' },
    { id: 'approach', label: 'Our Approach' },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header - Matching Contact Page */}
        <Navbar />

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-500 to-green-500 p-[2px] rounded-xl mb-12">
          <div className="relative py-12 px-6 text-center rounded-xl bg-gray-900 overflow-hidden">
            <div className="relative z-10">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                <span className="text-blue-500">About</span> <span className="text-green-500">Us</span>
              </h1>
              <p className="text-xl max-w-3xl mx-auto mb-6">
                Empowering students with cutting-edge technology skills through innovative learning experiences
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="my-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <div className="group transition-all h-full">
                <div className="p-[1.5px] rounded-xl h-full bg-gray-700 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-green-500 transition-all duration-300">
                  <div className="bg-gray-800 rounded-xl p-6 h-full">
                    <nav className="space-y-1">
                      {tabs.map((tab) => (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id)}
                          className={`w-full text-left px-4 py-3 rounded-md transition-colors ${
                            activeTab === tab.id
                              ? 'bg-gradient-to-r from-blue-500/20 to-green-500/20 font-medium text-blue-500'
                              : 'text-gray-300 hover:bg-gray-700'
                          }`}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </nav>
                    
                    <div className="mt-8 p-4 bg-gray-700 rounded-md border border-gray-600">
                      <h3 className="font-medium text-green-500 mb-2">Get in Touch</h3>
                      <p className="text-sm text-gray-300 mb-4">
                        Have questions about our programs or want to learn more?
                      </p>
                      <Link 
                        href="/contact-us" 
                        className="block w-full bg-gradient-to-r from-blue-500 to-green-500 text-white text-center py-2 px-4 rounded-md transition hover:scale-105"
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="lg:col-span-4">
              <div className="group transition-all h-full">
                <div className="p-[1.5px] rounded-xl h-full bg-gray-700 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-green-500 transition-all duration-300">
                  <div className="bg-gray-800 rounded-xl p-8 h-full">
                    {activeTab === 'mission' && (
                      <div>
                        <h2 className="text-3xl font-bold mb-6 text-blue-500">Our Mission</h2>
                        <div className="prose prose-invert max-w-none">
                          <p className="text-lg mb-6 text-gray-300">
                            At ThinkAgain Lab Academy, we're on a mission to bridge the gap between traditional education and the rapidly evolving technology landscape. We believe that every student deserves access to cutting-edge technical knowledge and hands-on experience with emerging technologies.
                          </p>
                          <p className="mb-6 text-gray-300">
                            Our academy is built on the foundation of providing accessible, high-quality technical education that prepares students for the jobs of tomorrow. We constantly update our curriculum to include the latest technological trends, ensuring our students stay ahead of the curve.
                          </p>
                          <div className="p-6 my-8 border-l-4 bg-gray-700/30 border-green-500">
                            <p className="font-medium text-gray-200">
                              "We don't just teach technology—we inspire students to think differently about how technology can shape the future."
                            </p>
                          </div>
                          <h3 className="text-xl font-bold mt-8 mb-4 text-green-500">What Sets Us Apart</h3>
                          <ul className="space-y-3 text-gray-300">
                            <li className="flex items-start">
                              <span className="text-blue-500 font-bold mr-2">•</span>
                              <span>Curriculum designed around emerging technologies and industry demands</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-blue-500 font-bold mr-2">•</span>
                              <span>Hands-on learning experiences with practical applications</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-blue-500 font-bold mr-2">•</span>
                              <span>Expert instructors with real-world industry experience</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-blue-500 font-bold mr-2">•</span>
                              <span>Flexible learning formats: workshops, masterclasses, and immersive courses</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}

                    {activeTab === 'vision' && (
                      <div>
                        <h2 className="text-3xl font-bold mb-6 text-blue-500">Our Vision</h2>
                        <div className="prose prose-invert max-w-none">
                          <p className="text-lg mb-6 text-gray-300">
                            We envision a future where technology education is dynamic, accessible, and aligned with real-world innovations. ThinkAgain Lab Academy aims to be at the forefront of this educational revolution.
                          </p>
                          
                          <div className="grid md:grid-cols-2 gap-8 my-8">
                            <div className="p-6 rounded-lg bg-gray-700/30 border border-gray-600">
                              <h3 className="text-xl font-bold mb-3 text-blue-500">Looking Ahead</h3>
                              <p className="text-gray-300">
                                By 2030, we aim to have empowered over 100,000 students with future-ready technical skills, creating a global community of innovative thinkers and problem solvers.
                              </p>
                            </div>
                            <div className="p-6 rounded-lg bg-gray-700/30 border border-gray-600">
                              <h3 className="text-xl font-bold mb-3 text-green-500">Building Bridges</h3>
                              <p className="text-gray-300">
                                We're working to create meaningful partnerships between education and industry, ensuring our students gain skills that directly translate to career opportunities.
                              </p>
                            </div>
                          </div>
                          
                          <h3 className="text-xl font-bold mt-8 mb-4 text-blue-500">Key Focus Areas</h3>
                          <p className="mb-4 text-gray-300">Our vision is guided by our commitment to excellence in these key areas:</p>
                          
                          <div className="space-y-6 mt-6">
                            <div className="flex items-start">
                              <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-blue-500/20">
                                <span className="text-blue-500">01</span>
                              </div>
                              <div className="ml-4">
                                <h4 className="text-lg font-medium text-green-500">Innovation in Learning</h4>
                                <p className="mt-1 text-gray-300">Developing new approaches to technical education that make complex concepts accessible and engaging</p>
                              </div>
                            </div>
                            <div className="flex items-start">
                              <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-green-500/20">
                                <span className="text-green-500">02</span>
                              </div>
                              <div className="ml-4">
                                <h4 className="text-lg font-medium text-blue-500">Technology Access</h4>
                                <p className="mt-1 text-gray-300">Making cutting-edge technology learning accessible to students of all backgrounds and skill levels</p>
                              </div>
                            </div>
                            <div className="flex items-start">
                              <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-blue-500/20">
                                <span className="text-blue-500">03</span>
                              </div>
                              <div className="ml-4">
                                <h4 className="text-lg font-medium text-green-500">Community Building</h4>
                                <p className="mt-1 text-gray-300">Creating a supportive ecosystem where students can collaborate, learn from each other, and build networks</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* {activeTab === 'team' && (
                      <div>
                        <h2 className="text-3xl font-bold mb-6 text-blue-500">Our Team</h2>
                        <p className="text-lg mb-10 text-gray-300">
                          ThinkAgain Lab Academy is powered by a diverse team of technology experts, educators, and innovators who are passionate about sharing their knowledge and experience.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                          {[1, 2, 3, 4, 5, 6].map((item) => (
                            <div key={item} className="bg-gray-700/30 rounded-lg overflow-hidden">
                              <div className="h-48 bg-gray-700 relative">
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                  Team Member Photo
                                </div>
                              </div>
                              <div className="p-4 border-t-2 border-green-500">
                                <h3 className="font-bold text-lg text-white">Team Member Name</h3>
                                <p className="text-sm font-medium text-blue-500">Position / Expertise</p>
                                <p className="mt-2 text-gray-300 text-sm">Brief description of team member's background, expertise, and passion for technology education.</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )} */}

                    {activeTab === 'approach' && (
                      <div>
                        <h2 className="text-3xl font-bold mb-6 text-blue-500">Our Approach</h2>
                        <div className="prose prose-invert max-w-none">
                          <p className="text-lg mb-6 text-gray-300">
                            At ThinkAgain Lab Academy, we've developed a unique educational approach that combines theoretical knowledge with practical application, all within a supportive and innovative learning environment.
                          </p>
                          
                          <div className="my-10 border border-gray-600 rounded-lg overflow-hidden">
                            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-600">
                              <div className="p-6 text-center">
                                <div className="text-3xl font-bold mb-2 text-blue-500">Learn</div>
                                <p className="text-gray-300">Gain technical knowledge from industry experts</p>
                              </div>
                              <div className="p-6 text-center">
                                <div className="text-3xl font-bold mb-2 text-green-500">Build</div>
                                <p className="text-gray-300">Apply your knowledge through hands-on projects</p>
                              </div>
                              <div className="p-6 text-center">
                                <div className="text-3xl font-bold mb-2 text-blue-500">Innovate</div>
                                <p className="text-gray-300">Push boundaries and create new solutions</p>
                              </div>
                            </div>
                          </div>
                          
                          <h3 className="text-xl font-bold mt-8 mb-4 text-green-500">Our Educational Offerings</h3>
                          
                          <div className="space-y-6">
                            <div className="p-6 bg-gray-700/30 rounded-lg border-l-4 border-blue-500">
                              <h4 className="font-bold text-lg mb-2 text-blue-500">Intensive Workshops</h4>
                              <p className="text-gray-300">Focused 1-2 day sessions that introduce specific technologies or concepts, perfect for quickly gaining new skills.</p>
                            </div>
                            
                            <div className="p-6 bg-gray-700/30 rounded-lg border-l-4 border-green-500">
                              <h4 className="font-bold text-lg mb-2 text-green-500">Expert Masterclasses</h4>
                              <p className="text-gray-300">Advanced sessions led by industry leaders, focusing on cutting-edge technologies and advanced applications.</p>
                            </div>
                            
                            <div className="p-6 bg-gray-700/30 rounded-lg border-l-4 border-blue-500">
                              <h4 className="font-bold text-lg mb-2 text-blue-500">Certification Programs</h4>
                              <p className="text-gray-300">Comprehensive courses that provide in-depth knowledge and skills, culminating in recognized certifications.</p>
                            </div>
                            
                            <div className="p-6 bg-gray-700/30 rounded-lg border-l-4 border-green-500">
                              <h4 className="font-bold text-lg mb-2 text-green-500">Innovation Labs</h4>
                              <p className="text-gray-300">Collaborative spaces where students work on real-world projects under the guidance of industry mentors.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="bg-gradient-to-r from-blue-500 to-green-500 p-[2px] rounded-xl my-16">
          <div className="bg-gray-800 rounded-xl py-12 px-6">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Upgrade Your Tech Skills?</h2>
              <p className="text-xl mb-8 text-gray-300">Join ThinkAgain Lab Academy and be part of the next generation of tech innovators.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  href="https://rzp.io/rzp/ai_in_earth_observation" 
                  className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-3 px-6 rounded-full font-medium hover:scale-105 transition-transform"
                >
                  Register Now
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Footer - Matching Contact Page */}
        <Footer />
      </div>
    </div>
  );
}