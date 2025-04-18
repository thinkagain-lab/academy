import { NextResponse } from 'next/server';

// Available coupon codes and their discount percentages
const coupons = {
    
    'GEOAI2025': 42,
  
  'EARLYBIRD15': 15,
  'STUDENT10': 10
};

export async function POST(request) {
  try {
    const { couponCode } = await request.json();
    
    if (!couponCode) {
      return NextResponse.json(
        { success: false, error: 'No coupon code provided' },
        { status: 400 }
      );
    }
    
    if (coupons[couponCode]) {
      const discountPercentage = coupons[couponCode];
      const originalAmount = 69900;
      const discountedAmount = originalAmount - (originalAmount * discountPercentage / 100);
      
      return NextResponse.json({
        success: true,
        valid: true,
        couponCode,
        discountPercentage,
        originalAmount,
        discountedAmount
      });
    } else {
      return NextResponse.json({
        success: true,
        valid: false,
        message: 'Invalid coupon code'
      });
    }
  } catch (error) {
    console.error('Coupon validation error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
