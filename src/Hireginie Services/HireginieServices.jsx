// HireginieServices.jsx
import React from 'react';
import { FaSearch, FaUserTie, FaTasks, FaUserCheck } from 'react-icons/fa';

const services = [
  {
    id: 1,
    title: 'Talent Sourcing',
    description:
      'Our precision sourcing strategy led by the domain experts and the crowd hunting advantage is an absolute unique value proposition for unbeatable TAT and Unmatchable Talent. Hireginie accelerator hiring strategy is a package in itself.',
    icon: <FaSearch size={24} />,
  },
  {
    id: 2,
    title: 'Interviewer On Demand',
    description:
      'We have a large network of domain experts as freelance interviewers to identify the perfect fit for the position and your company through precision and accurate evaluation.',
    icon: <FaUserTie size={24} />,
  },
  {
    id: 3,
    title: 'Recruitment Process Outsourcing',
    description:
      'Our unique recruitment process outsourcing proposition is the first of its kind in the industry. Get dedicated seasoned recruiters on demand for your scale-up strategy without additional cost.',
    icon: <FaTasks size={24} />,
  },
  {
    id: 4,
    title: 'Outplacement Services',
    description:
      "Don't lay off, just see off, the employees who once were building blocks, with a nice farewell gift. Layoffs are emotionally draining and mostly unavoidable.",
    icon: <FaUserCheck size={24} />,
  },
];

const HireginieServices = () => {
  return (
    <div className="py-16 bg-gray-50">
      <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">
        Hireginie Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-16">
        {services.map((service) => (
          <div
            key={service.id}
            className="p-6 border border-gray-300 rounded-lg shadow-sm transition-all duration-300 group 
                       hover:bg-red-600 hover:border-red-600"
            style={{ cursor: 'default' }} // 👈 disables pointer on hover
          >
            <div className="flex items-center mb-4">
              <div className="mr-4 text-gray-600 group-hover:text-white">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-white">
                {service.title}
              </h3>
            </div>
            <p className="text-sm text-gray-600 group-hover:text-white">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HireginieServices;
