'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function ContactUs() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
    newsletter: false,
  });

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value,
    }));
  };
  
  // Contact information
  const contactInfo = {
    address: 'S-344, Think Again Lab, Baishnabghata Patuli, Kolkata-700094',
    phone: '+91 82409 25036',
    email: 'thinkagainlab@gmail.com',
    googleMapsUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.149613636969!2d88.38969!3d22.4676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDI4JzAzLjQiTiA4OMKwMjMnMjIuOSJF!5e0!3m2!1sen!2sin!4v1649927408000!5m2!1sen!2sin'
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      // No-cors mode doesn't return JSON, so we can't process the response
      await fetch("https://script.google.com/macros/s/AKfycbwL6NSV_m4Nx-1j3ZLjmIULYWStT_2h5HKyk4rbo9WrJ_66BxbG68WpLd2KxfN2wgeKow/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        mode: 'no-cors',
      });
      
      // Since we can't check response with no-cors, assume success
      setFormSubmitted(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        interest: '',
        message: '',
        newsletter: false,
      });
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header - Matching Home Page */}
        <Navbar/>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-500 to-green-500 p-[2px] rounded-xl mb-12">
          <div className="relative py-12 px-6 text-center rounded-xl bg-gray-900 overflow-hidden">
            <div className="relative z-10">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                <span className="text-blue-500">Contact</span> <span className="text-green-500">Us</span>
              </h1>
              <p className="text-xl max-w-3xl mx-auto mb-6">
                Have questions about our programs? Want to visit our academy? Get in touch with us today.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="my-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Google Maps and Contact Info */}
            <div className="group transition-all h-full">
              <div className="p-[1.5px] rounded-xl h-full bg-gray-700 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-green-500 transition-all duration-300">
                <div className="bg-gray-800 rounded-xl p-8 h-full flex flex-col">
                  <h2 className="text-2xl font-bold mb-6 text-blue-500">Our Location</h2>
                  
                  {/* Google Maps Embed */}
                  <div className="aspect-w-16 aspect-h-9 w-full h-80 mb-8">
                    <iframe 
                      src={contactInfo.googleMapsUrl}
                      className="w-full h-full rounded-md border-0" 
                      allowFullScreen="" 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="ThinkAgain Lab Location"
                    ></iframe>
                  </div>
                  
                  {/* Contact Details */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-2 text-green-500">Address</h3>
                      <p className="text-gray-300">{contactInfo.address}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2 text-green-500">Phone</h3>
                      <p className="text-gray-300">
                        <a href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`} className="hover:text-blue-500">
                          {contactInfo.phone}
                        </a>
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2 text-green-500">Email</h3>
                      <p className="text-gray-300">
                        <a href={`mailto:${contactInfo.email}`} className="hover:text-blue-500">
                          {contactInfo.email}
                        </a>
                      </p>
                    </div>

                    <div className="pt-4 border-t border-gray-700">
                      <h3 className="text-lg font-medium mb-4 text-blue-500">Operating Hours</h3>
                      <div className="grid grid-cols-2 gap-2 text-gray-300">
                        <div>Monday - Friday:</div>
                        <div>9:00 AM - 6:00 PM</div>
                        <div>Saturday:</div>
                        <div>10:00 AM - 4:00 PM</div>
                        <div>Sunday:</div>
                        <div>Closed</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Contact Form */}
            <div className="group transition-all h-full">
              <div className="p-[1.5px] rounded-xl h-full bg-gray-700 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-green-500 transition-all duration-300">
                <div className="bg-gray-800 rounded-xl p-8 h-full flex flex-col">
                  <h2 className="text-2xl font-bold mb-6 text-blue-500">Get in Touch</h2>
                  
                  {formSubmitted ? (
                    <div className="p-6 text-center">
                      <div className="text-4xl mb-6">✓</div>
                      <h3 className="text-xl font-bold mb-2 text-green-500">Thank You!</h3>
                      <p className="text-gray-300 mb-4">Your message has been received. We'll get back to you shortly.</p>
                      <button 
                        onClick={() => setFormSubmitted(false)}
                        className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-3 rounded-full font-bold transition hover:scale-105"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6 flex-grow">
                      <div>
                        <label htmlFor="name" className="block text-white font-medium mb-2">Your Name</label>
                        <input
                          type="text"
                          id="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-white font-medium mb-2">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-white font-medium mb-2">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white"
                        />
                      </div>

                      <div>
                        <label htmlFor="interest" className="block text-white font-medium mb-2">What are you interested in?</label>
                        <select
                          id="interest"
                          value={formData.interest}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white"
                          required
                        >
                          <option value="">Please select...</option>
                          <option value="workshops">Technology Workshops</option>
                          <option value="masterclasses">Expert Masterclasses</option>
                          <option value="certifications">Certification Programs</option>
                          <option value="innovation">Innovation Labs</option>
                          <option value="partnerships">Business Partnerships</option>
                          <option value="other">Other Inquiries</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-white font-medium mb-2">Your Message</label>
                        <textarea
                          id="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows="5"
                          className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white"
                          required
                        />
                      </div>

                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="newsletter"
                            type="checkbox"
                            checked={formData.newsletter}
                            onChange={handleChange}
                            className="h-4 w-4 border-gray-600 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="newsletter" className="text-gray-300">
                            Sign me up for the ThinkAgain Lab newsletter to receive updates on new courses and events
                          </label>
                        </div>
                      </div>

                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className={`w-full bg-gradient-to-r from-blue-500 to-green-500 text-white py-4 rounded-xl font-bold text-lg transition ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:brightness-110 hover:scale-105'}`}
                        >
                          {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                        <p className="text-xs text-gray-400 mt-3 text-center">
                          By submitting this form, you agree to our privacy policy and terms of service.
                        </p>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Connect With Us Section */}
        <section className="bg-gray-800 rounded-xl py-12 px-6 my-16">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-green-500 inline-block text-transparent bg-clip-text">
            Connect With Us
          </h2>
          
          <p className="mb-8 text-gray-300">
            Follow us on social media to stay updated with our latest workshops, events, and technological insights.
          </p>
          
          <div className="flex gap-4">
            <a href="https://www.facebook.com/thinkagainlab" className="bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center hover:bg-green-500 hover:text-gray-900 transition">f</a>
            <a href="https://www.instagram.com/think_again_lab_official/" className="bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center hover:bg-green-500 hover:text-gray-900 transition">ig</a>
            <a href="https://www.linkedin.com/company/thinkagainlab" className="bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center hover:bg-green-500 hover:text-gray-900 transition">in</a>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="my-16">
          <h2 className="text-4xl font-bold text-center mb-12 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-gradient-to-r after:from-blue-500 after:to-green-500">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            {[
              {
                question: "What types of technology courses do you offer?",
                answer: "We offer a wide range of technology courses including web development, data science, artificial intelligence, mobile app development, cloud computing, cybersecurity, and more. Our curriculum is regularly updated to reflect the latest industry trends and technologies."
              },
              {
                question: "How can I register for a workshop or masterclass?",
                answer: "You can register for our workshops and masterclasses directly through our website. Navigate to the 'Courses' section, select the workshop or masterclass you're interested in, and follow the registration instructions. You can also contact us directly for assistance with registration."
              },
              {
                question: "Do you offer online learning options?",
                answer: "Yes, we offer both in-person and online learning options for most of our courses. Our online programs feature live instruction, interactive sessions, and the same high-quality content as our in-person offerings."
              },
              {
                question: "Can businesses partner with ThinkAgain Lab for corporate training?",
                answer: "Absolutely! We work with businesses of all sizes to provide customized technical training for their teams. Our corporate programs can be tailored to meet your specific needs and can be delivered either at our academy or at your location."
              }
            ].map((faq, index) => (
              <div key={index} className="group transition-all h-full">
                <div className="p-[1.5px] rounded-xl h-full bg-gray-700 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-green-500 transition-all duration-300">
                  <div className="bg-gray-800 rounded-xl p-6 h-full flex flex-col">
                    <h3 className="text-lg font-bold mb-3 text-blue-500">{faq.question}</h3>
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <p className="text-gray-300 mb-4">Don't see your question here? Feel free to get in touch with us!</p>
            <a href="#" className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-3 rounded-full font-bold transition hover:scale-105 hover:bg-green-400">
              Ask a Question
            </a>
          </div>
        </section>
        
        {/* Footer - Matching Home Page */}
            <Footer />
      </div>
    </div>
  );
}