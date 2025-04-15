// CertificatePreview.jsx
"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function CertificatePreview() {
  const [isZoomed, setIsZoomed] = useState(false);
  
  // Sample participant name
  const participantName = "Sample Participant";
  
  // Current date for certificate
  const today = new Date();
  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  const certificateDate = today.toLocaleDateString('en-US', options);
  
  return (
    <section className="py-16 px-6 my-16 bg-gray-800 rounded-xl">
      <h2 className="text-4xl font-bold text-center mb-8 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-gradient-to-r after:from-blue-500 after:to-green-500">
        Earn Your Certificate
      </h2>
      
      <p className="text-center text-xl mb-12 max-w-3xl mx-auto">
        Upon completing this masterclass, you'll receive a professional certificate like the one below. 
        Add it to your LinkedIn profile or resume to showcase your specialized knowledge in AI for Earth Observation.
      </p>
      
      <div className="flex flex-col lg:flex-row items-center gap-12 mb-12">
        {/* Certificate Preview */}
        <div className="flex-1 max-w-2xl mx-auto">
          <div 
            className={`relative cursor-pointer transition-all duration-300 ${isZoomed ? 'scale-110 z-20' : 'scale-100'}`}
            onClick={() => setIsZoomed(!isZoomed)}
          >
            <div className="p-[2px] rounded-xl bg-gradient-to-r from-blue-500 to-green-500">
              <div className="bg-white rounded-xl p-8">
                {/* Certificate Header */}
                <div className="flex justify-between items-center mb-6">
                  <div className="w-20 h-20 relative">
                    <Image 
                      src="https://raw.githubusercontent.com/thinkagain-lab/academy/827d563df1ae8a49ff856defe56e1e0fb756e77d/public/TalLogoRound.png" 
                      alt="Think Again Lab Logo" 
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="text-right">
                    <h3 className="text-xl font-bold text-gray-800">THINK AGAIN LAB</h3>
                    <p className="text-sm text-gray-600">Certificate of Completion</p>
                  </div>
                </div>
                
                {/* Certificate Body */}
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-serif mb-2 text-gray-900">Certificate of Achievement</h2>
                  <p className="text-gray-600 mb-6">This certifies that</p>
                  <p className="text-2xl font-bold text-blue-700 font-serif mb-6">{participantName}</p>
                  <p className="text-gray-600 mb-6">has successfully completed the masterclass on</p>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">AI in Earth Observation</h3>
                  <p className="text-md text-gray-700 mb-6">Using GIS & Remote-Sensing</p>
                  <p className="text-gray-600">Issued on {certificateDate}</p>
                </div>
                
                {/* Certificate Footer */}
                <div className="flex justify-between items-end mt-12">
                  <div className="text-center">
                    <div className="border-t-2 border-gray-400 pt-2 w-40">
                      <p className="text-gray-700 font-bold">Dr. Surya Deb Chakraborty</p>
                      <p className="text-sm text-gray-600">Instructor</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="border-t-2 border-gray-400 pt-2 w-40">
                      <p className="text-gray-700 font-bold">Aarijit Hajra</p>
                      <p className="text-sm text-gray-600">CEO, Think Again Lab</p>
                    </div>
                  </div>
                </div>
                
                {/* Certificate ID */}
                <div className="mt-6 text-center">
                  <p className="text-xs text-gray-500">Certificate ID: TAL-AIEO-2025-DEMO</p>
                </div>
              </div>
            </div>
            
            {isZoomed && (
              <div className="absolute top-2 right-2 bg-gray-900 text-white text-xs px-3 py-1 rounded-full z-30">
                Click to minimize
              </div>
            )}
            
            {!isZoomed && (
              <div className="absolute top-2 right-2 bg-gray-900 text-white text-xs px-3 py-1 rounded-full opacity-70 hover:opacity-100 z-30">
                Click to enlarge
              </div>
            )}
          </div>
        </div>
        
        {/* Benefits List */}
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-green-500 inline-block text-transparent bg-clip-text">
            Benefits of Your Certificate
          </h3>
          
          <ul className="space-y-4 mb-8">
            <li className="pl-8 relative before:content-['✓'] before:absolute before:left-0 before:text-green-500 before:font-bold">
              <span className="font-bold text-blue-500">Career Advancement</span>: Showcase specialized skills in the growing field of GeoAI
            </li>
            <li className="pl-8 relative before:content-['✓'] before:absolute before:left-0 before:text-green-500 before:font-bold">
              <span className="font-bold text-blue-500">Professional Credibility</span>: Validation from industry experts with ESRI and ISRO experience
            </li>
            <li className="pl-8 relative before:content-['✓'] before:absolute before:left-0 before:text-green-500 before:font-bold">
              <span className="font-bold text-blue-500">LinkedIn Profile Enhancement</span>: Add directly to your LinkedIn certifications
            </li>
            <li className="pl-8 relative before:content-['✓'] before:absolute before:left-0 before:text-green-500 before:font-bold">
              <span className="font-bold text-blue-500">Internship Priority</span>: Get shortlisted for industry internships with our partner organizations
            </li>
            <li className="pl-8 relative before:content-['✓'] before:absolute before:left-0 before:text-green-500 before:font-bold">
              <span className="font-bold text-blue-500">Verifiable Credentials</span>: Each certificate includes a unique verification ID
            </li>
          </ul>
          
          <div className="mt-8">
            <a 
              href="#register" 
              className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-10 py-4 rounded-full font-bold transition hover:scale-105 inline-block text-lg"
            >
              REGISTER & EARN YOUR CERTIFICATE
            </a>
          </div>
        </div>
      </div>
      
      <div className="text-center">
        <p className="text-gray-300 text-lg">
          Don't miss the chance to add this valuable credential to your professional portfolio!
        </p>
      </div>
    </section>
  );
}