"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedButton from '@/components/AnimatedButton';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiChevronDown } from 'react-icons/hi';
import { FaGraduationCap, FaLaptopCode, FaTrophy, FaUserTie, FaTools, FaExchangeAlt } from 'react-icons/fa';
import { BsStars } from 'react-icons/bs';
import { CoursesSection } from '@/components/CoursesSection';
import UpcomingCourses from '@/components/UpcomingCourses';

export default function Home() {
  // State for FAQ toggle
  const [openFAQ, setOpenFAQ] = useState(null);
  
  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };
  
  const faqs = [
    {
      question: "How does the Think Coins reward system work?",
      answer: "Think Coins are earned through course completion, project excellence, helping peers, and participating in hackathons. These coins can be redeemed for free courses, merchandise, internship opportunities, and exclusive mentorship sessions."
    },
    {
      question: "Do I need prior technical experience to join TAA programs?",
      answer: "Most of our programs cater to different experience levels. While basic computer literacy is helpful, we have beginner-friendly courses that start from scratch, as well as advanced programs for experienced learners."
    },
    {
      question: "How do the real-world projects work?",
      answer: "Students work on actual client projects from our industry partners. You'll receive guidance from mentors but will be responsible for deliverables, timelines, and client communications—just like in a real workplace environment."
    },
    {
      question: "Are the certificates recognized by the industry?",
      answer: "Yes, our certificates are recognized by our industry partners and include an assessment score that reflects your skill level. Our partner companies prioritize candidates with our certification during their hiring processes."
    },
    {
      question: "Can I join TAA programs alongside my regular college/university education?",
      answer: "Absolutely! Our programs are designed to complement your formal education. Many students balance TAA courses with their regular studies and find that our practical approach enhances their understanding of theoretical concepts."
    },
    {
      question: "How will I be assessed during the program?",
      answer: "Our six-phase assessment system evaluates course understanding, self-learning initiative, presentation skills, project work, documentation, and knowledge sharing. This holistic approach ensures you develop both technical and professional skills."
    }
  ];

  const features = [
    {
      icon: <FaLaptopCode className="text-4xl text-blue-500" />,
      title: "Real Projects for Real Clients",
      description: "Work on actual industry projects while learning, creating portfolio-worthy experiences from day one."
    },
    {
      icon: <BsStars className="text-4xl text-green-500" />,
      title: "Six-Phase Assessment System",
      description: "Comprehensive evaluation covering theory, practical implementation, communication, and knowledge sharing."
    },
    {
      icon: <FaTrophy className="text-4xl text-yellow-500" />,
      title: "Gamified Learning with Think Coins",
      description: "Earn rewards for achievements, redeemable for courses, merch, internships, and exclusive mentorship."
    },
    {
      icon: <FaUserTie className="text-4xl text-purple-500" />,
      title: "Expert Mentors from Industry & Academia",
      description: "Learn from professionals with real-world experience and academic expertise for balanced guidance."
    },
    {
      icon: <FaTools className="text-4xl text-red-500" />,
      title: "Hands-on Masterclasses & Internships",
      description: "Intensive practical sessions and work experiences designed to build marketable skills quickly."
    },
    {
      icon: <FaExchangeAlt className="text-4xl text-cyan-500" />,
      title: "Bridge Between Academia and Industry",
      description: "Close the gap between theoretical knowledge and practical application with our industry-aligned curriculum."
    }
  ];

  const offerings = [
    {
      icon: <FaUserTie className="text-3xl" />,
      title: "Masterclasses",
      description: "Intensive topic-focused sessions led by industry experts, exploring cutting-edge technologies and methodologies."
    },
    {
      icon: <FaTools className="text-3xl" />,
      title: "Certified Hands-On Training",
      description: "Practical workshops where you build real tech projects from Day 1, earning industry-recognized certification."
    },
    {
      icon: <FaGraduationCap className="text-3xl" />,
      title: "Advanced Training",
      description: "Deep dives into specialized technologies with comprehensive capstone projects and one-on-one mentorship."
    },
    {
      icon: <FaLaptopCode className="text-3xl" />,
      title: "Talk Shows & Tech Shows",
      description: "Interactive sessions where you can engage with experts, showcase your projects, and network with peers."
    },
    {
      icon: <BsStars className="text-3xl" />,
      title: "Internships",
      description: "Online & offline real-world work experiences with our industry partners, often leading to placement opportunities."
    },
    {
      icon: <FaTrophy className="text-3xl" />,
      title: "Hackathons",
      description: "Competitive events where you solve real problems, showcase innovation, and win exciting prizes and recognition."
    }
  ];

  const assessmentPhases = [
    {
      icon: <FaGraduationCap className="text-blue-500" />,
      title: "Learning Assessment",
      description: "Evaluate course understanding through quizzes, assignments, and knowledge checks."
    },
    {
      icon: <FaLaptopCode className="text-green-500" />,
      title: "Self Learning",
      description: "Reward initiative and exploration through independent research and skill development."
    },
    {
      icon: <FaUserTie className="text-purple-500" />,
      title: "Presentation",
      description: "Build confidence through demos, explanations, and technical communication."
    },
    {
      icon: <FaTools className="text-red-500" />,
      title: "Project Assessment",
      description: "Build real-life client projects with practical application of learned concepts."
    },
    {
      icon: <BsStars className="text-yellow-500" />,
      title: "Project Report",
      description: "Document your approach, challenges, solutions, and learnings in a professional format."
    },
    {
      icon: <FaExchangeAlt className="text-cyan-500" />,
      title: "Knowledge Transfer",
      description: "Share what you learn by teaching others, reinforcing your own understanding."
    }
  ];

  const testimonials = [
    {
      quote: "TAA made me build my first real-world product. The mentorship is next-level.",
      name: "Arjun",
      title: "B.Tech CSE Student"
    },
    {
      quote: "Their reward system kept me hooked. I even earned free training with Think Coins!",
      name: "Priya",
      title: "M.Sc. Data Science"
    },
    {
      quote: "I've been through several online courses, but nothing compares to TAA's hands-on approach and real client projects.",
      name: "Rajesh",
      title: "Recent IT Graduate"
    },
    {
      quote: "The six-phase assessment helped me identify and improve my weak areas. I'm now confident in my skills.",
      name: "Sneha",
      title: "BCA Student"
    }
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const pulseAnimation = {
    initial: { scale: 1 },
    animate: { 
      scale: [1, 1.05, 1],
      transition: { 
        duration: 2, 
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen overflow-hidden relative">
      {/* Simplified Background - Just a static gradient */}
      <div className="fixed inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500 blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-green-500 blur-[120px]"></div>
        <div className="absolute top-2/3 left-1/2 w-72 h-72 rounded-full bg-purple-500 blur-[80px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <Navbar />
        
        {/* Hero Section - Simplified */}
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="relative py-20 md:py-28 px-6 text-center rounded-xl my-12 bg-gradient-to-b from-blue-900/30 to-green-900/30"
        >          
          <div className="relative z-10">
            <div className="bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">
              <h1 className="text-5xl md:text-7xl font-extrabold mb-2">
                A Gamified Approach to Tech Education
              </h1>
            </div>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl max-w-3xl mx-auto mb-8 text-gray-300"
            >
              Think Again Academy (TAA) empowers students through interactive, reward-based learning to bridge the gap between <span className="font-bold text-blue-400">academia</span> and <span className="font-bold text-green-400">industry</span>.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
            >
              <AnimatedButton>
                <span className="flex items-center">
                  Get Started <BsStars className="ml-2" />
                </span>
              </AnimatedButton>
              <Link href="/programs" className="bg-transparent backdrop-blur-sm border-2 border-blue-500 text-blue-400 px-8 py-3 rounded-full text-lg font-bold hover:bg-blue-500/20 transition duration-300">
                Explore Programs
              </Link>
            </motion.div>
          </div>
          
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
          >
            <HiChevronDown className="w-8 h-8 text-white/70" />
          </motion.div>
        </motion.section>
        
        {/* About Us Section */}
        <section className="my-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold text-center mb-12 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-gradient-to-r after:from-blue-500 after:to-green-500">
              What is Think Again Academy (TAA)?
            </h2>
          </motion.div>
          
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <motion.div 
              className="flex-1 min-w-[300px]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              <div className="relative h-80 w-full overflow-hidden rounded-xl perspective-1000">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-green-900 flex items-center justify-center">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <span className="text-6xl relative z-10">🎮</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex-1"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              <p className="text-xl mb-6">
                Think Again Academy is an initiative by Think Again Lab focused on transforming traditional tech education into an exciting, <span className="font-bold text-blue-400">gamified</span> journey. Through workshops, internships, hackathons, tech shows, and more, we foster <span className="font-bold text-green-400">real-world skills</span> by involving students in client, research, startup, and government projects.
              </p>
              <p className="text-xl">
                We are on a mission to build <span className="font-bold text-yellow-400">India's first reward-based LMS</span>—powered by <span className="font-bold text-yellow-400">Think Coins</span>, earned through achievements and redeemable for courses, products, and more.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Why Choose TAA */}
        <section className="my-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
            className="col-span-full mb-12"
          >
            <h2 className="text-4xl font-bold text-center relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-gradient-to-r after:from-blue-500 after:to-green-500">
              Why Choose TAA?
            </h2>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={fadeInUp} className="group transition-all h-full">
                <div className="p-[2px] rounded-xl h-full bg-gradient-to-r from-gray-800 to-gray-700 group-hover:from-blue-500 group-hover:to-green-500 transition-all duration-500">
                  <div className="bg-gray-800 backdrop-blur-md rounded-xl p-8 h-full flex flex-col relative overflow-hidden">
                    <div className="mb-6 relative z-10">{feature.icon}</div>
                    <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 relative z-10">{feature.title}</h3>
                    <p className="text-gray-300 flex-grow relative z-10">{feature.description}</p>
                    
                    {/* Hover effect */}
                    <div className="absolute -bottom-1 -right-1 w-16 h-16 bg-gradient-to-tl from-blue-500/20 to-green-500/20 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* CTA after Features */}
        <motion.div 
          className="text-center my-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
        >
          <p className="text-xl mb-6">Join the revolution in tech education today!</p>
          <AnimatedButton>
            Apply Now
          </AnimatedButton>
        </motion.div>
        
        {/* Assessment System */}
        <section className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl py-16 px-6 my-20 relative overflow-hidden">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="relative z-10"
          >
            <h2 className="text-4xl font-bold text-center mb-12 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-gradient-to-r after:from-blue-500 after:to-green-500">
              Our 6-Phase Assessment System
            </h2>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
          >
            {assessmentPhases.map((phase, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-xl p-6 flex flex-col relative overflow-hidden group hover:border-gray-700 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{phase.icon}</div>
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">{phase.title}</h3>
                </div>
                <p className="text-gray-300 relative z-10">{phase.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>
        
        {/* TAA Offerings */}
        <section className="my-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold text-center mb-12 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-gradient-to-r after:from-blue-500 after:to-green-500">
              TAA Offerings
            </h2>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {offerings.map((offering, index) => (
              <motion.div key={index} variants={fadeInUp} className="group transition-all h-full">
                <div className="p-[2px] rounded-xl h-full bg-gradient-to-r from-gray-800 to-gray-700 group-hover:from-blue-500 group-hover:to-green-500 transition-all duration-500">
                  <div className="bg-gray-800 backdrop-blur-md rounded-xl p-8 h-full flex flex-col">
                    <div className="mb-6 text-blue-500 group-hover:scale-110 transition-transform duration-300">{offering.icon}</div>
                    <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">{offering.title}</h3>
                    <p className="text-gray-300">{offering.description}</p>
                    
                    {/* Corner decoration */}
                    <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-blue-500/30 group-hover:border-green-500 transition-colors duration-300"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <CoursesSection />
        
        <UpcomingCourses/>
        
        {/* Upcoming LMS - Simplified */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="rounded-xl py-16 px-6 text-center my-20 relative overflow-hidden bg-gradient-to-r from-blue-900 to-green-900"
        >
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6">Upcoming: Gamified LMS</h2>
            <p className="text-xl mb-6">
              <span className="inline-block mx-1">🎮</span> 
              Launching soon: A full <span className="font-bold">Learning Management System</span> (LMS) with 
              <span className="inline-block mx-1">🏅</span> Badges, 
              <span className="inline-block mx-1">🪙</span> Think Coins, 
              <span className="inline-block mx-1">📈</span> Progress Tracking, and a 
              <span className="inline-block mx-1">🔗</span> Student Timeline.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <a href="#" className="bg-white text-gray-900 px-8 py-3 rounded-full text-lg font-bold transition hover:scale-105 hover:bg-opacity-90 backdrop-blur-sm">
                Get Early Access
              </a>
              <a href="#" className="border-2 border-white bg-transparent backdrop-blur-sm text-white px-8 py-3 rounded-full text-lg font-bold hover:bg-white/10 transition duration-300">
                Notify Me on Launch
              </a>
            </div>
          </div>
        </motion.section>
        
        {/* Testimonials */}
        <section className="my-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold text-center mb-12 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-gradient-to-r after:from-blue-500 after:to-green-500">
              Student Success Stories
            </h2>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 relative overflow-hidden group hover:border-blue-500/30 hover:border transition-all duration-300"
              >
                {/* Animated quote background */}
                <div className="text-8xl text-blue-500/10 absolute -top-4 -left-4 group-hover:scale-125 transition-transform duration-500">"</div>
                <div className="text-8xl text-green-500/10 absolute -bottom-4 -right-4 rotate-180 group-hover:scale-125 transition-transform duration-500">"</div>
                
                {/* Animated gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <p className="text-lg mb-6 relative z-10">"{testimonial.quote}"</p>
                <div className="font-bold relative z-10">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">– {testimonial.name}</span>, <span className="text-gray-400">{testimonial.title}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
        
        {/* FAQ */}
        <section className="my-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold text-center mb-12 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-gradient-to-r after:from-blue-500 after:to-green-500">
              Frequently Asked Questions
            </h2>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="space-y-6"
          >
            {faqs.map((faq, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                className="border border-gray-700 rounded-xl overflow-hidden backdrop-blur-sm group hover:border-blue-500/50 transition-colors duration-300"
              >
                <div 
                  className="bg-gray-800/80 p-6 font-bold cursor-pointer flex justify-between items-center text-blue-400 group-hover:text-blue-300 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  <motion.span 
                    animate={{ rotate: openFAQ === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-green-500 text-2xl"
                  >
                    {openFAQ === index ? '−' : '+'}
                  </motion.span>
                </div>
                
                {openFAQ === index && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gray-800/40 p-6 border-t border-gray-700"
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </section>
        
        {/* Join the Revolution */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="rounded-xl py-16 px-6 text-center my-20 relative overflow-hidden bg-gradient-to-br from-blue-700 to-green-700"
        >
          {/* Content */}
          <div className="relative z-10">
            <motion.div
              animate={{ 
                y: [0, -5, 0],
                transition: { duration: 2, repeat: Infinity, repeatType: "reverse" }
              }}
            >
              <h2 className="text-4xl font-bold mb-6">🚀 Ready to Learn Differently?</h2>
            </motion.div>
            <p className="text-xl mb-8">
              Think Again Academy isn't just about learning—it's about <span className="font-bold text-yellow-300">earning</span>, <span className="font-bold text-green-300">achieving</span>, and <span className="font-bold text-blue-300">transforming</span> your future through real-world skills and rewards.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#" className="relative overflow-hidden bg-white text-gray-900 px-10 py-4 rounded-full text-lg font-bold inline-block transition hover:scale-105 group">
                <span className="relative z-10">JOIN NOW</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-green-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a href="#" className="relative overflow-hidden border-2 border-white backdrop-blur-sm px-10 py-4 rounded-full text-lg font-bold group transition duration-300">
                <span className="relative z-10">BROWSE PROGRAMS</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>
        </motion.section>
        
        
        {/* Footer */}
        <Footer/>
      </div>
      
      {/* Add global styles for animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes pulse {
          0% {
            opacity: 0.1;
            transform: scale(1);
          }
          100% {
            opacity: 0.3;
            transform: scale(1.1);
          }
        }
        
        @keyframes animate-gradient-x {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: animate-gradient-x 15s ease infinite;
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
}