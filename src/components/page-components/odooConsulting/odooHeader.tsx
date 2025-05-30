"use client"
import React, { useState, useEffect } from 'react'

const OdooHeader = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  // Auto-hide status message after 5 seconds
  useEffect(() => {
    if (submitStatus.type) {
      const timer = setTimeout(() => {
        setSubmitStatus({ type: null, message: '' });
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [submitStatus.type]);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    
    // Clear status when user starts typing
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate email
    if (!email.trim()) {
      setSubmitStatus({
        type: 'error',
        message: 'Please enter your email address.'
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.trim(),
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: result.message || 'Successfully signed up! We\'ll be in touch soon.'
        });
        
        // Reset form after successful submission
        setEmail('');
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.error || 'Failed to sign up. Please try again.'
        });
      }
    } catch (error) {
      console.error('Error submitting signup:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Main Content */}
      <div
        className="relative h-[45rem] flex flex-col lg:flex-row items-center bg-white justify-center lg:justify-between bg-white/0 backdrop-blur-sm px-6 lg:px-28"
        id="home"
      >
        {/* Text Section - Now First (Left Side) */}
        <div className="text-center lg:text-left max-w-xl mb-12 lg:mb-0 order-2 lg:order-1 mt-6 sm:-mt-10">
          <h1 className="text-3xl lg:text-5xl font-semibold mb-6 lg:mb-8 ml-0 sm:ml-12">
            <span className="text-blue-500">Unlock</span>{" "}
            <span className="text-black">Business</span>
            <br />
            <span className="text-black">Efficiency with Odoo Consulting</span>
          </h1>

          <p className="text-gray-600 font-normal lg:text-lg mb-8 lg:mb-10 leading-relaxed ml-0 sm:ml-12">
            Vidhai Technologies offers expert Odoo consulting services to
            streamline your business operations. Our tailored Odoo solutions
            integrate seamlessly, enhancing efficiency and driving growth. Sign
            up to learn how we can transform your business with Odoo.
          </p>

          {/* Status Message */}
          {submitStatus.type && (
            <div className={`mb-4 p-3 rounded-md text-sm ml-0 sm:ml-12 ${
              submitStatus.type === 'success' 
                ? 'bg-green-50 text-green-800 border border-green-200' 
                : 'bg-red-50 text-red-800 border border-red-200'
            }`}>
              {submitStatus.message}
            </div>
          )}

          {/* Email Signup Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 items-center justify-center lg:justify-start max-w-md ml-0 sm:ml-12">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              disabled={isSubmitting}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full sm:w-auto disabled:bg-gray-100 disabled:cursor-not-allowed"
            />
            <button 
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md transition duration-300 w-full sm:w-auto disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing up...
                </>
              ) : (
                'Sign up'
              )}
            </button>
          </form>
        </div>

        {/* Image Section - Now Second (Right Side) */}
        <div className="relative w-full lg:w-auto flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="relative mt-6 sm:-mt-24">
            <img
              src="/odooheader.webp"
              alt="IT Solutions Illustration"
              className="rounded-md object-cover h-[650px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OdooHeader;