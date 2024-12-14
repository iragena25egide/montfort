import React from 'react';

const Gallery = () => {
  const images = [
    "/image/student.jpg",
    "/image/student1.jpg",
    "/image/student2.jpg",
    "/image/student6.jpg",
    "/image/student.jpg",
    "/image/student5.jpg",
    "/image/student5.jpg",
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-center text-3xl font-bold mb-8 text-gray-800">
        Image Gallery
      </h2>
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <div key={index} className="relative group">
            {/* Image */}
            <img
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-full object-cover rounded-lg transition-all duration-300 transform group-hover:scale-105"
            />
            {/* Overlay content (hidden by default) */}
            <div className="absolute inset-0 bg-black bg-opacity-20 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
             
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-8">
      <button className="px-8 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 hover:bg-gray-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50">
  View More Images
</button>

      </div>
    </div>
  );
};

export default Gallery;
