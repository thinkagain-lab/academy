import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import User from '@/lib/models/user';
import admin from '@/lib/firebaseAdmin';
import { verifyAuthToken } from '@/lib/middleware/authMiddleware';

export async function POST(request) {
  try {
    // First verify the Firebase token
    const firebaseUid = await verifyAuthToken(request);
    
    // Get user data from Firebase Auth
    const firebaseUser = await admin.auth().getUser(firebaseUid);
    
    // Get additional user details from request body
    const body = await request.json();
    
    // Connect to MongoDB
    const clientPromise = await connectToDatabase();
    const client = await clientPromise;
    const db = client.db();
    
    // Check if user already exists in our database
    const existingUser = await db.collection('users').findOne({ email: firebaseUser.email });
    
    if (existingUser) {
      return NextResponse.json({ error: 'User already exists' }, { status: 409 });
    }
    
    // Create new user object
    const newUser = new User({
      name: body.name || firebaseUser.displayName || '',
      email: firebaseUser.email,
      role: body.role || 'Learner', // Default role is Learner
      wallet_balance: 0,
      joined_at: new Date()
    });
    
    // Validate user data
    const validationErrors = User.validate(newUser);
    if (validationErrors.length > 0) {
      return NextResponse.json({ errors: validationErrors }, { status: 400 });
    }
    
    // Insert user into database
    await db.collection('users').insertOne(newUser);
    
    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.error('Error registering user:', error);
    return NextResponse.json({ error: error.message || 'Error registering user' }, { status: 500 });
  }
}