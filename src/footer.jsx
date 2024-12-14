import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiTwitterXFill } from "react-icons/ri";
import { Link } from 'react-router-dom';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full mt-10">
     

       

      {/* Footer Content Section */}
      <div className="bg-gray-900 text-white py-4 px-6 md:px-6 flex flex-wrap justify-between">
        {/* Logo Section */}
        <div className="w-full flex md:w-1/4 mb-4 md:mb-0">
          <img
              src="/image/logo.jpg"
              alt="Logo"
              className="w-10 h-16 md:w-16 rounded-full"
            />
            <h4 className="text-1xl font-small ml-3 mt-5 font-sulphur">Montfort Secondary School</h4>
        </div>

        {/* Brand Section */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h4 className="text-1xl font-small font-sulphur">Motto</h4>
          <p className="text-gray-400 my-2 cursor-pointer text-sm font-sulphur">Knowledge</p>
          <p className="text-gray-400 my-2 cursor-pointer text-sm font-sulphur">Discpline</p>
          <p className="text-gray-400 my-2 cursor-pointer text-sm font-sulphur">Service</p>
        </div>

        {/* News Section */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h4 className="text-1xl font-small font-sulphur">School Features</h4>
          <p className="text-gray-400 my-2 cursor-pointer text-sm font-sulphur">Religious Foundation and Values</p>
          <p className="text-gray-400 my-2 cursor-pointer text-sm">Academic Excellence</p>
          <p className="text-gray-400 my-2 cursor-pointer text-sm">Extracurricular Activities</p>
          <p className="text-gray-400 my-2 cursor-pointer text-sm">Community Engagement</p>
          <p className="text-gray-400 my-2 cursor-pointer text-sm">Facilities</p>
          <p className="text-gray-400 my-2 cursor-pointer text-sm">Reputation</p>
        </div>

        {/* Social Media Section */}
        <div className="w-full md:w-1/4 flex justify-between items-center space-x-4">
          <FaFacebook color="#FEFEFE" size={22} cursor={'pointer'}/>
          <Link to={'https://www.instagram.com/'} target='_blank'> <FaInstagram color="#FEFEFE" size={22} cursor={'pointer'}/></Link>
         <Link to={'montfortss99@gmail.com'}><MdEmail color="#FEFEFE" size={22} cursor={'pointer'}/></Link> 
          <Link to={'https://www.youtube.com/@MontfortRwanda1'}><FaYoutube color="#FEFEFE" size={22} cursor={'pointer'}/></Link> 
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="bg-gray-900 py-2 text-center border-t border-gray-600">
        <p className="text-gray-400 text-sm font-small font-sulphur">
          &copy; {currentYear} Montfort Secondary School. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
