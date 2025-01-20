import React from "react";

const Service = () => {
  return (
    <div className="bg-white py-16 px-6 lg:px-28 mt-20 " id="service">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto text-center">
        {/* Title Section */}
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
          Empower Your Business with{" "}
          <span className="text-blue-800">End-to-End </span>IT Solutions
        </h1>

        {/* Description Section */}
        <p className="text-lg sm:text-xl font-medium text-gray-700 max-w-3xl mx-auto">
          At Vidhai Technologies, we provide innovative, scalable, and tailored
          IT solutions to address your unique business needs.We ensure every solution is built to empower your
          business and drive success.
        </p>
      </div>

      {/* Feature Highlights Section */}
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {/* Feature 1 */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h3 className="text-2xl font-semibold text-black mb-4">
            Custom Software Development
          </h3>
          <p className="text-gray-600">
            Build tailored software solutions to streamline operations, enhance
            efficiency, and meet your business requirements.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h3 className="text-2xl font-semibold text-black mb-4">
            Cloud Computing Services
          </h3>
          <p className="text-gray-600">
            Leverage the power of cloud technology to scale your infrastructure
            and ensure secure data management.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h3 className="text-2xl font-semibold text-black mb-4">
            Digital Transformation
          </h3>
          <p className="text-gray-600">
            Modernize your business processes with cutting-edge technologies
            designed to deliver seamless digital experiences.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h3 className="text-2xl font-semibold text-black mb-4">
            IT Infrastructure Management
          </h3>
          <p className="text-gray-600">
            Optimize and manage your IT infrastructure for maximum performance,
            reliability, and scalability.
          </p>
        </div>

        {/* Feature 5 */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h3 className="text-2xl font-semibold text-black mb-4">
            Data Analytics & Insights
          </h3>
          <p className="text-gray-600">
            Harness the power of data to gain actionable insights, enabling
            informed decision-making and business growth.
          </p>
        </div>

        {/* Feature 6 */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h3 className="text-2xl font-semibold text-black mb-4">
            Cybersecurity Solutions
          </h3>
          <p className="text-gray-600">
            Protect your business with robust cybersecurity solutions to defend
            against evolving threats.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
