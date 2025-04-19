// app/api/auth/user/route.js
import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { verifyAuthToken } from '@/lib/middleware/authMiddleware';
import User from '@/lib/models/user';

export async function GET(request) {
  try {
    // Verify Firebase token and get user info
    const firebaseUser = await verifyAuthToken(request);
    
    // Connect to MongoDB
    const clientPromise = await connectToDatabase();
    const client = await clientPromise;
    const db = client.db();
    
    // Find user in database - try email first, then fall back to UID if needed
    let user = await db.collection('users').findOne({ email: firebaseUser.email });
    
    // If no user found with email, try finding by firebase_uid if your schema supports it
    if (!user) {
      user = await db.collection('users').findOne({ firebase_uid: firebaseUser.uid });
    }
    
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
    
    return NextResponse.json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    return NextResponse.json({ error: error.message || 'Unauthorized' }, { status: 401 });
  }
}

export async function POST(request) {
  try {
    // Verify Firebase token and get user info
    const firebaseUser = await verifyAuthToken(request);
    
    // Get request body
    const body = await request.json();
    
    // Create new user object
    const userData = {
      ...body,
      email: firebaseUser.email,
      firebase_uid: firebaseUser.uid,
    };
    
    // Validate user data
    const validationErrors = User.validate(userData);
    if (validationErrors.length > 0) {
      return NextResponse.json({ errors: validationErrors }, { status: 400 });
    }
    
    const newUser = new User(userData);
    
    // Connect to MongoDB
    const clientPromise = await connectToDatabase();
    const client = await clientPromise;
    const db = client.db();
    
    // Check if user already exists (check both email and firebase_uid)
    const existingUser = await db.collection('users').findOne({ 
      $or: [
        { email: firebaseUser.email },
        { firebase_uid: firebaseUser.uid }
      ]
    });
    
    if (existingUser) {
      return NextResponse.json({ error: 'User already exists' }, { status: 409 });
    }
    
    // Insert new user
    await db.collection('users').insertOne(newUser);
    
    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json({ error: error.message || 'Error creating user' }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    // Verify Firebase token and get user info
    const firebaseUser = await verifyAuthToken(request);
    
    // Get request body
    const body = await request.json();
    
    // Connect to MongoDB
    const clientPromise = await connectToDatabase();
    const client = await clientPromise;
    const db = client.db();
    
    // Find and update user - try finding by email first
    let updatedUser = await db.collection('users').findOneAndUpdate(
      { email: firebaseUser.email },
      { $set: body },
      { returnDocument: 'after' }
    );
    
    // If no user found with email, try finding by firebase_uid
    if (!updatedUser.value) {
      updatedUser = await db.collection('users').findOneAndUpdate(
        { firebase_uid: firebaseUser.uid },
        { $set: body },
        { returnDocument: 'after' }
      );
    }
    
    if (!updatedUser.value) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
    
    return NextResponse.json(updatedUser.value);
  } catch (error) {
    console.error('Error updating user:', error);
    return NextResponse.json({ error: error.message || 'Error updating user' }, { status: 500 });
  }
}