import React from "react";

const SapHeader = () => {
  return (
    <div className="bg-white py-16 px-6 lg:px-28">
      <div className="max-w-9xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-1 items-center">
          {/* Left Column - Title */}
          <div className="sm:-mt-6 mt-0">
            <h2 className="text-4xl lg:text-4xl font-semibold text-gray-900 leading-tight sm:ml-8 ml-0">
              Our Comprehensive SAP Solutions for Your Business GrowthBusiness
              Growth
            </h2>
          </div>

          {/* Right Column - Description */}
          <div>
            <p className="text-lg text-gray-700 leading-relaxed sm:ml-4 ml-0 ">
              At Vidhai Technologies, we understand the critical role SAP plays
              in your business operations. Our SAP support and consulting
              services are designed to ensure your SAP systems run smoothly,
              efficiently, and in alignment with your strategic goals. We
              provide tailored solutions that address your unique challenges and
              drive tangible results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SapHeader;
