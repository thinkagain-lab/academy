// app/api/auth/user/route.js
import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { verifyAuthToken } from '@/lib/middleware/authMiddleware';
import mongoose from 'mongoose';

export async function GET(request) {
  try {
    // Verify Firebase token and get user info
    const firebaseUser = await verifyAuthToken(request);
    
    // Connect to MongoDB
    await connectToDatabase();
    
    // Use mongoose.connection to access the database directly
    const usersCollection = mongoose.connection.collection('users');
    
    // Find user in database - try email first, then fall back to UID if needed
    let user = await usersCollection.findOne({ email: firebaseUser.email });
    
    // If no user found with email, try finding by firebase_uid if your schema supports it
    if (!user) {
      user = await usersCollection.findOne({ firebase_uid: firebaseUser.uid });
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
    
    // Connect to MongoDB
    await connectToDatabase();
    const usersCollection = mongoose.connection.collection('users');
    
    // Check if user already exists (check both email and firebase_uid)
    const existingUser = await usersCollection.findOne({ 
      $or: [
        { email: firebaseUser.email },
        { firebase_uid: firebaseUser.uid }
      ]
    });
    
    if (existingUser) {
      return NextResponse.json({ error: 'User already exists' }, { status: 409 });
    }
    
    // Insert new user
    const result = await usersCollection.insertOne(userData);
    
    // Add the inserted ID to the user data
    userData._id = result.insertedId;
    
    return NextResponse.json(userData, { status: 201 });
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
    await connectToDatabase();
    const usersCollection = mongoose.connection.collection('users');
    
    // Find and update user - try finding by email first
    let updatedUser = await usersCollection.findOneAndUpdate(
      { email: firebaseUser.email },
      { $set: body },
      { returnDocument: 'after' }
    );
    
    // If no user found with email, try finding by firebase_uid
    if (!updatedUser.value) {
      updatedUser = await usersCollection.findOneAndUpdate(
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