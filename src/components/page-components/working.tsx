// "use client";

// import { FaBrain, FaCode, FaCloud, FaChartLine } from "react-icons/fa";

// export default function Working() {
//   return (
//     <div>
//       {/* Main Content */}
//       <div className="relative h-auto flex flex-col lg:flex-row items-center bg-white justify-center lg:justify-between bg-white/0 backdrop-blur-sm px-6 lg:px-28 py-10" id="work">
//         {/* Image Section */}
//         <div className="relative sm:mr-12 mr-0 w-full lg:w-auto flex justify-center lg:justify-start">
//           <div className="relative sm:-left-28 mt-24 sm:mt-10 ">
//             <img
//               src="/working.jpg" // Replace with relevant image path
//               alt="IT Solutions Illustration"
             
//               className="rounded-lg object-cover h-[625px]"
//             />
//           </div>
//         </div>

//         {/* Text and Steps Section */}
//         <div className="text-center lg:text-left max-w-xl mb-12 lg:mb-0 lg:ml-8 md:mb-5 mt-6 sm:mt-0">
//           <h2 className="text-lg lg:text-lg font-medium text-gray-600 mb-4 lg:mb-2 py-4">
//             How we Work
//           </h2>
//           <h1 className="text-3xl lg:text-5xl font-semibold text-gray-900 mb-6 lg:mb-10">
//             Our working steps
//             <div className="mt-1">
//               <h1 className="text-blue-800">Towards success</h1>
//             </div>
//           </h1>

//           <p className="text-black font-medium lg:text-lg mb-6 lg:mb-8 lg:mt-4">
//             At Vidhai Technologies, we follow a structured process to deliver{" "}
//             <span className="text-blue-800 font-semibold">
//               innovative and impactful solutions
//             </span>
//             . Our approach ensures that your business goals are met effectively
//             and efficiently.
//           </p>

//           {/* Steps */}
//           <div className="space-y-8">
//             {/* Step 1 */}
//             <div className="flex flex-col sm:flex-row sm:items-center text-center sm:text-left">
//               <FaBrain className="text-blue-800 text-4xl mb-4 sm:mb-0 sm:mr-4 mx-auto sm:mx-0" />
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-900">
//                   Step 1: Ideation and Planning
//                 </h3>
//                 <p className="text-gray-600">
//                   Understanding your requirements and designing a roadmap for
//                   success.
//                 </p>
//               </div>
//             </div>

//             {/* Step 2 */}
//             <div className="flex flex-col sm:flex-row sm:items-center text-center sm:text-left">
//               <FaCode className="text-blue-800 text-4xl mb-4 sm:mb-0 sm:mr-4 mx-auto sm:mx-0" />
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-900">
//                   Step 2: Development
//                 </h3>
//                 <p className="text-gray-600">
//                   Building scalable and reliable solutions tailored to your
//                   needs.
//                 </p>
//               </div>
//             </div>

//             {/* Step 3 */}
//             <div className="flex flex-col sm:flex-row sm:items-center text-center sm:text-left">
//               <FaCloud className="text-blue-800 text-4xl mb-4 sm:mb-0 sm:mr-4 mx-auto sm:mx-0" />
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-900">
//                   Step 3: Deployment and Integration
//                 </h3>
//                 <p className="text-gray-600">
//                   Seamlessly integrating solutions into your infrastructure.
//                 </p>
//               </div>
//             </div>

//             {/* Step 4 */}
//             <div className="flex flex-col sm:flex-row sm:items-center text-center sm:text-left">
//               <FaChartLine className="text-blue-800 text-4xl mb-4 sm:mb-0 sm:mr-4 mx-auto sm:mx-0" />
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-900">
//                   Step 4: Monitoring and Growth
//                 </h3>
//                 <p className="text-gray-600">
//                   Ensuring optimal performance and scaling to meet future needs.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";


export default function Working() {
  return (
    <div className="w-full" id="work">
      {/* Main Content - 50/50 Split */}
      <div className="flex flex-col lg:flex-row min-h-screen">
        
        {/* Text Section - Left 50% */}
        <div className="w-full lg:w-1/2 flex items-center justify-center bg-white px-6 lg:px-16 py-16">
          <div className="max-w-xl ">
            <h1 className="text-4xl lg:text-5xl font-medium text-gray-900 mb-8 leading-tight  ">
              Optimize Your Business Processes with Our Expert{" "}
              <span className="italic text-gray-700">SAP Solutions</span>
            </h1>

            <p className="text-gray-700 font-medium text-lg mb-12 leading-relaxed">
              Vidhai Technologies offers comprehensive SAP support and consulting services designed to optimize your enterprise resource planning systems. Our expert team ensures your SAP solutions are tailored to meet your specific business needs, enhancing efficiency and productivity.
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Stat 1 */}
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  95%
                </div>
                <p className="text-black font-medium text-base">
                  Increase in process efficiency after SAP implementation.
                </p>
              </div>

              {/* Stat 2 */}
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  40+
                </div>
                <p className="text-black font-medium text-base">
                  Reduction in operational costs with our SAP solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Image Section - Right 50% */}
        <div className="w-full lg:w-1/2 relative">
          <img
            src="/3.webp"
            alt="IT Solutions Illustration"
            className="w-full h-full object-cover min-h-[600px] lg:min-h-screen"
          />
        </div>

      </div>
    </div>
  );
}