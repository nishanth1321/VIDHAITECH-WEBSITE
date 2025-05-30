import React from "react";

const OdooHeader = () => {
  return (
    <div>
      {/* Main Content */}
      <div
        className="relative h-[45rem] flex flex-col lg:flex-row items-center bg-white justify-center lg:justify-between bg-white/0 backdrop-blur-sm px-6 lg:px-28"
        id="home"
      >
        {/* Text Section - Now First (Left Side) */}
        <div className="text-center lg:text-left max-w-xl mb-12 lg:mb-0 order-2 lg:order-1 mt-6 sm:-mt-10">
          <h1 className="text-3xl lg:text-5xl font-semibold mb-6 lg:mb-8 ml-0 sm:ml-12">
            <span className="text-blue-500">UnlockUnlock</span>{" "}
            <span className="text-black">Business</span>
            <br />
            <span className="text-black">Efficiency with Odoo Consulting</span>
          </h1>

          <p className="text-gray-600 font-normal lg:text-lg mb-8 lg:mb-10 leading-relaxed ml-0 sm:ml-12">
            Vidhai Technologies offers expert Odoo consulting services to
            streamline your business operations. Our tailored Odoo solutions
            integrate seamlessly, enhancing efficiency and driving growth. Sign
            up to learn how we can transform your business with Odoo.
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
              src="/odooheader.webp"
              alt="IT Solutions Illustration"
              className="rounded-md object-cover h-[650px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OdooHeader;
