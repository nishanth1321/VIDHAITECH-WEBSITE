"use client";

import Link from "next/link";
import { FaRocket } from "react-icons/fa";

export default function Header() {
  return (
    <div>
      {/* Main Content */}
      <div className="relative h-[45rem] flex flex-col lg:flex-row items-center bg-white justify-center lg:justify-start bg-white/0 backdrop-blur-sm px-6 lg:px-28 " id="home">
        {/* Text Section */}
        <div className="text-center lg:text-left max-w-xl mb-12 lg:mb-0 lg:mr-8 md:mb-5 mt-6 sm:mt-0">
          <h2 className="text-lg lg:text-lg font-medium text-gray-600 mb-4 lg:mb-2 py-4 ">
            Empowering Businesses with Comprehensive IT Solutions
          </h2>
          <h1 className="text-3xl lg:text-5xl font-semibold text-gray-900 mb-6 lg:mb-10">
            Driving Innovation with
            <div className="mt-1">
              <h1 className="text-blue-800">
                End-to-End <span className="text-black">IT Solutions.</span>
              </h1>
            </div>
          </h1>

          <p className="text-black font-medium lg:text-lg mb-6 lg:mb-8 lg:mt-4">
            At Vidhai Technologies, we provide{" "}
            <span className="text-blue-800 font-semibold">
              end-to-end IT solutions
            </span>{" "}
            tailored to your business needs. From software development and cloud
            solutions to IT infrastructure and digital transformation, we
            combine expertise with innovation to deliver impactful, scalable,
            and secure solutions that drive business success.
          </p>
          <Link href="/" legacyBehavior>
            <a className="bg-black text-white px-6 py-3 rounded-lg flex items-center justify-center w-64">
              <span className="mr-2">Start You Journey</span>
              <FaRocket />
            </a>
          </Link>
        </div>

        {/* Image Section */}
        <div className="relative sm:ml-12 ml-0 w-full lg:w-auto flex justify-center lg:justify-end">
          {/* Image */}
          <div className="relative sm:right-10 mt-6 sm:mt-10 left-0 sm:left-28 sm:-bottom-10 bottom-0">
            <img
              src="/header1.png" // Replace with relevant image path
              alt="IT Solutions Illustration"
              
              className="rounded-lg object-cover  h-[680px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
