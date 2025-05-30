// "use client";

// import React from "react";
// import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

// const Scale = () => {
//   return (
//     <div className="py-16 bg-white mx-4" id="contact">
//       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12">
//         {/* Left Section: Map */}
//         <div className="lg:w-1/2 order-last lg:order-first">
//           <div className="rounded-xl overflow-hidden shadow-lg sm:flex sm:justify-center items-center pl-4 sm:pl-0">
//             <iframe
//               title="Map"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.831399089515!2d-122.084249!3d37.422065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb7354d2bdfcd%3A0xa30a8da44f2e5ba6!2sGoogleplex!5e0!3m2!1sen!2sus!4v1614010412251!5m2!1sen!2sus"
//               width="100%"
//               height="400"
//               className="border-0"
//               allowFullScreen={true}
//               loading="lazy"
//             ></iframe>
//           </div>
//         </div>

//         {/* Right Section: Contact Information */}
//         <div className="lg:w-1/2 pl-0 sm:pl-10">
//           <div className="text-left">
//             <h2 className="text-5xl font-semibold text-gray-900 mb-6">
//               Contact Us
//             </h2>
//             <p className="text-gray-600 mb-8">
//               Reach out to us for any inquiries or assistance. We here to
//               help and ensure your experience with Vidhai Technologies is
//               seamless.
//             </p>

//             {/* Address */}
//             <div className="mb-6">
//               <h3 className="text-lg font-semibold text-gray-900">Address</h3>
//               <p className="text-gray-600">
//               Vidhai Technologies Pvt Ltd, 70, Race Course Rd, Gopalapuram, Coimbatore, Tamil Nadu 641018
//               </p>
//             </div>

//             {/* Email */}
//             <div className="mb-6">
//               <h3 className="text-lg font-semibold text-gray-900">Email</h3>
//               <p className="text-gray-600">info@vidhai-technologies.com</p>
//             </div>

//             {/* Phone */}
//             <div className="mb-6">
//               <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
//               <p className="text-gray-600">+1 (123) 456-7890</p>
//             </div>

//             {/* Social Media */}
//             <div>
//               <h3 className="text-lg font-semibold text-gray-900 mb-4">
//                 Follow Us
//               </h3>
//               <div className="flex space-x-4">
//                 <a
//                   href="#"
//                   className="text-blue-500 hover:text-blue-700 text-2xl"
//                 >
//                   <FaFacebook />
//                 </a>
//                 <a
//                   href="#"
//                   className="text-blue-500 hover:text-blue-700 text-2xl"
//                 >
//                   <FaTwitter />
//                 </a>
//                 <a
//                   href="#"
//                   className="text-blue-500 hover:text-blue-700 text-2xl"
//                 >
//                   <FaLinkedin />
//                 </a>
//                 <a
//                   href="#"
//                   className="text-blue-500 hover:text-blue-700 text-2xl"
//                 >
//                   <FaInstagram />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Scale;

"use client";

import React from "react";
import Image from "next/image";

const Scale: React.FC = () => {
  return (
    <div className="py-16 bg-gray-50" id="scale">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 px-4">
        {/* Left Section: Text Content */}
        <div className="lg:w-1/2 order-first">
          <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6">
            Scale Your IT Team with <span className="italic">Vidhai</span>{" "}
            Technologies
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Vidhai Technologies staff augmentation services provide businesses
            with access to top-notch IT professionals, allowing you to scale
            your workforce as needed. We help you find the right talent to meet
            your project demands, ensuring flexibility and expertise.
          </p>
          <ul className="list-disc pl-5 text-gray-600 text-lg space-y-2">
            <li>Flexible Staffing: Scale your team as needed.</li>
            <li>Expert Professionals: Access top IT talent.</li>
            <li>Cost-Effective: Reduce hiring overhead.</li>
          </ul>
        </div>

        {/* Right Section: Image */}
        <div className="lg:w-1/2 order-last">
          <div className="rounded-md overflow-hidden shadow-lg">
            <Image
              src="/5.webp" // Replace with the actual path to your image
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

export default Scale;
