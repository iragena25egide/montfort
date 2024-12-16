import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const GalleryPage = () => {
  const images = [
    "/image/block.jpg",
    "/image/com.jpg",
    "/image/dinner.jpg",
    "/image/girl.jpg",
    "/image/friend.jpg",
    "/image/g.jpg",
    "/image/gg.jpg",
    "/image/ggg.jpg",
    "/image/play.jpg",
    "/image/st.jpg",
    "/image/student.jpg",
    "/image/student1.jpg",
    "/image/student2.jpg",
    "/image/student3.jpg",
    "/image/student4.jpg",
    "/image/student5.jpg",
    "/image/trad.jpg",
    "/image/traditional.jpg",
    "/image/trip.jpg",
    "/image/trip2.jpg",
    "/image/visitor.jpg",
    "/image/xx.jpg",
  ];

  
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <div className="bg-gray-50 py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-8"
          data-aos="fade-down"
        >
          School Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-lg"
              data-aos="zoom-in"
              data-aos-delay={`${index * 50}`} 
            >
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-[240px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
