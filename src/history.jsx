import React from "react";

const History = () => {
  return (
    <section className="container mx-auto py-16 px-4 md:px-8 mt-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 font-sulphur">
        Our History
      </h2>
      <div className="flex flex-col md:flex-row items-center md:items-start">
        {/* Image Section */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <img
            src="/image/background.jpg" // Replace with the correct image path
            alt="History of Montfort School"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 md:pl-8 text-center md:text-left">
          <p className="text-lg leading-relaxed text-gray-700 mb-4 font-sulphur">
            <strong>Montfort Secondary School, Nyamata</strong>, was founded by 
            the Montfort Brothers of St. Gabriel, a Catholic congregation known 
            for its dedication to education and missionary work across the globe.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mb-4 font-sulphur">
            Established in the heart of Bugesera District, Eastern Province, 
            Rwanda, the school opened its doors with a mission to provide 
            academic excellence and moral education to young learners. From 
            its humble beginnings, it has grown into one of the country's most 
            prestigious schools.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mb-4 font-sulphur">
            Over the decades, Montfort Secondary School has faced and 
            overcome numerous challenges, including rebuilding efforts during 
            Rwanda’s post-genocide recovery period. These efforts were made 
            possible through the unwavering support of the Montfort Brothers 
            and the local community.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 font-sulphur">
            Today, Montfort continues to uphold its legacy of academic 
            excellence and holistic education. It stands as a beacon of hope, 
            discipline, and opportunity for students across Rwanda and beyond, 
            preparing future leaders to shape a better world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default History;
