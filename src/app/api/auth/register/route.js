import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import User from '@/lib/models/user';
import admin from '@/lib/firebaseAdmin';
import { verifyAuthToken } from '@/lib/middleware/authMiddleware';

// Helper function to add timeouts to promises
const withTimeout = (promise, ms, errorMessage) => {
  return Promise.race([
    promise,
    new Promise((_, reject) => setTimeout(() => reject(new Error(errorMessage)), ms))
  ]);
};

export async function POST(request) {
  console.log('Starting registration process');
  
  try {
    // Step 1: Verify Firebase token with timeout
    console.log('Verifying Firebase token...');
    let firebaseUid;
    try {
      firebaseUid = await withTimeout(
        verifyAuthToken(request),
        10000,
        'Authentication token verification timed out'
      );
      console.log('Firebase token verified successfully');
    } catch (authError) {
      console.error('Auth verification failed:', authError);
      return NextResponse.json({ 
        error: 'Authentication failed',
        details: authError.message
      }, { status: 401 });
    }
    
    // Step 2: Get user data from Firebase Auth with timeout
    console.log('Fetching user data from Firebase...');
    let firebaseUser;
    try {
      firebaseUser = await withTimeout(
        admin.auth().getUser(firebaseUid),
        10000,
        'Firebase user data fetch timed out'
      );
      console.log('Firebase user data fetched successfully');
    } catch (firebaseError) {
      console.error('Firebase user fetch failed:', firebaseError);
      return NextResponse.json({ 
        error: 'Failed to retrieve user information',
        details: firebaseError.message
      }, { status: 500 });
    }
    
    // Step 3: Parse request body
    console.log('Parsing request body...');
    let body;
    try {
      body = await request.json();
      console.log('Request body parsed successfully');
    } catch (parseError) {
      console.error('Request parsing failed:', parseError);
      return NextResponse.json({ 
        error: 'Invalid request format',
        details: 'Could not parse request body as JSON'
      }, { status: 400 });
    }
    
    // Step 4: Connect to MongoDB with timeout
    console.log('Connecting to MongoDB...');
    let client, db;
    try {
      const clientPromise = await withTimeout(
        connectToDatabase(),
        15000,
        'Database connection timed out'
      );
      console.log('MongoDB connection established successfully');
      
      client = await clientPromise;
      db = client.db();
    } catch (dbConnectError) {
      console.error('Database connection failed:', dbConnectError);
      return NextResponse.json({ 
        error: 'Database connection error',
        details: dbConnectError.message
      }, { status: 503 });
    }
    
    // Step 5: Check if user already exists
    console.log('Checking for existing user...');
    let existingUser;
    try {
      existingUser = await withTimeout(
        db.collection('users').findOne({ 
          $or: [
            { email: firebaseUser.email },
            { firebase_uid: firebaseUid }
          ]
        }),
        10000,
        'Database query for existing user timed out'
      );
    } catch (queryError) {
      console.error('User query failed:', queryError);
      return NextResponse.json({ 
        error: 'Database query error',
        details: queryError.message
      }, { status: 500 });
    }
    
    if (existingUser) {
      console.log('User already exists:', existingUser.email);
      return NextResponse.json({ error: 'User already exists' }, { status: 409 });
    }
    console.log('No existing user found, proceeding with registration');
    
    // Step 6: Create new user object
    console.log('Creating new user object...');
    const newUser = {
      name: body.name || firebaseUser.displayName || '',
      email: firebaseUser.email,
      firebase_uid: firebaseUid, // Store Firebase UID for future reference
      role: body.role || 'Learner', // Default role is Learner
      wallet_balance: 0,
      joined_at: new Date()
    };
    
    // Step 7: Validate user data if User model has a validate method
    console.log('Validating user data...');
    if (typeof User.validate === 'function') {
      const validationErrors = User.validate(newUser);
      if (validationErrors && validationErrors.length > 0) {
        console.log('Validation errors found:', validationErrors);
        return NextResponse.json({ errors: validationErrors }, { status: 400 });
      }
    }
    console.log('User data validated successfully');
    
    // Step 8: Insert user into database
    // Step 8: Insert user into database
console.log('Inserting user into database...');
try {
  const result = await withTimeout(
    db.collection('users').insertOne(newUser),
    10000,
    'Database insert operation timed out'
  );
  console.log('User inserted successfully');
  
  // Explicitly assign the MongoDB _id to the user_id if needed
  newUser._id = result.insertedId;
} catch (insertError) {
  console.error('User insertion failed:', insertError);
  return NextResponse.json({ 
    error: 'Failed to create user',
    details: insertError.message
  }, { status: 500 });
}

// Return successful response with the correct ID
const responseData = {
  user_id: newUser.user_id, // Use the UUID you generated
  // Or use MongoDB's _id if that's what you reference elsewhere
  // user_id: newUser._id.toString(),
  name: newUser.name,
  email: newUser.email,
  role: newUser.role
};
    
    return NextResponse.json(responseData, { status: 201 });
    
  } catch (error) {
    console.error('Unhandled error in registration process:', error);
    
    // Provide a safe error response that will always be valid JSON
    return NextResponse.json({ 
      error: 'Registration failed',
      details: error.message || 'Unknown error'
    }, { status: 500 });
  }
}