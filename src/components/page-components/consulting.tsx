"use client";

import {
  FaHeartbeat,
  FaUniversity,
  FaCartArrowDown,
  FaIndustry,
  FaChalkboardTeacher,
  FaNetworkWired,
} from "react-icons/fa";

export default function Consulting() {
  return (
    <div>
      {/* Main Content */}
      <div className="relative h-auto flex flex-col lg:flex-row-reverse items-center bg-white justify-center lg:justify-between bg-white/0 backdrop-blur-sm px-6 lg:px-28 py-10" id="consult">
        {/* Image Section */}
        <div
          className="relative sm:ml-12 ml-0 w-full lg:w-auto flex justify-center lg:justify-end"
          id="consult"
        >
          <div className="relative sm:-right-28 mt-24 sm:mt-10">
            <img
              src="/working.jpg" // Replace with relevant image path
              alt="IT Solutions Illustration"
              className="rounded-lg object-cover h-[625px]"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="text-center lg:text-left max-w-xl mb-12 lg:mb-0 lg:mr-8 md:mb-5 mt-6 sm:mt-0">
          <h2 className="text-lg lg:text-lg font-medium text-gray-600 mb-4 lg:mb-2 py-4">
            Our Consulting Services
          </h2>
          <h1 className="text-3xl lg:text-5xl font-semibold text-gray-900 mb-6 lg:mb-10">
            Driving Innovation
            <div className="mt-1">
              <h1 className="text-blue-800">Across Industries</h1>
            </div>
          </h1>

          <p className="text-black font-medium lg:text-lg mb-6 lg:mb-8 lg:mt-4">
            At Vidhai Technologies, we specialize in providing{" "}
            <span className="text-blue-800 font-semibold">End-to-End</span> IT
            solutions tailored to meet the unique needs of diverse industries.
          </p>

          {/* Services List with Icons */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <FaHeartbeat className="text-blue-950 text-2xl" />
              <h3 className="text-xl font-semibold text-gray-700 hover:text-gray-900 transition-colors">
                Healthcare IT Solutions
              </h3>
            </div>
            <div className="flex items-center space-x-3">
              <FaCartArrowDown className="text-blue-950 text-2xl" />
              <h3 className="text-xl font-semibold text-gray-700 hover:text-gray-900 transition-colors">
                Retail & E-Commerce Innovation
              </h3>
            </div>
            <div className="flex items-center space-x-3">
              <FaIndustry className="text-blue-950 text-2xl" />
              <h3 className="text-xl font-semibold text-gray-700 hover:text-gray-900 transition-colors">
                Manufacturing & Supply Chain Excellence
              </h3>
            </div>
            <div className="flex items-center space-x-3">
              <FaUniversity className="text-blue-950 text-2xl" />
              <h3 className="text-xl font-semibold text-gray-700 hover:text-gray-900 transition-colors">
                Finance & Banking Solutions
              </h3>
            </div>
            <div className="flex items-center space-x-3">
              <FaChalkboardTeacher className="text-blue-950 text-2xl" />
              <h3 className="text-xl font-semibold text-gray-700 hover:text-gray-900 transition-colors">
                Education & E-Learning Technology
              </h3>
            </div>
            <div className="flex items-center space-x-3">
              <FaNetworkWired className="text-blue-950 text-2xl" />
              <h3 className="text-xl font-semibold text-gray-700 hover:text-gray-900 transition-colors">
                Telecommunications Solutions
              </h3>
            </div>
          </div>

          {/* Closing Statement */}
          <p className="text-black font-medium lg:text-lg mt-6">
            We also provide comprehensive end-to-end IT services which are not
            limited to our specialties, ensuring your business stays ahead in
            the digital age.
          </p>
        </div>
      </div>
    </div>
  );
}
