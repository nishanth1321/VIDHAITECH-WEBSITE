import React from "react";

const AboutUsHeader = () => {
  return (
    <div className="bg-white py-16 px-6 lg:px-28">
      <div className="max-w-9xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-1 items-center">
          {/* Left Column - Title */}
          <div className="sm:-mt-14 mt-0">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight sm:ml-4 ml-0">
              Our Journey and Core Values
            </h2>
          </div>

          {/* Right Column - Description */}
          <div>
            <p className="text-lg text-gray-700 leading-relaxed sm:ml-4 ml-0">
              Vidhai Technologies has a rich history of empowering businesses
              through innovative IT solutions. Our mission is to deliver
              exceptional consulting services in SAP, Oracle, and Odoo, ensuring
              optimal performance and growth for our clients. We uphold values
              of Integrity, Innovation, and Excellence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsHeader;
