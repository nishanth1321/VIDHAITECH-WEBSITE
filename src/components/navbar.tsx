// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { FaTimes } from "react-icons/fa"; // Import FaThumbsUp icon
// import { FiMenu } from "react-icons/fi";
// const handleSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
//   event.preventDefault();

//   const targetElement = document.querySelector(targetId);
//   if (targetElement) {
//     const offset = -28; // Offset to stop scrolling 10px before the target
//     const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset + offset;

//     window.scrollTo({
//       top: elementPosition,
//       behavior: "smooth",
//     });
//   }
// }

// type DropdownState = {
//   services: boolean;
// };

// export default function Navbar() {
//   const pathname = usePathname();
//   const [isOpen, setIsOpen] = useState<boolean>(false);
//   const [, setDropdownOpen] = useState<DropdownState>({
//     services: false,
//   });

//   const dropdownRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target as Node)
//       ) {
//         setDropdownOpen({ services: false });
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   useEffect(() => {
//     setDropdownOpen({ services: false });
//   }, [pathname]);

//   const toggleMenu = () => setIsOpen((prev) => !prev);

//   const toggleDropdown = (dropdown: keyof DropdownState) => {
//     setDropdownOpen((prev) => ({
//       ...prev,
//       [dropdown]: !prev[dropdown],
//     }));
//   };

//   return (
//     <nav className="bg-white/30 backdrop-blur-md fixed max-w-screen w-screen z-10 shadow-lg h-20 flex items-center gap-10">
//       <div className="w-full px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16 mx-10">
//           <Link href="/" className="flex items-center">
//             <Image
//               src="/logo.png"
//               alt="Logo"
//               width={140}
//               height={100}
//               priority
//             />
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-16 pr-0 sm:pr-24">
//       <Link
//         href="#home"
//         className="text-black font-bold hover:text-blue-300 text-md transition duration-200"
//         onClick={(e) => handleSmoothScroll(e, "#home")}
//       >
//         Home
//       </Link>
   
//       <a
//         href="#service"
//         className="block text-black font-bold hover:text-blue-300 text-md transition duration-200"
//         onClick={(e) => handleSmoothScroll(e, "#service")}
//       >
//         Service
//       </a>
//       <a
//         href="#work"
//         className="text-black font-bold hover:text-blue-300 transition text-md duration-200"
//         onClick={(e) => handleSmoothScroll(e, "#work")}
//       >
//         Work
//       </a>
//       <a
//         href="#consult"
//         className="block text-black font-bold hover:text-blue-300 text-md transition duration-200"
//         onClick={(e) => handleSmoothScroll(e, "#consult")}
//       >
//         Consulting
//       </a>
//       <a
//         href="#faq"
//         className="text-black font-bold hover:text-blue-300 transition text-md duration-200"
//         onClick={(e) => handleSmoothScroll(e, "#faq")}
//       >
//         FAQ
//       </a>
//       <a
//         href="#contact"
//         className="text-black font-bold hover:text-blue-300 transition text-md duration-200"
//         onClick={(e) => handleSmoothScroll(e, "#contact")}
//       >
//         Contact Us
//       </a>
//     </div>

//           {/* Mobile Menu Toggle */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={toggleMenu}
//               className="text-blue-900 font-bold focus:outline-none hover:text-blue-300 transition duration-200"
//               aria-label="Toggle menu"
//             >
//               {isOpen ? (
//                 <FaTimes className="h-6 w-6" />
//               ) : (
//                 <FiMenu className="h-6 w-6" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`${
//           isOpen ? "block" : "hidden"
//         } md:hidden absolute top-20 left-0 w-full bg-white/90 backdrop-blur-lg shadow-lg z-50`}
//       >
//         <div className="px-4 pt-4 pb-3 space-y-2">
//           {/* Services with Dropdown */}
//           <div className="block">
//             <Link
//               href="/about-us"
//               className="block  text-blue-900 font-bold hover:text-blue-300 text-sm transition duration-200"
//               onClick={() => setIsOpen(false)}
//             >
//               About Us
//             </Link>
//             <button
//               onClick={() => toggleDropdown("services")}
//               className="text-blue-900 font-bold hover:text-blue-300 text-sm transition duration-200 flex justify-between w-full"
//             ></button>
//           </div>

//           <Link
//             href="/"
//             className="block text-blue-900 font-bold hover:text-blue-300 text-sm transition duration-200"
//             onClick={() => setIsOpen(false)}
//           >
//             Events
//           </Link>
//           <Link
//             href="/career"
//             className="block text-blue-900 font-bold hover:text-blue-300 text-sm transition duration-200"
//             onClick={() => setIsOpen(false)}
//           >
//             Career
//           </Link>
//           <Link
//             href="/support"
//             className="block text-blue-900 font-bold hover:text-blue-300 text-sm transition duration-200"
//             onClick={() => setIsOpen(false)}
//           >
//             Support
//           </Link>
//           <Link href="/contact">
//             <button
//               onClick={() => setIsOpen(false)} // Close mobile menu on contact button click
//             >
//               <span className="mr-2">Contact Us</span>
//             </button>
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// }



"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaTimes } from "react-icons/fa";
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
    <>
      {/* Floating Navbar */}
      <nav className="fixed top-4 sm:left-28 sm:right-28 z-50 left-2 right-2 bg-white/80 backdrop-blur-lg rounded-md shadow-xl border border-white/20 ">
        <div className="px-6 lg:px-6">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.svg"
                alt="Logo"
                width={50}
                height={80}
                priority
              />
            </Link>

            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex items-center justify-center flex-1">
              <div className="flex items-center space-x-8 lg:space-x-12">
                <Link
                  href="/sapConsulting"
                  className="text-gray-800 font-semibold hover:text-blue-600 text-sm lg:text-base transition duration-300 hover:scale-105"
                  
                >
                SAP Consulting
                </Link>
                
                <a
                  href="/oracleConsulting"
                  className="text-gray-800 font-semibold hover:text-blue-600 text-sm lg:text-base transition duration-300 hover:scale-105"
                 
                >
                  Oracle Consulting
                </a>
                
                <a
                  href="/odooConsulting"
                  className="text-gray-800 font-semibold hover:text-blue-600 text-sm lg:text-base transition duration-300 hover:scale-105"
                >
                  Odoo Consulting
                </a>
                
                <a
                  href="/staffAugmentation"
                  className="text-gray-800 font-semibold hover:text-blue-600 text-sm lg:text-base transition duration-300 hover:scale-105"
             
                >
                 Staff Augmentation
                </a>
                
                <a
                  href="/aboutUs"
                  className="text-gray-800 font-semibold hover:text-blue-600 text-sm lg:text-base transition duration-300 hover:scale-105"
                 
                >
                  About Us
                </a>
                
                <a
                  href="#"
                  className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 text-sm lg:text-base transition duration-300 hover:scale-105 shadow-lg"
                  onClick={(e) => handleSmoothScroll(e, "#contact")}
                >
                  Get Started
                </a>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-gray-800 font-bold focus:outline-none hover:text-blue-600 transition duration-300 p-2"
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
          } md:hidden absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 mx-4 `}
        >
          <div className="px-6 py-4 space-y-3 ">
            <Link
              href="/sapConsulting"
              className="block text-gray-800 font-semibold hover:text-blue-600 py-2 transition duration-300"
              onClick={(e) => {
                
                setIsOpen(false);
              }}
            >
              SAP Consulting
            </Link>
            
            <a
              href="/oracleConsulting"
              className="block text-gray-800 font-semibold hover:text-blue-600 py-2 transition duration-300"
              onClick={(e) => {
                
                setIsOpen(false);
              }}
            >
              Oracle Consulting
            </a>
            
            <a
              href="/odooConsulting"
              className="block text-gray-800 font-semibold hover:text-blue-600 py-2 transition duration-300"
              onClick={(e) => {
               
                setIsOpen(false);
              }}
            >
                Odoo Consulting
            </a>
            
            <a
              href="/staffAugmentation"
              className="block text-gray-800 font-semibold hover:text-blue-600 py-2 transition duration-300"
              onClick={(e) => {
              
                setIsOpen(false);
              }}
            >
               Staff Augmentation
            </a>
            
            <a
              href="/aboutUs"
              className="block text-gray-800 font-semibold hover:text-blue-600 py-2 transition duration-300"
              onClick={(e) => {
               
                setIsOpen(false);
              }}
            >
              About Us
            </a>
            
            <a
              href="#contact"
              className="block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300 text-center mt-4"
              onClick={(e) => {
                handleSmoothScroll(e, "#contact");
                setIsOpen(false);
              }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding behind navbar */}
      <div className="h-24"></div>
    </>
  );
}