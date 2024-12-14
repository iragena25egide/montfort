import React from "react";

const staffData = [
  {
    id: 1,
    name: "Brother RUTSINDINTWARANE Alexandre",
    role: "Headmaster",
    phone:"+250 789 808 847",
    image: "/image/headMaster.jpg",
    description: "Provides strategic leadership to the school and oversees all academic and administrative activities.",
  },
  {
    id: 2,
    name: "NKORERIMANA JEAN Bosco",
    role: "Secretary",
    phone:"+250 873 027 511",
    image: "/image/secretary.jpg",
    description: "Handles correspondence, schedules appointments, and ensures smooth office operations.",
  },
  {
    id: 3,
    name: "Brother NKURIKIYIMANA Martin",
    role: "Director of Discipline (DoD)",
    phone:"+250 784 716 522",
    image: "/image/dod.jpg",
    description: "Maintains discipline in the school, ensuring a positive and focused environment.",
  },
  {
    id: 4,
    name: "SIBOMANA JEAN Bosco",
    role: "Director of Studies (DoS)",
    phone:"+250 788 648 788",
    image: "/image/dos.jpg",
    description: "Leads academic planning and supervises curriculum delivery across all levels.",
  },
  {
    id: 5,
    name: "KAYIGAMBA Pascal",
    role: "Bursar",
    image: "/image/bursar.jpg",
    phone:"+250 788 463 751",
    description: "Manages the school's finances, including budgets, expenses, and financial planning.",
  },
  {
    id: 6,
    name: "Brother MAFURU FRANCAIS Flavianus",
    role: "Discipline Officer",
    image: "/image/discpline.jpg",
    phone:"+250 723 873 856",
    description: "Ensures adherence to school rules and fosters a safe and respectful learning atmosphere.",
  },
  {
    id: 7,
    name: "UWASE Salha",
    role: "Storekeeper",
    image: "/image/storekeeper.jpg",
    phone:"+250 784 876 175",
    description: "Oversees the management of school supplies and inventory records.",
  },
  {
    id: 8,
    name:"NTIRIBINYANGE Dione",
    role: "Patron",
    image: "/image/patron.jpg",
    phone:"+250 782 566 812",
    description: "Supports the holistic development of students and oversees extracurricular activities.",
  },
  {
    id: 9,
    name:"UWINGABIRE Clemantine",
    role: "Matron",
    image: "/image/matron.jpg",
    phone:"+250 793 030 912",
    description: "Looks after the welfare of students, especially in hostel-related activities.",
  },
];

const Staff = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8 mt-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-8 font-sulphur">
          Meet Our Staff
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {staffData.map((staff) => (
            <div key={staff.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src={staff.image}
                alt={staff.name}
                className="h-52 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-1xl font-semibold font-sulphur text-blue-700 mb-2">{staff.name}</h3>
                <p className="text-sm text-gray-900 font-medium font-sulphur mb-4">{staff.phone}</p>
                <p className="text-sm text-blue-600 font-medium font-sulphur mb-4">{staff.role}</p>
                <p className="text-gray-700 text-sm leading-relaxed font-sulphur">{staff.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Staff;
