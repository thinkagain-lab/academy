
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
<div className="py-8 text-center border-t border-gray-700 mt-12">
          <div className="mb-6">
            <a href='/'>
            <Image 
              src="/TalLogoRound(1).png" 
              
              alt="Think Again Lab Logo" 
              width={200} 
              height={200}
              className="mx-auto mb-4"
            />
            </a>
            <p className="text-gray-400">© 2025 Think Again Academy. All rights reserved.</p>
          </div>
          

          <div className="flex flex-col items-center gap-4 mb-15 md:mb-6 md:flex-row md:justify-center">
            <Link href="/about-us" passHref className="text-gray-400 hover:text-green-500">About Us</Link>
            <Link href="/contact-us" passHref className="text-gray-400 hover:text-green-500">Contact Us</Link>
            <Link href="/privacy-row" passHref className="text-gray-400 hover:text-green-500">Privacy Policy</Link>
            <Link href="/payment-policy" passHref className="text-gray-400 hover:text-green-500">Payment Policy</Link>
            <Link href="/terms-and-conditions" passHref className="text-gray-400 hover:text-green-500">Terms and Conditions</Link>
          </div>

          
        </div>
    )
}