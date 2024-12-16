import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  const images = [
    '/image/background.jpg', 
    '/image/house.jpg',  
  
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

  
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval); 
  }, [images.length]);

  return (
    <div
      className="relative w-full h-fit bg-cover bg-center shadow-lg mt-28 transition-all duration-1000"
      style={{
        backgroundImage: `url('${images[currentImageIndex]}')`,
      }}
    >
      {/* Overlay with Shadow */}
      <div className="absolute inset-0 bg-gray-800 opacity-60"></div>

      {/* Centered Content */}
      <div className="relative flex items-center justify-center h-full px-4">
        <div
          className="bg-gray-800 bg-opacity-100 shadow-xl rounded-lg p-8 md:p-12 mt-80 max-w-3xl text-center"
          data-aos="fade-up"
        >
          <h1
            className="text-3xl md:text-4xl font-bold text-white mb-4 font-sulphur"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Montfort Secondary School Nyamata
          </h1>
          <p
            className="text-lg md:text-xl font-medium text-gray-200 italic font-sulphur"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            "Education Meets Excellence"
          </p>
        </div>
      </div>

      {/* Bottom Shadow for Overflow Effect */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
};

export default Home;
