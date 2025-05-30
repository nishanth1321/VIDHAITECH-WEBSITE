// "use client";

// import React, { useState } from "react";

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
//       <div className="max-w-lg mx-auto px-4">
//         <h2 className="text-4xl font-bold text-gray-900 mb-2">
//           Get in Touch
//         </h2>
//         <p className="text-gray-600 mb-8">
//           Reach out to us for any inquiries.
//         </p>

//         {/* Name Input */}
//         <div className="mb-6">
//           <label className="block text-gray-900 font-medium mb-2" htmlFor="name">
//             Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleInputChange}
//             placeholder="Enter your name"
//             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600"
//           />
//         </div>

//         {/* Email Input */}
//         <div className="mb-6">
//           <label className="block text-gray-900 font-medium mb-2" htmlFor="email">
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//             placeholder="Enter your email"
//             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600"
//           />
//         </div>

//         {/* Message Input */}
//         <div className="mb-6">
//           <label className="block text-gray-900 font-medium mb-2" htmlFor="message">
//             Message
//           </label>
//           <textarea
//             id="message"
//             name="message"
//             value={formData.message}
//             onChange={handleInputChange}
//             placeholder="Type your message"
//             rows={4}
//             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600"
//           />
//         </div>

//         {/* Terms Checkbox */}
//         <div className="mb-6 flex items-center">
//           <input
//             type="checkbox"
//             id="terms"
//             name="terms"
//             checked={formData.terms}
//             onChange={handleCheckboxChange}
//             className="mr-2 h-5 w-5 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
//           />
//           <label htmlFor="terms" className="text-gray-600">
//             I accept the Terms
//           </label>
//         </div>

//         {/* Submit Button */}
//         <button
//           onClick={handleSubmit}
//           className="w-32 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
//         >
//           Submit
//         </button>
//       </div>
//     </div>
//   );
// };

// export default GetInTouch;

"use client";

import React, { useState } from "react";
import Image from "next/image";

const GetInTouch: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    terms: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, terms: e.target.checked }));
  };

  const handleSubmit = () => {
    if (!formData.terms) {
      alert("Please accept the terms before submitting.");
      return;
    }
    console.log("Form submitted:", formData);
    // Add your form submission logic here (e.g., API call)
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

          {/* Name Input */}
          <div className="mb-6">
            <label className="block text-gray-900 font-medium mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600"
            />
          </div>

          {/* Email Input */}
          <div className="mb-6">
            <label className="block text-gray-900 font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600"
            />
          </div>

          {/* Message Input */}
          <div className="mb-6">
            <label className="block text-gray-900 font-medium mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Type your message"
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600"
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
              className="mr-2 h-5 w-5 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="terms" className="text-gray-600">
              I accept the Terms
            </label>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="w-32 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Submit
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