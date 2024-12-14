import React from 'react';

const Home = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center shadow-lg mt-20"
      style={{ backgroundImage: "url('/image/background.jpg')" }}
    >
      {/* Overlay with Shadow */}
      <div className="absolute inset-0 bg-gray-800 opacity-60"></div>

      {/* Centered Content */}
      <div className="relative flex flex-col items-center justify-center h-full text-white text-center px-4">
    
        <p className="mt-4 text-lg md:text-3xl max-w-3xl drop-shadow-lg text-white font-sulphur">
          Inspiring the next generation of learners and leaders
        </p>
      </div>

      {/* Bottom Shadow for Overflow Effect */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
};

export default Home;
