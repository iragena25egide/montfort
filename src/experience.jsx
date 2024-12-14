import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const Experience = () => {
  const experiences = [
    { id: 1, image: "/image/student.jpg", text: "This is my second year at Montfort Secondary school nyamata. I can tell you GA is a great school. The teachers are very reasonable and fair. The staff is excellent The teachers are very reasonable and fair. The staff is excellent The teachers are very reasonable and fair. The staff is excellent The teachers are very reasonable and fair. The staff is excellentThe teachers are very reasonable and fair. The staff is excellent" },
    { id: 2, image: "/image/student1.jpg", text: "This is my second year at Montfort Secondary school nyamata. I can tell you GA is a great school. The teachers are very reasonable and fair. The staff is excellent The teachers are very reasonable and fair. The staff is excellent The teachers are very reasonable and fair. The staff is excellent The teachers are very reasonable and fair. The staff is excellentThe teachers are very reasonable and fair. The staff is excellent" },
    { id: 3, image: "/image/student2.jpg", text: "This is my second year at Montfort Secondary school nyamata. I can tell you GA is a great school. The teachers are very reasonable and fair. The staff is excellent The teachers are very reasonable and fair. The staff is excellent The teachers are very reasonable and fair. The staff is excellent The teachers are very reasonable and fair. The staff is excellentThe teachers are very reasonable and fair. The staff is excellent" },
    { id: 4, image: "/image/student3.jpg", text: "This is my second year at Montfort Secondary school nyamata. I can tell you GA is a great school. The teachers are very reasonable and fair. The staff is excellent The teachers are very reasonable and fair. The staff is excellent The teachers are very reasonable and fair. The staff is excellent The teachers are very reasonable and fair. The staff is excellentThe teachers are very reasonable and fair. The staff is excellent" },
    { id: 5, image: "/image/student4.jpg", text: "This is my second year at Montfort Secondary school nyamata. I can tell you GA is a great school. The teachers are very reasonable and fair. The staff is excellent The teachers are very reasonable and fair. The staff is excellent The teachers are very reasonable and fair. The staff is excellent The teachers are very reasonable and fair. The staff is excellentThe teachers are very reasonable and fair. The staff is excellent" }
  ];

  return (
    <div className="experience-container p-4 md:p-8 bg-gray-100 ">
      <h2 className="text-center text-3xl font-bold mb-8 text-gray-800 font-sulphur">
        Student Experiences
      </h2>
      {/* Swiper Carousel */}
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000 }}
        className="w-full max-w-6xl mx-auto"
      >
        {experiences.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="slide flex flex-col md:flex-row items-center h-[300px] bg-white shadow-lg p-4 rounded-lg">
              <img
                src={item.image}
                alt="Student"
                className="h-40 w-40 object-cover rounded-full shadow-md mb-4 md:mb-0 md:mr-6"
              />
              <div className="text text-center  md:text-left w-full">
                <p className="text-gray-600 text-lg leading-relaxed font-sulphur">{item.text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Experience;
