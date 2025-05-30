

// "use client";

// import React, { useState } from "react";
// import Image from "next/image";

// const GetInTouch: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//     terms: false,
//   });

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData((prev) => ({ ...prev, terms: e.target.checked }));
//   };

//   const handleSubmit = () => {
//     if (!formData.terms) {
//       alert("Please accept the terms before submitting.");
//       return;
//     }
//     console.log("Form submitted:", formData);
//     // Add your form submission logic here (e.g., API call)
//   };

//   return (
//     <div className="py-16 bg-white" id="get-in-touch">
//       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12 px-4">
//         {/* Left Section: Form */}
//         <div className="lg:w-1/2 order-first">
//           <h2 className="text-4xl font-bold text-gray-900 mb-2">
//             Get in Touch
//           </h2>
//           <p className="text-gray-600 mb-8">
//             Reach out to us for any inquiries.
//           </p>

//           {/* Name Input */}
//           <div className="mb-6">
//             <label className="block text-gray-900 font-medium mb-2" htmlFor="name">
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//               placeholder="Enter your name"
//               className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600"
//             />
//           </div>

//           {/* Email Input */}
//           <div className="mb-6">
//             <label className="block text-gray-900 font-medium mb-2" htmlFor="email">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               placeholder="Enter your email"
//               className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600"
//             />
//           </div>

//           {/* Message Input */}
//           <div className="mb-6">
//             <label className="block text-gray-900 font-medium mb-2" htmlFor="message">
//               Message
//             </label>
//             <textarea
//               id="message"
//               name="message"
//               value={formData.message}
//               onChange={handleInputChange}
//               placeholder="Type your message"
//               rows={4}
//               className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600"
//             />
//           </div>

//           {/* Terms Checkbox */}
//           <div className="mb-6 flex items-center">
//             <input
//               type="checkbox"
//               id="terms"
//               name="terms"
//               checked={formData.terms}
//               onChange={handleCheckboxChange}
//               className="mr-2 h-5 w-5 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
//             />
//             <label htmlFor="terms" className="text-gray-600">
//               I accept the Terms
//             </label>
//           </div>

//           {/* Submit Button */}
//           <button
//             onClick={handleSubmit}
//             className="w-32 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
//           >
//             Submit
//           </button>
//         </div>

//         {/* Right Section: Image */}
//         <div className="lg:w-1/2 order-last">
//           <div className="rounded-md overflow-hidden shadow-lg">
//             <Image
//               src="/getintouch.webp" // Replace with the actual path to your image
//               alt="Team working in an office"
//               width={600}
//               height={400}
//               className="object-cover w-full h-full"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GetInTouch;

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface FormData {
  name: string;
  email: string;
  message: string;
  terms: boolean;
}

const GetInTouch: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    terms: false,
  });

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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear status when user starts typing
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' });
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, terms: e.target.checked }));
  };

  const handleSubmit = async () => {
    // Validate terms checkbox
    if (!formData.terms) {
      setSubmitStatus({
        type: 'error',
        message: 'Please accept the terms before submitting.'
      });
      return;
    }

    // Validate required fields
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus({
        type: 'error',
        message: 'Please fill in all required fields.'
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: result.message || 'Your message has been sent successfully!'
        });
        
        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          message: "",
          terms: false,
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.error || 'Failed to send message. Please try again.'
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-16 bg-white" id="get-in-touch">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12 px-4">
        {/* Left Section: Form */}
        <div className="lg:w-1/2 order-first">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-8">
            Reach out to us for any inquiries.
          </p>

          {/* Status Message */}
          {submitStatus.type && (
            <div className={`mb-6 p-4 rounded-md ${
              submitStatus.type === 'success' 
                ? 'bg-green-50 text-green-800 border border-green-200' 
                : 'bg-red-50 text-red-800 border border-red-200'
            }`}>
              {submitStatus.message}
            </div>
          )}

          {/* Name Input */}
          <div className="mb-6">
            <label className="block text-gray-900 font-medium mb-2" htmlFor="name">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              disabled={isSubmitting}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600 disabled:bg-gray-100 disabled:cursor-not-allowed"
            />
          </div>

          {/* Email Input */}
          <div className="mb-6">
            <label className="block text-gray-900 font-medium mb-2" htmlFor="email">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              disabled={isSubmitting}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600 disabled:bg-gray-100 disabled:cursor-not-allowed"
            />
          </div>

          {/* Message Input */}
          <div className="mb-6">
            <label className="block text-gray-900 font-medium mb-2" htmlFor="message">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Type your message"
              rows={4}
              disabled={isSubmitting}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600 disabled:bg-gray-100 disabled:cursor-not-allowed"
            />
          </div>

          {/* Terms Checkbox */}
          <div className="mb-6 flex items-center">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              checked={formData.terms}
              onChange={handleCheckboxChange}
              disabled={isSubmitting}
              className="mr-2 h-5 w-5 text-blue-500 focus:ring-blue-500 border-gray-300 rounded disabled:cursor-not-allowed"
            />
            <label htmlFor="terms" className="text-gray-600">
              I accept the Terms *
            </label>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-32 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              'Submit'
            )}
          </button>
        </div>

        {/* Right Section: Image */}
        <div className="lg:w-1/2 order-last">
          <div className="rounded-md overflow-hidden shadow-lg">
            <Image
              src="/getintouch.webp" // Replace with the actual path to your image
              alt="Team working in an office"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;