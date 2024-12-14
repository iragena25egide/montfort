import React from "react";

const Message = () => {
  return (
    <div className="message-container flex flex-col md:flex-row items-center justify-between p-12 md:p-8 bg-gray-100 shadow-lg rounded-lg">
      {/* Text Section */}
      <div className="text md:w-full p-4 text-center md:text-left">
        <h4 className="text-2xl font-bold text-gray-800 mb-4 md:text-2xl">
          ACTING PRINCIPAL'S MESSAGE
        </h4>
        <p className="text-gray-600 leading-relaxed text-base md:text-sm">
          Thank you for your interest in our school. We have found that the
          opportunity to see a range of schools can help best inform parents in
          finding the best match. At Glory Academy, we promote a culture of
          self-awareness; encouraging and developing individual potential and
          personal qualities, such as those of leadership, critical thinking,
          and responsibility. We believe in placing each student at the center
          of their own learning and development. Our students leave us as
          resilient, independent, confident and self-aware young adults, proud
          to have been members of Glory Academy, and ready to take their place
          in the wider community.
          <br />
          <br />
          We hope that you will find the time to review our website, talk to
          school administrators, and explore our resource pages. We look forward
          to welcoming you! The registration for all Glory Academy programmes
          (Nursery, Primary, General secondary education, and TVET) is ongoing.
          
        </p>

        <p className="text-gray-800 mt-4 font-semibold">Brother RUTSINDINTWARANE Alexandre</p>
        <span className="text-gray-600 italic text-sm">
            Head Master
        </span>
      </div>

      {/* Image Section */}
      <div className="image md:w-1/2 flex justify-center mt-6 md:mt-0">
        <img
          src="/image/headMaster.jpg"
          alt="Headmaster"
          className="rounded-full shadow-lg h-64 w-64 object-cover"
        />
      </div>
    </div>
  );
};

export default Message;
