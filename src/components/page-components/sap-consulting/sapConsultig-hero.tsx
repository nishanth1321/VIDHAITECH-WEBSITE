// import Link from 'next/link'
// import React from 'react'

// const SapConsultingHeader = () => {
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
//               className="rounded-md object-cover h-[650px]"
//             />
//           </div>
//         </div>

//         {/* Text Section - Now Second */}
//         <div className="text-center lg:text-left max-w-xl mb-12 lg:mb-0 lg:ml-8 md:mb-5 mt-6 sm:-mt-10">
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
          
//           {/* Two Buttons Container */}
//           <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
//             {/* SAP Solutions Button - Primary */}
//             <Link href="/" legacyBehavior>
//               <a className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md flex items-center justify-center w-44 transition duration-300 shadow-lg">
//                 <span className="mr-2">SAP Solutions</span>
//               </a>
//             </Link>
            
//             {/* Learn More Button - Secondary */}
//             <Link href="/about" legacyBehavior>
//               <a className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-md flex items-center justify-center w-44 transition duration-300">
//                 <span>Learn More</span>
//               </a>
//             </Link>
//           </div>
          
//         </div>

//       </div>
//     </div>
//   )
// }

// export default SapConsultingHeader



import React from 'react'

const SapConsultingHeader = () => {
  return (
    <div>
      {/* Main Content */}
      <div className="relative h-[45rem] flex flex-col lg:flex-row items-center bg-white justify-center lg:justify-between bg-white/0 backdrop-blur-sm px-6 lg:px-28" id="home">
        
        {/* Text Section - Now First (Left Side) */}
        <div className="text-center lg:text-left max-w-xl mb-12 lg:mb-0 order-2 lg:order-1 mt-6 sm:-mt-10">
          <h1 className="text-3xl lg:text-5xl font-semibold mb-6 lg:mb-8 ml-0 sm:ml-12">
            <span className="text-blue-500">Optimize</span> <span className="text-black">Your Business</span>
            <br />
            <span className="text-black">with SAP Consulting</span>
          </h1>

          <p className="text-gray-600 font-normal lg:text-lg mb-8 lg:mb-10 leading-relaxed ml-0 sm:ml-12">
            Vidhai Technologies offers expert SAP consulting services to streamline your business processes. Our tailored solutions ensure seamless integration and optimal performance of your ERP systems. Sign up now to discover how we can help you achieve greater efficiency and productivity with SAP.
          </p>
          
          {/* Email Signup Form */}
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-center lg:justify-start max-w-md ml-0 sm:ml-12">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full sm:w-auto"
            />
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md transition duration-300 w-full sm:w-auto">
              Sign up
            </button>
          </div>
        </div>

        {/* Image Section - Now Second (Right Side) */}
        <div className="relative w-full lg:w-auto flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="relative mt-6 sm:-mt-24">
            <img
              src="/header.webp"
              alt="IT Solutions Illustration"
              className="rounded-md object-cover h-[650px]"
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default SapConsultingHeader