"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaTimes } from "react-icons/fa"; // Import FaThumbsUp icon
import { FiMenu } from "react-icons/fi";
const handleSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
  event.preventDefault();

  const targetElement = document.querySelector(targetId);
  if (targetElement) {
    const offset = -28; // Offset to stop scrolling 10px before the target
    const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset + offset;

    window.scrollTo({
      top: elementPosition,
      behavior: "smooth",
    });
  }
}

type DropdownState = {
  services: boolean;
};

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [, setDropdownOpen] = useState<DropdownState>({
    services: false,
  });

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen({ services: false });
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setDropdownOpen({ services: false });
  }, [pathname]);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const toggleDropdown = (dropdown: keyof DropdownState) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [dropdown]: !prev[dropdown],
    }));
  };

  return (
    <nav className="bg-white/30 backdrop-blur-md fixed max-w-screen w-screen z-10 shadow-lg h-20 flex items-center gap-10">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 mx-10">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Logo"
              width={140}
              height={100}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-16 pr-0 sm:pr-24">
      <Link
        href="#home"
        className="text-black font-bold hover:text-blue-300 text-md transition duration-200"
        onClick={(e) => handleSmoothScroll(e, "#home")}
      >
        Home
      </Link>
   
      <a
        href="#service"
        className="block text-black font-bold hover:text-blue-300 text-md transition duration-200"
        onClick={(e) => handleSmoothScroll(e, "#service")}
      >
        Service
      </a>
      <a
        href="#work"
        className="text-black font-bold hover:text-blue-300 transition text-md duration-200"
        onClick={(e) => handleSmoothScroll(e, "#work")}
      >
        Work
      </a>
      <a
        href="#consult"
        className="block text-black font-bold hover:text-blue-300 text-md transition duration-200"
        onClick={(e) => handleSmoothScroll(e, "#consult")}
      >
        Consulting
      </a>
      <a
        href="#faq"
        className="text-black font-bold hover:text-blue-300 transition text-md duration-200"
        onClick={(e) => handleSmoothScroll(e, "#faq")}
      >
        FAQ
      </a>
      <a
        href="#contact"
        className="text-black font-bold hover:text-blue-300 transition text-md duration-200"
        onClick={(e) => handleSmoothScroll(e, "#contact")}
      >
        Contact Us
      </a>
    </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-blue-900 font-bold focus:outline-none hover:text-blue-300 transition duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden absolute top-20 left-0 w-full bg-white/90 backdrop-blur-lg shadow-lg z-50`}
      >
        <div className="px-4 pt-4 pb-3 space-y-2">
          {/* Services with Dropdown */}
          <div className="block">
            <Link
              href="/about-us"
              className="block  text-blue-900 font-bold hover:text-blue-300 text-sm transition duration-200"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <button
              onClick={() => toggleDropdown("services")}
              className="text-blue-900 font-bold hover:text-blue-300 text-sm transition duration-200 flex justify-between w-full"
            ></button>
          </div>

          <Link
            href="/"
            className="block text-blue-900 font-bold hover:text-blue-300 text-sm transition duration-200"
            onClick={() => setIsOpen(false)}
          >
            Events
          </Link>
          <Link
            href="/career"
            className="block text-blue-900 font-bold hover:text-blue-300 text-sm transition duration-200"
            onClick={() => setIsOpen(false)}
          >
            Career
          </Link>
          <Link
            href="/support"
            className="block text-blue-900 font-bold hover:text-blue-300 text-sm transition duration-200"
            onClick={() => setIsOpen(false)}
          >
            Support
          </Link>
          <Link href="/contact">
            <button
              onClick={() => setIsOpen(false)} // Close mobile menu on contact button click
            >
              <span className="mr-2">Contact Us</span>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
