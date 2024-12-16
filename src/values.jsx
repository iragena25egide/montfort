import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


const MissionVision = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); 
  }, []);
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8 mt-20" >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 font-sulphur">
          Our Mission & Vision
        </h2>
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-8 md:space-y-0 md:space-x-12">
          {/* Mission */}
          <div className="w-full md:w-1/2 p-6 bg-white shadow-lg rounded-lg" data-aos="fade-down">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4 font-sulphur">
              Mission
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg font-sulphur">
            Our mission at Montfort Secondary School Nyamata is to provide quality education that fosters holistic development, rooted in Catholic values. We are committed to nurturing the minds and hearts of our students through academic excellence, discipline, and character formation.To educate students in a Christ-centered environment with an emphasis on Catholic teachings and traditions.
            </p>
          </div>

          {/* Vision */}
          <div className="w-full md:w-1/2 p-6 bg-white shadow-lg rounded-lg" data-aos="fade-down">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4 font-sulphur">
              Vision
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg font-sulphur">
            As of my knowledge cutoff date in September 2021, I don't have specific access to the vision statement of Montfort Secondary School Nyamata. However, if you are looking for the vision or mission statement of the school, you might find this information on their official website or by reaching out directly to the school administration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
