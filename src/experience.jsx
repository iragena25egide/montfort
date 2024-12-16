import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";

const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, easing: "ease-in-out", once: true });
  }, []);

  const experiences = [
    {
      id: 1,
      image: "/image/student.jpg",
      text: "This is my second year at Montfort Secondary School Nyamata. The teachers are very reasonable and fair, and the staff is excellent.",
    },
    {
      id: 2,
      image: "/image/student1.jpg",
      text: "This is my second year at Montfort Secondary School Nyamata. I am so excited to share what I have learned because they played a role in my education and skills development.",
    },
    {
      id: 3,
      image: "/image/student2.jpg",
      text: "This is my second year at Montfort Secondary School Nyamata. I can tell you this is a great school. The staff and teachers are excellent.",
    },
    {
      id: 4,
      image: "/image/student3.jpg",
      text: "This is my second year at Montfort Secondary School Nyamata. The environment, the education, and the support make it a wonderful place.",
    },
    {
      id: 5,
      image: "/image/student4.jpg",
      text: "Montfort Secondary School Nyamata has shaped me not just academically but also morally. The teachers are incredibly supportive.",
    },
  ];

  return (
    <div
      className="experience-container px-4 py-8 md:py-12 bg-gray-100"
      data-aos="fade-up"
    >
      {/* Title */}
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-8 text-gray-800 font-sulphur">
        Student Experiences
      </h2>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1} // Default to 1 slide on small screens
        breakpoints={{
          640: { slidesPerView: 1 }, // 1 slide on small screens
          768: { slidesPerView: 2 }, // 2 slides on medium screens
          1024: { slidesPerView: 3 }, // 3 slides on large screens
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000 }}
        className="w-full max-w-7xl mx-auto"
      >
        {experiences.map((item) => (
          <SwiperSlide key={item.id}>
            {/* Experience Card */}
            <div className="slide flex flex-col md:flex-row items-center md:items-start bg-white shadow-md p-4 rounded-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={item.image}
                alt="Student"
                className="h-32 w-32 md:h-40 md:w-40 object-cover rounded-full shadow-lg mb-4 md:mb-0 md:mr-6"
              />
              {/* Text Content */}
              <div className="text text-center md:text-left w-full">
                <p className="text-gray-700 text-sm md:text-base leading-relaxed font-sulphur">
                  {item.text}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Experience;
