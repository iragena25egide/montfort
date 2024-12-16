import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // To toggle the mobile menu

  // Scroll effect to change header style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 p-2 transition-all duration-300 ${
        isScrolled ? "bg-gray-900 shadow-md" : "bg-gray-900 bg-opacity-99"
      }`}
    >
      {/* Header Container */}
      <div className="flex justify-between items-center px-4 md:px-8 py-4">
        {/* Left Container */}
        <div className="flex items-center ">
            <Link to={'/'}> <img
            src="/image/logo.jpg"
            alt="Logo"
            className="h-10 md:h-16 object-contain rounded-full"
          /></Link>
         
         <Link to={'/'}><h4 className="text-xl md:text-2xl text-gray-200 ml-4 font-bold cursor-pointer font-sulphur">
            Montfort Secondary School
          </h4></Link>
          
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-200 focus:outline-none"
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
        </div>

        {/* Right Container */}
        <nav
          className={`${
            isMenuOpen
              ? "block absolute top-full left-0 w-full bg-gray-900"
              : "hidden"
          } md:block`}
        >
          <ul className="flex flex-col md:flex-row md:items-center md:space-x-8 text-gray-200 font-semibold text-base">
          
            <li className="relative group cursor-pointer hover:text-gray-300 transition duration-300 font-sulphur">
              OUR SCHOOL
              {/* Dropdown */}
              <div
                className="absolute left-0 mt-0 w-40 bg-white shadow-lg rounded-lg text-black z-10 opacity-0 group-hover:opacity-100 
                  pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300"
              >
                <ul className="flex flex-col p-2 space-y-2">
                  <li className="hover:bg-gray-200 px-4 py-2 rounded cursor-pointer transition duration-200">
                   <Link to={'/history'}>History</Link>
                  </li>
                  <li className="hover:bg-gray-200 px-4 py-2 rounded cursor-pointer transition duration-200">
                    <Link to={'/mission-vision'}>Mission & Vision</Link>   
                  </li>
                  <li className="hover:bg-gray-200 px-4 py-2 rounded cursor-pointer transition duration-200">
                   <Link to={'/staff'}>Staff</Link>
                  </li>
                
                </ul>
              </div>
            </li>
            <li className="hover:text-gray-300 cursor-pointer transition duration-300 font-sulphur">
              <Link to={'/about-us'}>ABOUT US</Link>
            </li>
            <li className="hover:text-gray-300 cursor-pointer transition duration-300 font-sulphur">
              <Link to={'/gallery'}>GALLERY</Link>
            </li>
            <li className="hover:text-gray-300 cursor-pointer transition duration-300 font-sulphur">
              <Link to={'/contact-us'}>CONTACT US</Link> 
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
