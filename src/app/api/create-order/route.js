import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';

// Available coupon codes and their discount percentages
const coupons = {
  'COUPON2025': 42,
  'LAUNCH25': 25,
  'EARLYBIRD15': 15,
  'STUDENT10': 10
};

// Initialize Razorpay
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});

export async function POST(request) {
  try {
    const { name, email, phone, background, couponCode } = await request.json();
    
    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Original price in paisa (₹399 = 39900 paisa)
    let amount = 69900;
    let discountApplied = false;
    let discountPercentage = 0;
    
    // Apply coupon if valid
    if (couponCode && coupons[couponCode]) {
      discountPercentage = coupons[couponCode];
      amount = amount - (amount * discountPercentage / 100);
      discountApplied = true;
    }
    
    // Create order
    const options = {
      amount,
      currency: 'INR',
      receipt: `receipt_${Date.now()}`,
      notes: {
        name,
        email,
        phone,
        background: background || 'Not specified',
        couponApplied: discountApplied ? couponCode : 'None'
      }
    };
    
    const order = await razorpay.orders.create(options);
    
    // Return success response with order details
    return NextResponse.json({
      success: true,
      order,
      key: process.env.RAZORPAY_KEY_ID,
      amount,
      discountApplied,
      discountPercentage,
      originalAmount: 69900
    });
    
  } catch (error) {
    console.error('Order creation failed:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create order' },
      { status: 500 }
    );
  }
}