"use client";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-black mt-16">
      {/* Main Footer */}
      <div className="container mx-auto py-12 px-4 md:px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-6 text-black">
        {/* Logo and Description */}
        <div>
          <img
            src="/logo.png"
            alt="company Logo"
            className="mb-6 w-20 h-20"
          />
          
          {/* Social Icons */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-black hover:text-blue-500 transition-colors duration-300"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="#"
              className="text-black hover:text-blue-500 transition-colors duration-300"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="#"
              className="text-black hover:text-blue-500 transition-colors duration-300"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="#"
              className="text-black hover:text-blue-500 transition-colors duration-300"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="#"
              className="text-black hover:text-blue-500 transition-colors duration-300"
            >
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4 md:mb-6">Vidhai Technologies </h3>
          <p className="mb-6 text-sm md:text-base transition-colors duration-300 hover:text-blue-500 pt-10">
            Providing innovative solutions to transform your business since
            2020. Empowering industries with scalable and reliable technology.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 md:mb-6">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="hover:text-blue-500 transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-500 transition-colors duration-300"
              >
                Service
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-500 transition-colors duration-300"
              >
                Consulting
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-500 transition-colors duration-300"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-blue-500 transition-colors duration-300"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4 md:mb-6">Support</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="hover:text-blue-500 transition-colors duration-300"
              >
                Help Center
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-500 transition-colors duration-300"
              >
                FAQs
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-500 transition-colors duration-300"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-500 transition-colors duration-300"
              >
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center py-4 border-t border-gray-200 text-sm rounded-b-lg w-full mx-auto">
        <p className="transition-colors duration-300 hover:text-blue-500">
          © {new Date().getFullYear()} Sample Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
