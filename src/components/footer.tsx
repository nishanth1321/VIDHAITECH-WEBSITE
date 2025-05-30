

// "use client";

// import React from "react";

// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-black text-white py-10">
//       {/* Main Footer Links */}
//       <div className="flex justify-center space-x-8 mb-4 py-4">
//         <a href="#" className="text-md hover:text-gray-300 transition-colors duration-300">
//           SAP Consulting
//         </a>
//         <a href="#" className="text-md hover:text-gray-300 transition-colors duration-300">
//           Oracle Consulting
//         </a>
//         <a href="#" className="text-md hover:text-gray-300 transition-colors duration-300">
//           Odoo Consulting
//         </a>
//         <a href="#" className="text-md hover:text-gray-300 transition-colors duration-300">
//           Staff Augmentation
//         </a>
//       </div>

//       {/* Horizontal Line */}
//       <hr className="border-t border-gray-600 my-4 w-3/4 mx-auto" />

//       {/* Footer Bottom */}
//       <div className="flex justify-center space-x-4 text-md mt-10 mb-8 gap-8">
//         <p>
//           Copyright © 2025 Vidhai Technologies Private Limited. All rights reserved.
//         </p>
//         <a href="#" className="hover:text-gray-300 transition-colors duration-300">
//           About Us
//         </a>
//         <a href="#" className="hover:text-gray-300 transition-colors duration-300">
//           Terms and Conditions
//         </a>
//         <a href="#" className="hover:text-gray-300 transition-colors duration-300">
//           Privacy Policy
//         </a>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


"use client";

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-10">
      {/* Main Footer Links */}
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-4 py-4 px-4">
        <a href="/sapConsulting" className="text-sm sm:text-md hover:text-gray-300 transition-colors duration-300 text-center">
          SAP Consulting
        </a>
        <a href="/oracleConsulting" className="text-sm sm:text-md hover:text-gray-300 transition-colors duration-300 text-center">
          Oracle Consulting
        </a>
        <a href="/oracleConsulting" className="text-sm sm:text-md hover:text-gray-300 transition-colors duration-300 text-center">
          Odoo Consulting
        </a>
        <a href="/staffAugmentation" className="text-sm sm:text-md hover:text-gray-300 transition-colors duration-300 text-center">
          Staff Augmentation
        </a>
      </div>

      {/* Horizontal Line */}
      <hr className="border-t border-gray-600 my-4 w-3/4 mx-auto" />

      {/* Footer Bottom */}
      <div className="flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-4 text-sm sm:text-md mt-10 mb-8 px-4">
        <p className="text-center lg:text-left">
          Copyright © 2025 Vidhai Technologies Private Limited. All rights reserved.
        </p>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 text-center">
          <a href="/aboutUs" className="hover:text-gray-300 transition-colors duration-300">
            About Us
          </a>
          <a href="/termsandconditions" className="hover:text-gray-300 transition-colors duration-300">
            Terms and Conditions
          </a>
          <a href="/privacypolicy" className="hover:text-gray-300 transition-colors duration-300">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;