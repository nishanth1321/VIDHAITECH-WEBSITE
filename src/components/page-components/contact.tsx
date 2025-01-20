"use client";

import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="py-16 bg-white mx-4" id="contact">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12">
        {/* Left Section: Map */}
        <div className="lg:w-1/2 order-last lg:order-first">
          <div className="rounded-xl overflow-hidden shadow-lg sm:flex sm:justify-center items-center pl-4 sm:pl-0">
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.831399089515!2d-122.084249!3d37.422065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb7354d2bdfcd%3A0xa30a8da44f2e5ba6!2sGoogleplex!5e0!3m2!1sen!2sus!4v1614010412251!5m2!1sen!2sus"
              width="100%"
              height="400"
              className="border-0"
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Right Section: Contact Information */}
        <div className="lg:w-1/2 pl-0 sm:pl-10">
          <div className="text-left">
            <h2 className="text-5xl font-semibold text-gray-900 mb-6">
              Contact Us
            </h2>
            <p className="text-gray-600 mb-8">
              Reach out to us for any inquiries or assistance. We here to
              help and ensure your experience with Vidhai Technologies is
              seamless.
            </p>

            {/* Address */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Address</h3>
              <p className="text-gray-600">
              Vidhai Technologies Pvt Ltd, 70, Race Course Rd, Gopalapuram, Coimbatore, Tamil Nadu 641018
              </p>
            </div>

            {/* Email */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Email</h3>
              <p className="text-gray-600">info@vidhai-technologies.com</p>
            </div>

            {/* Phone */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
              <p className="text-gray-600">+1 (123) 456-7890</p>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-700 text-2xl"
                >
                  <FaFacebook />
                </a>
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-700 text-2xl"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-700 text-2xl"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-700 text-2xl"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
