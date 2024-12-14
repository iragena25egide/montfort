import React, { useState } from "react";

const GalleryPage = () => {
  const images = [
    "/image/student.jpg",
    "/image/student1.jpg",
    "/image/student2.jpg",
    "/image/student6.jpg",
    "/image/student3.jpg",
    "/image/student4.jpg",
    "/image/student5.jpg",
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Alternating layout (3 images + 2 images per row)
  const totalPages = Math.ceil(images.length / itemsPerPage);

  // Get the paginated images for the current page
  const getPaginatedImages = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return images.slice(startIndex, startIndex + itemsPerPage);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto p-4 mt-20">
      <h2 className="text-center text-3xl font-bold mb-4 font-sulphur mt-4 text-gray-800">
        Gallery of Saint Montfort
      </h2>

      {/* Gallery Grid with Alternating Rows */}
      <div className="space-y-6">
        {getPaginatedImages().map((image, index) => {
          const isThreeImageRow = index % 2 === 0; // Alternate between 3 and 2
          return (
            <div
              key={index}
              className={`grid ${
                isThreeImageRow ? "grid-cols-3" : "grid-cols-2"
              } gap-4`}
            >
              {Array(isThreeImageRow ? 3 : 2)
                .fill(null)
                .map((_, i) => {
                  const imageIndex = index + i;
                  if (imageIndex >= images.length) return null; // Prevent out-of-range rendering
                  return (
                    <div key={i} className="relative group">
                      <img
                        src={images[imageIndex]}
                        alt={`Gallery Image ${imageIndex + 1}`}
                        className="w-full h-40 object-cover rounded-lg transition-transform transform group-hover:scale-105"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <p className="text-white font-bold">
                         
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>
          );
        })}
      </div>

      {/* Pagination Buttons */}
      <div className="flex justify-center mt-8 space-x-4">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
          className={`px-4 py-2 rounded-lg ${
            currentPage === 1
              ? "bg-gray-400 text-gray-600 cursor-not-allowed"
              : "bg-gray-800 text-white hover:bg-gray-700"
          }`}
        >
          Previous
        </button>
        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
          className={`px-4 py-2 rounded-lg ${
            currentPage === totalPages
              ? "bg-gray-400 text-gray-600 cursor-not-allowed"
              : "bg-gray-800 text-white hover:bg-gray-700"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default GalleryPage;
