import React from "react";

const AboutUs = () => {
  return (
    <section className="container mx-auto py-16 px-4 md:px-8 mt-20">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        {/* Image Section */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <img
            src="/image/background.jpg" // Replace with the correct path to the image
            alt="Montfort Secondary School"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        
        {/* Text Section */}
        <div className="w-full md:w-1/2 md:pl-8 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-sulphur mb-6 text-gray-800">About Us</h2>
          <p className="text-1xl font-sulphur leading-relaxed text-gray-700 mb-4">
            <strong>Montfort Secondary School, Nyamata</strong>, is a prestigious institution in Rwanda 
            located in the Eastern Province, near the town of Nyamata in Bugesera District. Named after 
            the Montfort Brothers of St. Gabriel, the school is committed to providing values-based education 
            alongside academic excellence.
          </p>
          <p className="text-1xl font-sulphur leading-relaxed text-gray-700 mb-4">
            Rooted in Catholic teachings, the school emphasizes moral, spiritual, and academic growth. It 
            offers both Ordinary and Advanced Level education with a reputation for strong performance in 
            sciences and humanities.
          </p>
          <p className="text-1xl font-sulphur leading-relaxed text-gray-700">
            Beyond academics, students engage in extracurricular activities such as sports, arts, and 
            community service. Montfort nurtures leadership, discipline, and global citizenship, shaping 
            well-rounded individuals ready for the future.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
