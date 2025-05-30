

// "use client";

// import Link from "next/link";
// import { FaRocket } from "react-icons/fa";

// export default function Header() {
//   return (
//     <div>
//       {/* Main Content */}
//       <div className="relative h-[45rem] flex flex-col lg:flex-row items-center bg-white justify-center lg:justify-start bg-white/0 backdrop-blur-sm px-6 lg:px-28" id="home">
        
//         {/* Image Section - Now First */}
//         <div className="relative sm:mr-12 mr-0 w-full lg:w-auto flex justify-center lg:justify-start">
//           <div className="relative sm:left-10 mt-6 sm:-mt-32 left-0 sm:right-28 sm:-bottom-10 bottom-0">
//             <img
//               src="/header.webp"
//               alt="IT Solutions Illustration"
//               className="rounded-lg object-cover h-[650px]"
//             />
//           </div>
//         </div>

//         {/* Text Section - Now Second */}
//         <div className="text-center lg:text-left max-w-xl mb-12 lg:mb-0 lg:ml-8 md:mb-5 mt-6 sm:mt-0">
//           <h1 className="text-3xl lg:text-5xl font-semibold text-blue-500 mb-6 lg:mb-10">
//             Expert IT Consulting <span className="text-gray-800">for</span>
//             <div className="mt-1">
//               <h1 className="text-gray-800">
//                  Your Business
//               </h1>
//             </div>
//           </h1>

//           <p className="text-black font-medium lg:text-lg mb-6 lg:mb-8 lg:mt-4">
//             Vidhai Technologies offers comprehensive IT consulting services, specializing in SAP, Oracle, and Odoo solutions. We empower your business with innovative technology and expert guidance to drive growth and efficiency.
//           </p>
//           <Link href="/" legacyBehavior>
//             <a className="bg-black text-white px-6 py-3 rounded-lg flex items-center justify-center w-44">
//               <span className="mr-2">SAP Solutions</span>
//               <FaRocket />
//             </a>
//           </Link>
          
//         </div>

//       </div>
//     </div>
//   );
// }

"use client";

import Link from "next/link";


export default function Header() {
  return (
    <div>
      {/* Main Content */}
      <div className="relative h-[45rem] flex flex-col lg:flex-row items-center bg-white justify-center lg:justify-start bg-white/0 backdrop-blur-sm px-6 lg:px-28" id="home">
        
        {/* Image Section - Now First */}
        <div className="relative sm:mr-12 mr-0 w-full lg:w-auto flex justify-center lg:justify-start">
          <div className="relative sm:left-10 mt-6 sm:-mt-32 left-0 sm:right-28 sm:-bottom-10 bottom-0">
            <img
              src="/header.webp"
              alt="IT Solutions Illustration"
              className="rounded-md object-cover h-[650px]"
            />
          </div>
        </div>

        {/* Text Section - Now Second */}
        <div className="text-center lg:text-left max-w-xl mb-12 lg:mb-0 lg:ml-8 md:mb-5 mt-6 sm:-mt-10">
          <h1 className="text-3xl lg:text-5xl font-semibold text-blue-500 mb-6 lg:mb-10">
            Expert IT Consulting <span className="text-gray-800">for</span>
            <div className="mt-1">
              <h1 className="text-gray-800">
                 Your Business
              </h1>
            </div>
          </h1>

          <p className="text-black font-medium lg:text-lg mb-6 lg:mb-8 lg:mt-4">
            Vidhai Technologies offers comprehensive IT consulting services, specializing in SAP, Oracle, and Odoo solutions. We empower your business with innovative technology and expert guidance to drive growth and efficiency.
          </p>
          
          {/* Two Buttons Container */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
            {/* SAP Solutions Button - Primary */}
            <Link href="/" legacyBehavior>
              <a className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md flex items-center justify-center w-44 transition duration-300 shadow-lg">
                <span className="mr-2">SAP Solutions</span>
              </a>
            </Link>
            
            {/* Learn More Button - Secondary */}
            <Link href="/about" legacyBehavior>
              <a className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-md flex items-center justify-center w-44 transition duration-300">
                <span>Learn More</span>
              </a>
            </Link>
          </div>
          
        </div>

      </div>
    </div>
  );
}