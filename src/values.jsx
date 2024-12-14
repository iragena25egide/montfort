import React from "react";

const MissionVision = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8 mt-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 font-sulphur">
          Our Mission & Vision
        </h2>
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-8 md:space-y-0 md:space-x-12">
          {/* Mission */}
          <div className="w-full md:w-1/2 p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4 font-sulphur">
              Mission
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg font-sulphur">
              Our mission at Montfort Secondary School is to provide a 
              holistic education that integrates academic excellence, 
              character formation, and spiritual development. Guided by 
              Catholic teachings, we aim to nurture responsible, disciplined, 
              and ethical individuals ready to contribute to their communities 
              and the world.
            </p>
          </div>

          {/* Vision */}
          <div className="w-full md:w-1/2 p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4 font-sulphur">
              Vision
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg font-sulphur">
              Our vision is to be a beacon of educational excellence, known 
              for fostering lifelong learners who embody integrity, 
              leadership, and service. We aspire to prepare students to meet 
              global challenges with courage, competence, and compassion, while 
              preserving the values of our Rwandan heritage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
