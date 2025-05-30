// 
// import React from 'react'

// const ServiceHeader = () => {
//   return (
//     <div className="bg-white py-16 px-6 lg:px-28">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center">
//           {/* Left Column - Title */}
//           <div className='sm:-mt-10 mt-0'>
//             <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
//               Discover Vidhai Technologies
//             </h2>
//           </div>
          
//           {/* Right Column - Description */}
//           <div>
//             <p className="text-lg text-gray-700 leading-relaxed">
//               At Vidhai Technologies, we are committed to empowering businesses 
//               through innovative IT solutions. Our core values of Integrity, 
//               Innovation, and Excellence guide us in delivering exceptional 
//               consulting services tailored to your needs.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ServiceHeader


import React from 'react'

const ServiceHeader = () => {
  return (
    <div className="bg-white py-16 px-6 lg:px-28">
      <div className="max-w-9xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center">
          {/* Left Column - Title */}
          <div className='sm:-mt-10 mt-0'>
            <h2 className="text-4xl lg:text-4xl font-bold text-gray-900 leading-tight sm:ml-8 ml-0">
              Discover Vidhai Technologies
            </h2>
          </div>
          
          {/* Right Column - Description */}
          <div>
            <p className="text-lg text-gray-700 leading-relaxed sm:ml-4 ml-0">
              At Vidhai Technologies, we are committed to empowering businesses 
              through innovative IT solutions. Our core values of Integrity, 
              Innovation, and Excellence guide us in delivering exceptional 
              consulting services tailored to your needs.
            </p>
          </div>
        </div>
      </div>
     
    </div>
  )
}

export default ServiceHeader