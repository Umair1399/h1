import React from 'react'
import logo from '../images/hire.png'
const services = [
    {
      id: 1,
      title: "Permanent Hiring",
      description: "Hire talents that fits and scales with your business",
      category: "SERVICES",
      image: "/images/perm-hiring.jpg", // Replace with actual image path
    },
    {
      id: 2,
      title: "Staff Augmentation",
      description:
        "Largest hiring pool to fill Non-IT & general staffing positions",
      category: "SERVICES",
      image: "/images/staff-aug.jpg", // Replace with actual image path
    },
    {
      id: 3,
      title: "HR Outsourcing",
      description:
        "Stealth mode or VC backed, we find the right talent for your startups",
      category: "SERVICES",
      image: "/images/hr-outsourcing.jpg", // Replace with actual image path
    },
    {
      id: 4,
      title: "GCC as a Service",
      description: "Find the best workforce for your offshore workplace",
      category: "SERVICES",
      image: "/images/gcc-service.jpg", // Replace with actual image path
    },
  ];
function Talior() {
    return (
        <>
        <div className="bg-[#f8f9fc] py-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
          TAILOR FIT TALENT SOLUTION
        </h2>
        <p className="text-lg md:text-xl font-semibold text-gray-800 mt-2">
          FROM STARTUPS TO FORTUNE 500
        </p>
      </div>

      {/* Services Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 lg:px-16">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* Image Section */}
            <img
              src={logo}
              alt={service.title}
              className="w-full h-64 object-cover"
            />

            {/* Content Section */}
            <div className="p-6 text-center">
              <span className="text-sm font-semibold text-blue-600 uppercase">
                {service.category}
              </span>
              <h3 className="text-lg font-bold text-gray-800 mt-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-2">{service.description}</p>

              {/* Arrow Button */}
              <div className="mt-4 flex justify-center">
                <button className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
    )
}

export default Talior
