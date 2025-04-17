// components/SessionFeedbackForm.jsx
"use client";
import { useState } from 'react';
import { FaStar, FaRegStar, FaPaperPlane } from 'react-icons/fa';

export default function SessionFeedbackForm() {
  const [formData, setFormData] = useState({
    studentName: '',
    studentId: '',
    sessionNumber: '',
    topicsCovered: '',
    clarityRating: 0,
    clarityComments: '',
    engagementRating: 0,
    engagementComments: '',
    practicalExamplesRating: 0,
    practicalExamplesComments: '',
    questionsResponseRating: 0,
    questionsResponseComments: '',
    timeManagementRating: 0,
    timeManagementComments: '',
    teachingAidsRating: 0,
    teachingAidsComments: '',
    handsOnLearningRating: 0,
    handsOnLearningComments: '',
    suggestions: '',
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleRatingChange = (parameter, rating) => {
    setFormData(prevData => ({
      ...prevData,
      [`${parameter}Rating`]: rating
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormData(prevData => ({ ...prevData, submitting: true, error: null }));

    try {
      const response = await fetch('/api/submit-feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          courseName: "Machine Learning with Python Bootcamp",
          ...formData
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit feedback');
      }

      setFormData(prevData => ({ 
        ...prevData, 
        submitting: false,
        submitted: true 
      }));
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setFormData(prevData => ({ 
        ...prevData, 
        submitting: false,
        error: error.message || 'An error occurred while submitting your feedback'
      }));
    }
  };

  const RatingStars = ({ parameter, rating }) => {
    return (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => handleRatingChange(parameter, star)}
            className="text-xl focus:outline-none transition-transform hover:scale-110"
          >
            {star <= formData[`${parameter}Rating`] ? (
              <FaStar className="text-yellow-400" />
            ) : (
              <FaRegStar className="text-gray-400" />
            )}
          </button>
        ))}
      </div>
    );
  };

  if (formData.submitted) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center text-center px-4">
        <div className="bg-green-500/20 text-green-400 p-3 rounded-full mb-4">
          <FaPaperPlane className="text-3xl" />
        </div>
        <h2 className="text-2xl font-bold mb-2 text-green-400">Feedback Submitted!</h2>
        <p className="text-gray-300 mb-6">Thank you for your valuable feedback. It helps us improve our teaching quality.</p>
        <button 
          onClick={() => setFormData({
            studentName: '',
            studentId: '',
            sessionNumber: '',
            topicsCovered: '',
            clarityRating: 0,
            clarityComments: '',
            engagementRating: 0,
            engagementComments: '',
            practicalExamplesRating: 0,
            practicalExamplesComments: '',
            questionsResponseRating: 0,
            questionsResponseComments: '',
            timeManagementRating: 0,
            timeManagementComments: '',
            teachingAidsRating: 0,
            teachingAidsComments: '',
            handsOnLearningRating: 0,
            handsOnLearningComments: '',
            suggestions: '',
            submitting: false,
            submitted: false,
            error: null
          })}
          className="bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 py-2 px-4 rounded transition"
        >
          Submit Another Feedback
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 relative z-10">
      <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-8 mb-6">
        <h1 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 text-center">
          Session Feedback Form
        </h1>
        <p className="text-gray-300 mb-8 text-center">
          Please share your honest feedback to help us improve the teaching quality.
        </p>

        {formData.error && (
          <div className="bg-red-500/20 border border-red-700 text-red-300 p-4 rounded-lg mb-6">
            {formData.error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="studentName" className="block text-blue-300 mb-2">Student Name</label>
              <input
                type="text"
                id="studentName"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                required
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="studentId" className="block text-blue-300 mb-2">Student ID</label>
              <input
                type="text"
                id="studentId"
                name="studentId"
                value={formData.studentId}
                onChange={handleChange}
                required
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="sessionNumber" className="block text-blue-300 mb-2">Session Number</label>
              <input
                type="number"
                id="sessionNumber"
                name="sessionNumber"
                value={formData.sessionNumber}
                onChange={handleChange}
                required
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="topicsCovered" className="block text-blue-300 mb-2">Topics Covered</label>
              <input
                type="text"
                id="topicsCovered"
                name="topicsCovered"
                value={formData.topicsCovered}
                onChange={handleChange}
                required
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., Python basics, Machine Learning Intro"
              />
            </div>
          </div>

          <div className="border-t border-gray-700 pt-6">
            <h2 className="text-xl font-bold mb-4 text-blue-300">Evaluation Parameters</h2>
            
            {/* Clarity of Concepts */}
            <div className="mb-6 bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <div className="flex flex-col md:flex-row justify-between mb-3">
                <label className="text-lg font-medium text-blue-300 mb-2 md:mb-0">
                  Clarity of Concepts
                </label>
                <RatingStars parameter="clarity" rating={formData.clarityRating} />
              </div>
              <p className="text-sm text-gray-400 mb-2">Did the trainer explain concepts clearly? Were real-world examples used effectively?</p>
              <textarea
                name="clarityComments"
                value={formData.clarityComments}
                onChange={handleChange}
                placeholder="Your comments here..."
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 h-20"
              ></textarea>
            </div>

            {/* Engagement Level */}
            <div className="mb-6 bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <div className="flex flex-col md:flex-row justify-between mb-3">
                <label className="text-lg font-medium text-blue-300 mb-2 md:mb-0">
                  Engagement Level
                </label>
                <RatingStars parameter="engagement" rating={formData.engagementRating} />
              </div>
              <p className="text-sm text-gray-400 mb-2">Was the session interactive and engaging? Did the trainer encourage student participation?</p>
              <textarea
                name="engagementComments"
                value={formData.engagementComments}
                onChange={handleChange}
                placeholder="Your comments here..."
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 h-20"
              ></textarea>
            </div>

            {/* Practical Examples & Coding Demonstration */}
            <div className="mb-6 bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <div className="flex flex-col md:flex-row justify-between mb-3">
                <label className="text-lg font-medium text-blue-300 mb-2 md:mb-0">
                  Practical Examples & Coding Demonstration
                </label>
                <RatingStars parameter="practicalExamples" rating={formData.practicalExamplesRating} />
              </div>
              <p className="text-sm text-gray-400 mb-2">Did the trainer provide enough coding demonstrations? Were real-life applications integrated into teaching?</p>
              <textarea
                name="practicalExamplesComments"
                value={formData.practicalExamplesComments}
                onChange={handleChange}
                placeholder="Your comments here..."
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 h-20"
              ></textarea>
            </div>

            {/* Response to Questions */}
            <div className="mb-6 bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <div className="flex flex-col md:flex-row justify-between mb-3">
                <label className="text-lg font-medium text-blue-300 mb-2 md:mb-0">
                  Response to Questions
                </label>
                <RatingStars parameter="questionsResponse" rating={formData.questionsResponseRating} />
              </div>
              <p className="text-sm text-gray-400 mb-2">Did the trainer answer student queries effectively? Were doubts resolved efficiently?</p>
              <textarea
                name="questionsResponseComments"
                value={formData.questionsResponseComments}
                onChange={handleChange}
                placeholder="Your comments here..."
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 h-20"
              ></textarea>
            </div>

            {/* Time Management */}
            <div className="mb-6 bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <div className="flex flex-col md:flex-row justify-between mb-3">
                <label className="text-lg font-medium text-blue-300 mb-2 md:mb-0">
                  Time Management
                </label>
                <RatingStars parameter="timeManagement" rating={formData.timeManagementRating} />
              </div>
              <p className="text-sm text-gray-400 mb-2">Was the session well-paced? Were all planned topics covered within the session duration?</p>
              <textarea
                name="timeManagementComments"
                value={formData.timeManagementComments}
                onChange={handleChange}
                placeholder="Your comments here..."
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 h-20"
              ></textarea>
            </div>

            {/* Use of Teaching Aids */}
            <div className="mb-6 bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <div className="flex flex-col md:flex-row justify-between mb-3">
                <label className="text-lg font-medium text-blue-300 mb-2 md:mb-0">
                  Use of Teaching Aids
                </label>
                <RatingStars parameter="teachingAids" rating={formData.teachingAidsRating} />
              </div>
              <p className="text-sm text-gray-400 mb-2">Did the trainer effectively use slides, whiteboard, and coding tools? Were visualizations and practical examples provided?</p>
              <textarea
                name="teachingAidsComments"
                value={formData.teachingAidsComments}
                onChange={handleChange}
                placeholder="Your comments here..."
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 h-20"
              ></textarea>
            </div>

            {/* Encouragement of Hands-on Learning */}
            <div className="mb-6 bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <div className="flex flex-col md:flex-row justify-between mb-3">
                <label className="text-lg font-medium text-blue-300 mb-2 md:mb-0">
                  Encouragement of Hands-on Learning
                </label>
                <RatingStars parameter="handsOnLearning" rating={formData.handsOnLearningRating} />
              </div>
              <p className="text-sm text-gray-400 mb-2">Did the trainer involve students in coding exercises? Were interactive tasks, quizzes, or challenges provided?</p>
              <textarea
                name="handsOnLearningComments"
                value={formData.handsOnLearningComments}
                onChange={handleChange}
                placeholder="Your comments here..."
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 h-20"
              ></textarea>
            </div>

            {/* Suggestions */}
            <div className="mb-6">
              <label htmlFor="suggestions" className="block text-blue-300 mb-2">Additional Suggestions</label>
              <textarea
                id="suggestions"
                name="suggestions"
                value={formData.suggestions}
                onChange={handleChange}
                placeholder="Share any additional feedback or suggestions for improvement..."
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
              ></textarea>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={formData.submitting}
              className="bg-gradient-to-r from-blue-600 to-green-500 text-white font-bold py-3 px-8 rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition duration-300 flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {formData.submitting ? (
                <>
                  <span className="mr-2">Submitting...</span>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                </>
              ) : (
                <>
                  <FaPaperPlane className="mr-2" />
                  Submit Feedback
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}