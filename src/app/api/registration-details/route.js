import { NextResponse } from 'next/server';

// Available coupon codes and their discount percentages
const coupons = {
    'COUPON2025': 42,
  'LAUNCH25': 25,
  'EARLYBIRD15': 15,
  'STUDENT10': 10
};

export async function GET() {
  try {
    // In a real app, this might come from your database
    return NextResponse.json({
      courseTitle: 'AI in Earth Observation Masterclass',
      originalPrice: 69900, // in paisa
      currency: 'INR',
      availableCoupons: Object.keys(coupons).map(code => ({
        code,
        discountPercentage: coupons[code]
      }))
    });
  } catch (error) {
    console.error('Failed to fetch registration details:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
