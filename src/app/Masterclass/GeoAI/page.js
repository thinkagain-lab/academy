"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import RegistrationForm from '@/components/RegistrationForm';
import TimerSection from '@/components/TimerSection';
import Navbar from '@/components/Navbar';
import CertificatePreview from '@/components/CertificatePreview';
import Footer from '@/components/Footer';
import AudienceSection from '@/components/AudienceSection';
import AnimatedButton from '@/components/AnimatedButton';

export default function Home() {
  // State for FAQ toggle
  const [openFAQ, setOpenFAQ] = useState(null);
  
  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };
  
  const faqs = [
    {
      question: "Do I need prior experience with AI or machine learning?",
      answer: "No, this masterclass is designed for participants with varying levels of experience. We'll cover the fundamentals before diving into more advanced applications. Basic knowledge of GIS concepts is helpful but not required."
    },
    {
      question: "Will the session be recorded?",
      answer: "Yes, all registered participants will receive access to the recording after the masterclass. This allows you to revisit the content at your own pace and convenience."
    },
    {
      question: "What software or tools will be demonstrated?",
      answer: "The masterclass will showcase various GeoAI tools including Google Earth Engine, ArcGIS Pro with spatial analyst extensions, and open-source Python libraries like GeoPandas and Rasterio. You don't need to have these tools installed for the masterclass."
    },
    {
      question: "How will I receive my certificate?",
      answer: "Certificates will be emailed to participants within 48 hours after the completion of the masterclass. You must attend the live session or view the full recording to be eligible for certification."
    },
    {
      question: "Is there a refund policy?",
      answer: "Yes, we offer a full refund if requested up to 48 hours before the masterclass begins. After that, no refunds will be issued, but you can transfer your registration to another person or apply it to a future masterclass."
    },
    {
      question: "How do I access the Career Roadmap eBook?",
      answer: "The Career Roadmap eBook will be shared with all participants via email after the masterclass. It contains valuable insights on career paths, skill development, and job opportunities in the GeoAI field."
    }
  ];

  const features = [
    {
      icon: "🎥",
      title: "Live Demo",
      description: "Watch real-time demonstrations of AI tools in action for Earth observation and GIS applications."
    },
    {
      icon: "📚",
      title: "Career Roadmap eBook",
      description: "Receive a comprehensive guide to building a successful career in AI and Earth observation."
    },
    {
      icon: "🧠",
      title: "Concepts & Applications",
      description: "Learn fundamental concepts and practical applications of AI in geospatial analysis."
    },
    {
      icon: "🏆",
      title: "Certificate of Completion",
      description: "Earn a certificate to showcase your new skills and knowledge to employers."
    },
    {
      icon: "💼",
      title: "Internship Shortlisting Priority",
      description: "Get priority consideration for internship opportunities with partner organizations."
    },
    {
    icon: "🎤",
    title: "Live Q&A with Experts",
    description: "Interact directly with Dr. Surya and Aarijt Hajra and get your doubts clarified during the session."
    }, 
  ];

  const topics = [
    {
      title: "AI Fundamentals in GIS",
      description: "Understand how machine learning and AI algorithms are applied to geospatial data."
    },
    {
      title: "Remote Sensing Applications",
      description: "Learn how AI enhances satellite imagery analysis and interpretation."
    },
    {
      title: "Urban Planning Solutions",
      description: "Discover AI-powered approaches to urban development and smart city planning."
    },
    {
      title: "Environmental Monitoring",
      description: "Explore how AI helps track environmental changes and predict natural disasters."
    },
    {
      title: "GeoAI Tools Overview",
      description: "Get familiar with the latest tools and platforms for geospatial AI analytics."
    },
    {
      title: "Career Opportunities",
      description: "Navigate the growing job market for AI and Earth observation specialists."
    }
  ];


  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <Navbar />
        
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-500 to-green-500 p-[2px] rounded-xl mb-12">
        <section className="relative py-12 px-6 text-center rounded-xl bg-gray-900 overflow-hidden">
          {/* Background image first */}
          <Image
            src="https://raw.githubusercontent.com/thinkagain-lab/academy/refs/heads/main/public/background.png"
            alt="Hero Background"
            fill
            className="object-cover z-0"
          />
          
          {/* Gradient overlay with reduced opacity */}
          {/* <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 to-gray-900/70 z-1"></div> */}
          
          {/* Content with higher z-index */}
          <div className="relative z-10">
            <div className="bg-green-500 text-gray-900 px-6 py-3 rounded-xl font-bold text-lg inline-block mb-8">
              May 04, 2025 • 12:30-14:30 • ONLINE
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="text-blue-500">AI</span> in <span className="text-green-500">Earth Observation</span>
            </h1>
            
            <h2 className="text-2xl mb-6">USING GIS & REMOTE-SENSING</h2>
            
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Discover how AI is revolutionizing GIS and Earth Observation through automation, GeoAI tools, and real-world applications in urban planning, environment, and careers.
            </p>
            
            <div className="flex items-center justify-center mb-8">
              <div className="text-2xl line-through text-gray-400 mr-4">₹699</div>
              <div className="text-4xl font-bold text-green-500">₹399</div>
            </div>
            
            <a href="#register">
              <AnimatedButton>
                REGISTER NOW!
              </AnimatedButton>
            
            </a>
          </div>
        </section>
        </div>
        
        {/* Features */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-16">
          {features.map((feature, index) => (
            <div key={index} className="group transition-all h-full">
              <div className="p-[1.5px] rounded-xl h-full bg-gray-700 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-green-500 transition-all duration-300">
                <div className="bg-gray-800 rounded-xl p-8 h-full flex flex-col">
                  <div className="text-4xl mb-6">{feature.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-blue-500">{feature.title}</h3>
                  <p className="text-gray-300 flex-grow">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* CTA after Features */}
        <div className="text-center my-8">
          <p className="text-xl mb-6">Don't miss these exclusive benefits! Early registrants get additional bonuses.</p>
          <a href="#register">
            <AnimatedButton>Claim Your Spot & Bonuses Now</AnimatedButton>
            
          </a>
        </div>


        
        {/* Why Join */}
        <section className="bg-gray-800 rounded-xl py-16 px-6 my-16">
          <h2 className="text-4xl font-bold text-center mb-12 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-gradient-to-r after:from-blue-500 after:to-green-500">
            Why Join This Masterclass?
          </h2>
          
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-green-500 inline-block text-transparent bg-clip-text">Transform Your GIS & Remote Sensing Skills with AI</h3>
              <ul className="space-y-4">
                <li className="pl-8 relative before:content-['✓'] before:absolute before:left-0 before:text-green-500 before:font-bold">
                  Learn cutting-edge AI techniques that are revolutionizing the Earth observation industry
                </li>
                <li className="pl-8 relative before:content-['✓'] before:absolute before:left-0 before:text-green-500 before:font-bold">
                  Gain practical knowledge that can be immediately applied to your projects
                </li>
                <li className="pl-8 relative before:content-['✓'] before:absolute before:left-0 before:text-green-500 before:font-bold">
                  Connect with industry experts with experience at ESRI and ISRO
                </li>
                <li className="pl-8 relative before:content-['✓'] before:absolute before:left-0 before:text-green-500 before:font-bold">
                  Discover career opportunities in the rapidly growing field of GeoAI
                </li>
                <li className="pl-8 relative before:content-['✓'] before:absolute before:left-0 before:text-green-500 before:font-bold">
                  Access exclusive resources including career roadmap and internship opportunities
                </li>
                <li className="pl-8 relative before:content-['✓'] before:absolute before:left-0 before:text-green-500 before:font-bold">
                  Enhance your resume with certified skills in AI for Earth observation
                </li>
                <li className="pl-8 relative before:content-['✓'] before:absolute before:left-0 before:text-green-500 before:font-bold">
                  Network with peers and professionals in the geospatial community
                </li>
              </ul>
            </div>
            
            <div className="flex-1 min-w-[300px]">
              <div className="relative h-80 w-full border-4 border-blue-500 rounded-xl overflow-hidden">
                <Image
                  src="https://raw.githubusercontent.com/thinkagain-lab/academy/refs/heads/main/public/application_1.png"
                  alt="AI Earth Observation Applications"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Banner */}
        <section className="bg-gradient-to-r from-blue-600 to-green-600 rounded-xl py-12 px-6 text-center my-16">
          <h2 className="text-3xl font-bold mb-6">Limited Time Offer: Save ₹300 Today!</h2>
          <p className="text-xl mb-8">Join our exclusive masterclass for just ₹399 instead of ₹699</p>
          <a href="#register" className="bg-green-500 text-gray-900 px-10 py-4 rounded-full text-lg font-bold inline-block transition hover:scale-105 hover:bg-green-400">
            SECURE YOUR SPOT NOW
          </a>
        </section>
        
        {/* Who Should Attend */}
          <AudienceSection />

        {/* Team Section */}
        <section className="my-16 ">
  <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-green-500 inline-block text-transparent bg-clip-text ">
    Mentor and Host
  </h2>

  <div className="flex flex-col md:flex-row gap-8 justify-center flex-wrap">
    {/* Dr. Surya Deb Chakraborty Card */}
<div className="group w-full max-w-xl transition-all flex flex-col">
  <div className="relative p-[2px] rounded-xl group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-green-500 transition-all duration-300">
    <div className="bg-gray-800 rounded-xl overflow-hidden flex flex-col h-[1180px]">
      {/* Image */}
      <div className="relative h-[60%] w-full">
        <Image 
          src="https://raw.githubusercontent.com/thinkagain-lab/academy/refs/heads/main/public/SuryaDeb.jpg" 
          alt="Dr. Surya Deb Chakraborty" 
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6 flex flex-col h-[40%]">
        <div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-green-500 inline-block text-transparent bg-clip-text">DR. SURYA DEB CHAKRABORTY</h3>
          <p className="text-blue-500 font-bold mb-2">Mentor</p>
          <p className="text-gray-300 mb-1">Senior Analyst, University of Dubai</p>
          <p className="text-gray-300 mb-4">(Ex-ESRI, Ex-ISRO)</p>
        </div>

        <div className="flex gap-3 mb-6">
          <a href="https://www.facebook.com/suryadeb.chakraborty" className="bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center hover:bg-green-500 hover:text-gray-900 transition">f</a>
          <a href="https://www.instagram.com/suryadeb" className="bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center hover:bg-green-500 hover:text-gray-900 transition">ig</a>
          <a href="https://www.linkedin.com/in/dr-surya-deb-chakraborty-20013922" className="bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center hover:bg-green-500 hover:text-gray-900 transition">in</a>
        </div>

        <div className="border-t border-gray-700 pt-4 flex-1 overflow-y-auto">
          <p className="mb-3">
            Dr. Chakraborty is a Senior Analyst at the University of Dubai with over 15 years of experience in GIS and Remote Sensing applications. His impressive career includes valuable roles at industry giants ESRI and the Indian Space Research Organisation (ISRO).
          </p>
          <p className="mb-3">
            Specializing in the integration of AI with geospatial technologies, Dr. Chakraborty has led numerous projects in urban planning, environmental monitoring, and disaster management. His research has been published in leading international journals and has contributed significantly to the field of GeoAI.
          </p>
          <p>
            As an educator and industry expert, Dr. Chakraborty has trained hundreds of professionals and students in advanced geospatial techniques and is passionate about sharing practical knowledge that bridges theory and real-world applications.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

{/* Aarijit Hajra Card */}
<div className="group w-full max-w-xl transition-all flex flex-col">
  <div className="relative p-[2px] rounded-xl group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-green-500 transition-all duration-300">
    <div className="bg-gray-800 rounded-xl overflow-hidden flex flex-col h-[1180px]">
      {/* Image */}
      <div className="relative h-[60%] w-full">
        <Image 
          src="https://raw.githubusercontent.com/thinkagain-lab/academy/refs/heads/main/public/AarijitHajra.jpg" 
          alt="Aarijit Hajra" 
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6 flex flex-col h-[40%]">
        <div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-green-500 inline-block text-transparent bg-clip-text">AARIJIT HAJRA</h3>
          <p className="text-blue-500 font-bold mb-2">Host</p>
          <p className="text-gray-300 mb-1">CEO, THINK AGAIN LAB</p>
          <div className="flex items-center gap-1 mb-4">
            <sub className="text-gray-300">aka</sub>
            <h2 className="text-gray-300">ROBOT MAN OF INDIA</h2>
          </div>
        </div>

        <div className="flex gap-3 mb-6">
          <a href="https://www.facebook.com/ThinkerArijitHajra" className="bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center hover:bg-green-500 hover:text-gray-900 transition">f</a>
          <a href="https://www.instagram.com/aarijithajra_official" className="bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center hover:bg-green-500 hover:text-gray-900 transition">ig</a>
          <a href="https://www.linkedin.com/in/thinkerarijithajra" className="bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center hover:bg-green-500 hover:text-gray-900 transition">in</a>
        </div>

        <div className="border-t border-gray-700 pt-4 flex-1 overflow-y-auto">
          <p className="mb-3">
            Meet the robot man of India, Arijit Hajra who created eastern India's first semi humanoid robot - Annapurna which has been featured in Dadagiri Season 9 and 27+ national and regional news medias along with him. Arijit is also known as the Elon Musk of Bengal for the contribution in 25+ technology domains including AI, GIS, Remote Sensing, Web 2.0, Industry 4.0, and Web 3.0 and also filed 4 patents (1 granted) on robotics, electronics and virtual reality for world's smallest robotics lab and world's cheapest VR headset.
          </p>
          <p className="mb-3">
            He has mentored more than 100k students in 12+ countries round the globe and received 50+ awards and recognitions for immense contribution in technology research and development through Think Again Lab.
          </p>
          <p>
            He has also been featured in Josh Talks and got with 15 lakh+ views which eventually prevented 200+ suicides.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

  </div>
  <div className="text-center mt-12">
    <p className="text-xl mb-6">Learn directly from industry veterans with real-world experience at ESRI and ISRO!</p>
    <a href="#register" >
      <AnimatedButton>Don't Miss This Opportunity to Learn from Experts</AnimatedButton>
    </a>
  </div>
</section>

        
        {/* Topics */}
        <section className="my-16">
          <h2 className="text-4xl font-bold text-center mb-12 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-gradient-to-r after:from-blue-500 after:to-green-500">
            What You'll Learn
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic, index) => (
              <div key={index} className="group h-full transition-all">
                <div className="relative p-[2px] rounded-xl h-full group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-green-500 transition-all duration-300">
                  <div className="bg-gray-800 rounded-xl p-6 h-full flex flex-col text-center">
                    <h3 className="text-xl font-bold mb-3 text-blue-500">{topic.title}</h3>
                    <p className="text-gray-300">{topic.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        
        {/* CTA Banner 2 */}
        <section className="bg-gradient-to-r from-blue-600 to-green-600 rounded-xl py-12 px-6 text-center my-16">
          <h2 className="text-3xl font-bold mb-6">Don't Miss This Opportunity!</h2>
          <p className="text-xl mb-8">Learn from industry experts and transform your geospatial skills with AI</p>
          <a href="#register" className="bg-green-500 text-gray-900 px-10 py-4 rounded-full text-lg font-bold inline-block transition hover:scale-105 hover:bg-green-400">
            RESERVE YOUR SEAT TODAY
          </a>
        </section>

        {/* <CertificatePreview /> */}
        
        {/* FAQ */}
        <section className="my-16">
          <h2 className="text-4xl font-bold text-center mb-12 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-gradient-to-r after:from-blue-500 after:to-green-500">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-700 rounded-xl overflow-hidden">
                <div 
                  className="bg-gray-800 p-6 font-bold cursor-pointer flex justify-between items-center text-blue-500"
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  <span className="text-green-500 text-2xl">{openFAQ === index ? '−' : '+'}</span>
                </div>
                
                {openFAQ === index && (
                  <div className="bg-gray-700 p-6 border-t border-gray-600">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
        
        
        <TimerSection />
        
      
        
        {/* Registration Form */}
        <section id="register" className="my-16">
         <RegistrationForm />   
        </section>



        {/* Company */}
        <section className="bg-gray-800 rounded-xl py-12 px-6 my-16 text-center">
          <div className="mb-6">
            <Image 
              src="https://raw.githubusercontent.com/thinkagain-lab/academy/827d563df1ae8a49ff856defe56e1e0fb756e77d/public/TalLogoRound.png" 
              alt="Think Again Lab Logo" 
              width={150} 
              height={150}
              className="mx-auto"
            />
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text inline-block">About Think Again Lab</h2>
          
          <div className="max-w-3xl mx-auto">
            <p className="mb-4">
              Think Again Lab is a pioneering educational technology company focused on bridging the gap between theoretical knowledge and practical industry applications. Founded with the mission to revolutionize learning through innovation, we specialize in AI, robotics, and advanced technologies.
            </p>
            <p className="mb-6">
              Our expert-led masterclasses and workshops have helped thousands of students and professionals upskill in emerging technologies and advance their careers. Led by Aarijit Hajra, known as the "Robot Man of India," Think Again Lab continues to push boundaries in technological education.
            </p>
            
            <div className="flex justify-center gap-4">
              <a href="https://www.facebook.com/thinkagainlab" className="bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center hover:bg-green-500 hover:text-gray-900 transition">f</a>
              <a href="https://www.instagram.com/think_again_lab_official/" className="bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center hover:bg-green-500 hover:text-gray-900 transition">ig</a>
              <a href="https://www.linkedin.com/company/thinkagainlab" className="bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center hover:bg-green-500 hover:text-gray-900 transition">in</a>
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <Footer/>
      </div>
    </div>
  );
}