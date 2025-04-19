// lib/firebaseAdmin.js
import admin from 'firebase-admin';

if (!admin.apps.length) {
  try {
    // For Vercel, the private key needs special handling
    const privateKey = process.env.FIREBASE_PRIVATE_KEY 
      ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')
      : undefined;
      
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: privateKey,
      }),
    });
  } catch (error) {
    console.error('Firebase admin initialization error', error.stack);
  }
}

export default admin;