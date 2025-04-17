// app/api/submit-feedback/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    // Parse the request body
    const data = await request.json();
    
    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'your-email@gmail.com', // Set this in your .env.local file
        pass: process.env.EMAIL_PASS || 'your-app-password'     // Set this in your .env.local file
      }
    });

    // Format the email content
    const formatRatingSection = (title, rating, comments) => {
      const stars = '⭐'.repeat(rating);
      return `
        <h3 style="color: #3b82f6; margin-bottom: 5px;">${title} ${stars}</h3>
        <p style="margin-top: 0; margin-bottom: 15px;">${comments || 'No comments provided'}</p>
      `;
    };

    // Email content
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
        <h1 style="color: #2563EB; text-align: center; margin-bottom: 20px;">Session Feedback Submission</h1>
        
        <div style="background-color: #f0f9ff; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
          <h2 style="color: #0369a1; margin-top: 0;">Course: ${data.courseName}</h2>
          <p><strong>Session Number:</strong> ${data.sessionNumber}</p>
          <p><strong>Topics Covered:</strong> ${data.topicsCovered}</p>
          <p><strong>Student Name:</strong> ${data.studentName}</p>
          <p><strong>Student ID:</strong> ${data.studentId}</p>
        </div>

        <div style="background-color: #f8fafc; padding: 15px; border-radius: 5px;">
          <h2 style="color: #0369a1; margin-top: 0;">Evaluation Ratings</h2>
          
          ${formatRatingSection('Clarity of Concepts:', data.clarityRating, data.clarityComments)}
          ${formatRatingSection('Engagement Level:', data.engagementRating, data.engagementComments)}
          ${formatRatingSection('Practical Examples & Coding Demonstration:', data.practicalExamplesRating, data.practicalExamplesComments)}
          ${formatRatingSection('Response to Questions:', data.questionsResponseRating, data.questionsResponseComments)}
          ${formatRatingSection('Time Management:', data.timeManagementRating, data.timeManagementComments)}
          ${formatRatingSection('Use of Teaching Aids:', data.teachingAidsRating, data.teachingAidsComments)}
          ${formatRatingSection('Encouragement of Hands-on Learning:', data.handsOnLearningRating, data.handsOnLearningComments)}
          
          <h3 style="color: #3b82f6; margin-bottom: 5px;">Additional Suggestions:</h3>
          <p style="margin-top: 0;">${data.suggestions || 'No suggestions provided'}</p>
        </div>
        
        <p style="color: #64748b; font-size: 12px; text-align: center; margin-top: 20px;">
          This is an automated feedback submission from the Think Again Academy Learning Platform.
        </p>
      </div>
    `;

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to: 'thinkagainlab@gmail.com',
      subject: `[Session Feedback] ${data.courseName} - Session ${data.sessionNumber}`,
      html: emailContent
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Return success response
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error submitting feedback:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'An error occurred' },
      { status: 500 }
    );
  }
}