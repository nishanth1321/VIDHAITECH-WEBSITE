// import React from "react";

// const OracleHeader = () => {
//   return (
//     <div className="bg-white py-16 px-6 lg:px-28">
//       <div className="max-w-9xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-1 items-center">
//           {/* Left Column - Title */}
//           <div className="sm:-mt-6 mt-0 text-4xl lg:text-2xl font-medium text-gray-900 ">
//             <h1 className="sm:ml-8 ml-0">Oracle Expertise</h1>
//             <h2 className="text-4xl lg:text-4xl font-semibold text-gray-900 leading-tight sm:ml-8 ml-0">
//               Optimize Your Oracle Systems
//             </h2>
//           </div>

//           {/* Right Column - Description */}
//           <div>
//             <p className="text-lg text-gray-700 leading-relaxed sm:ml-4 ml-0 ">
//               Vidhai Technologies offers comprehensive Oracle consulting
//               services to help businesses optimize their Oracle systems and
//               improve efficiency. Our expert consultants provide tailored
//               solutions to meet your specific business needs, ensuring seamless
//               integration and optimal performance. We focus on delivering
//               measurable results and long-term value.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OracleHeader;


import React from "react";

const OracleHeader = () => {
  return (
    <div className="bg-white py-16 px-6 lg:px-28">
      <div className="max-w-9xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-1 items-center">
          {/* Left Column - Title */}
          <div className="sm:-mt-6 mt-0 text-4xl lg:text-2xl font-medium text-gray-900 ">
            <h1 className="sm:ml-8 ml-0 mb-2">Oracle Expertise</h1>
            <h2 className="text-4xl lg:text-4xl font-semibold text-gray-900 leading-tight sm:ml-8 ml-0">
              Optimize Your Oracle Systems
            </h2>
          </div>

          {/* Right Column - Description and Button */}
          <div>
            <p className="text-lg text-gray-700 leading-relaxed sm:ml-4 ml-0 mb-6">
              Vidhai Technologies offers comprehensive Oracle consulting
              services to help businesses optimize their Oracle systems and
              improve efficiency. Our expert consultants provide tailored
              solutions to meet your specific business needs, ensuring seamless
              integration and optimal performance. We focus on delivering
              measurable results and long-term value.
            </p>
            
            {/* Learn Button */}
            <div className="sm:ml-4 ml-0">
              <button className="border border-blue-400 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-2 rounded transition-colors duration-300 text-sm font-medium">
                Learn
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OracleHeader;