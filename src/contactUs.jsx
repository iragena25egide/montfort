import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); 
  }, []);
  return (
    <div className="container mx-auto p-8 mt-20">
      <h2 className="text-center text-3xl font-sulphur mb-8 text-gray-900">
        Contact Us
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Google Map Section */}
        <div className="h-72 md:h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.024569034298!2d30.10354887350683!3d-2.144274037162719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19c354dd90bc8d6d%3A0xf83840baf32ff2d0!2sMontfort%20Secondary%20School!5e0!3m2!1sen!2srw!4v1734195827050!5m2!1sen!2srw" 
        style={{ border: "0", width: "100%", height: "100%" }} 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        {/* Head Master Information Section */}
        <div className=" p-6 rounded-lg " data-aos="fade-down">
          <h3 className="text-xl font-bold text-gray-800 mb-4 font-sulphur">
            Head Master Information
          </h3>
          <p className="text-gray-700 text-lg">
            <span className="font-semibold font-sulphur">Name:</span> Brother RUTSINDINTWARANE Alexandre
          </p>
          <p className="text-gray-700 text-lg mt-2">
            <span className="font-semibold font-sulphur">Position:</span> Head Master of Montfort secondary school nyamata
          </p>
          <p className="text-gray-700 text-lg mt-2">
            <span className="font-semibold font-sulphur">Email:</span>{" "}
            <a
              href="mailto:montfortss99@gmail.com"
              className="text-blue-500 hover:underline font-sulphur"
            >
              montfortss99@gmail.com
            </a>
          </p>
          <p className="text-gray-700 text-lg mt-2">
            <span className="font-semibold font-sulphur">Phone:</span>{" "}
            <a href="tel:+250 789 808 847" className="text-blue-500 hover:underline font-sulphur">
            +250 789 808 847
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
