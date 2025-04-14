"use client";

import { useState, useEffect } from 'react';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    background: '',
    couponCode: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [courseDetails, setCourseDetails] = useState({
    courseTitle: 'AI in Earth Observation Masterclass',
    originalAmount: 69900,
    currency: 'INR'
  });
  const [couponStatus, setCouponStatus] = useState({
    verified: false,
    valid: false,
    discountPercentage: 0,
    discountedAmount: 69900
  });

  useEffect(() => {
    // Fetch course registration details
    const fetchDetails = async () => {
      try {
        const response = await fetch('/api/registration-details');
        const data = await response.json();
        
        if (data) {
          setCourseDetails({
            courseTitle: data.courseTitle,
            originalAmount: data.originalPrice,
            currency: data.currency
          });
        }
      } catch (error) {
        console.error('Failed to fetch course details:', error);
      }
    };

    fetchDetails();
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));

    // Reset coupon status when coupon code changes
    if (id === 'couponCode') {
      setCouponStatus({
        verified: false,
        valid: false,
        discountPercentage: 0,
        discountedAmount: courseDetails.originalAmount
      });
    }
  };

  const validateCoupon = async () => {
    if (!formData.couponCode) {
      setCouponStatus({
        verified: true,
        valid: false,
        discountPercentage: 0,
        discountedAmount: courseDetails.originalAmount
      });
      return;
    }

    try {
      setLoading(true);
      const response = await fetch('/api/validate-coupon', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ couponCode: formData.couponCode }),
      });
      
      const data = await response.json();

      if (data.valid) {
        setCouponStatus({
          verified: true,
          valid: true,
          discountPercentage: data.discountPercentage,
          discountedAmount: data.discountedAmount
        });
      } else {
        setCouponStatus({
          verified: true,
          valid: false,
          discountPercentage: 0,
          discountedAmount: courseDetails.originalAmount,
          message: data.message
        });
      }
    } catch (error) {
      setCouponStatus({
        verified: true,
        valid: false,
        discountPercentage: 0,
        discountedAmount: courseDetails.originalAmount,
        message: 'Error validating coupon'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      // Validate form
      if (!formData.name || !formData.email || !formData.phone) {
        throw new Error('Please fill in all required fields');
      }
      
      // Create order through the API route
      const orderResponse = await fetch('/api/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const orderData = await orderResponse.json();
      
      if (!orderData.success) {
        throw new Error(orderData.error || 'Failed to create order');
      }
      
      const { order, key, amount } = orderData;
      
      // Load Razorpay script
      const res = await loadRazorpay();
      
      if (!res) {
        throw new Error('Razorpay SDK failed to load. Check your internet connection.');
      }
      
      const options = {
        key,
        amount: amount,
        currency: "INR",
        name: "Think Again Lab",
        description: courseDetails.courseTitle,
        image: "https://raw.githubusercontent.com/thinkagain-lab/academy/827d563df1ae8a49ff856defe56e1e0fb756e77d/public/TalLogoRound.png",
        order_id: order.id,
        handler: async function(response) {
          try {
            // Verify payment through API route
            const verifyResponse = await fetch('/api/verify-payment', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature
              }),
            });
            
            const verifyData = await verifyResponse.json();
            
            if (verifyData.success) {
              alert(`Payment Successful! You are now registered for the masterclass.`);
              // Redirect to success page or show success message
              // window.location.href = '/payment-success';
            } else {
              throw new Error('Payment verification failed');
            }
          } catch (error) {
            setError('Payment verification failed. Please contact support.');
          }
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone
        },
        notes: {
          background: formData.background
        },
        theme: {
          color: "#3399cc"
        }
      };
      
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
      
    } catch (error) {
      setError(error.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  // Format price to display in Indian Rupees
  const formatPrice = (amountInPaisa) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0
    }).format(amountInPaisa / 100);
  };

  return (
    <section id="register" className="my-16">
      <div className="bg-gradient-to-r from-blue-500 to-green-500 p-[2px] rounded-xl">
        <form
          className="bg-gray-800 p-8 rounded-xl"
          onSubmit={handleSubmit}
        >
          <div className='flex flex-col justify-center items-center'>
            <h2 className="text-3xl font-bold text-center mb-8 font-bold bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text inline-block">
              Register for the Masterclass
            </h2>
          </div>

          {error && (
            <div className="mb-6 bg-red-900/50 border border-red-500 text-white p-3 rounded-lg">
              {error}
            </div>
          )}

          <div className="mb-6">
            <label htmlFor="name" className="block mb-2">Full Name *</label>
            <input 
              type="text" 
              id="name" 
              required 
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-600 bg-gray-700 text-white"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block mb-2">Email Address *</label>
            <input 
              type="email" 
              id="email" 
              required 
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-600 bg-gray-700 text-white"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="phone" className="block mb-2">Phone Number *</label>
            <input 
              type="tel" 
              id="phone" 
              required 
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-600 bg-gray-700 text-white"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="background" className="block mb-2">Your Background</label>
            <select 
              id="background" 
              value={formData.background}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-600 bg-gray-700 text-white"
            >
              <option value="">Select your background</option>
              <option value="student">Student</option>
              <option value="professional">Professional</option>
              <option value="researcher">Researcher</option>
              <option value="developer">Developer</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          {/* Coupon Code Section */}
          <div className="mb-8 bg-gray-700/50 p-4 rounded-lg">
            <div className="flex gap-2">
              <div className="flex-grow">
                <label htmlFor="couponCode" className="block mb-2">Have a coupon code?</label>
                <input 
                  type="text" 
                  id="couponCode" 
                  value={formData.couponCode}
                  onChange={handleChange}
                  placeholder="Enter coupon code (optional)" 
                  className="w-full p-3 rounded-lg border border-gray-600 bg-gray-700 text-white"
                />
              </div>
              <div className="self-end">
                <button 
                  type="button"
                  onClick={validateCoupon}
                  disabled={loading || !formData.couponCode}
                  className="p-3 bg-blue-600 text-white rounded-lg h-12 hover:bg-blue-700 disabled:opacity-50"
                >
                  Apply
                </button>
              </div>
            </div>
            
            {couponStatus.verified && couponStatus.message && !couponStatus.valid && (
              <p className="mt-2 text-sm text-red-400">{couponStatus.message}</p>
            )}
            
            {couponStatus.verified && couponStatus.valid && (
              <p className="mt-2 text-sm text-green-400">
                Coupon applied! {couponStatus.discountPercentage}% discount
              </p>
            )}
            
            {/* Price Summary */}
            <div className="mt-4 pt-4 border-t border-gray-600">
              <div className="flex justify-between text-lg">
                <span>Course Price:</span>
                <span>{formatPrice(courseDetails.originalAmount)}</span>
              </div>
              
              {couponStatus.valid && (
                <div className="flex justify-between text-lg text-green-400">
                  <span>Discount ({couponStatus.discountPercentage}%):</span>
                  <span>- {formatPrice(courseDetails.originalAmount - couponStatus.discountedAmount)}</span>
                </div>
              )}
              
              <div className="flex justify-between font-bold text-lg mt-2">
                <span>Final Price:</span>
                <span className="text-green-500">
                  {formatPrice(couponStatus.valid ? couponStatus.discountedAmount : courseDetails.originalAmount)}
                </span>
              </div>
            </div>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white py-4 rounded-xl font-bold text-lg transition hover:brightness-110 hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? 'Processing...' : 'COMPLETE REGISTRATION'}
          </button>
          
          <p className="mt-4 text-center text-sm text-gray-400">
            Secure payment powered by Razorpay
          </p>
        </form>
      </div>
    </section>
  );
}