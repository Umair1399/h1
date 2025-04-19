import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../images/image copy 2.png';

function ImpactSection() {
  const navigate = useNavigate();
  const [showEmailMessage, setShowEmailMessage] = useState(false);

  const handleRegisterClick = () => {
    // navigate('/bbbp-program'); // Navigate to the program route
    setShowEmailMessage(true); // Show the message after click
  };

  return (
    <div className="flex flex-col md:flex-row items-center bg-white px-6 md:px-16 py-12">
      {/* Left Side (Text) */}
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Hireginie D & I Impact
        </h2>
        <p className="text-gray-600 mb-4">
          Qualified specially abled people, home makers and domain experts on post maternity
          long breaks have been suffering the exclusion and biases in the mainstream job
          market for ages.
        </p>
        <p className="text-gray-600 mb-4">
          Under our <strong>“Business Beyond Bias”</strong> programme the qualified specially abled
          people, Home makers and domain experts on long career break undergo 3 months
          Paid/unpaid Internship programme designed and mentored by industry leaders.
        </p>
        <p className="text-gray-600 mb-4">
          At Hireginie our seasoned recruiters not only work on sourcing and recruiting for our
          client's requirements but also train and mentor them on recruiting tools & techniques.
          Post successful completion of rigorous talent acquisition training for 3 months, they
          have a choice to take up a full-time opportunity as talent Partners (permanent WFH) at
          Hireginie or with our interested clients. Alternatively, they can also exercise their choice
          to be an entrepreneur as a freelance head-hunting partner with Hireginie.
        </p>
        <p className="text-gray-600 mb-6">
          We aren't philanthropists, we are problem solvers for the businesses and our business.
        </p>
        <p className="text-xl font-semibold text-gray-800 mb-6">
          “That's why we have a very strong foothold across the geographies.”
        </p>

        {/* Register Button */}
        <button
          onClick={handleRegisterClick}
          className="bg-gray-800 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-700 transition"
        >
          Register for BBBP program
        </button>

        {/* Show Message After Button Click */}
        {showEmailMessage && (
          <p className="mt-4 text-gray-700">
            Enquire to go to gmail{' '}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScndt6V6_-k9oXCMzGU_EMLoqlV3oWV3MbP70zwrQqiT-XoLA/viewform"
              className="text-blue-600 underline hover:text-blue-800"
            >
              job
            </a>
          </p>
        )}
      </div>

      {/* Right Side (Image) */}
      <div className="md:w-1/2 mt-8 md:mt-0">
        <div className="relative w-full">
          <img
            src={logo}
            alt="Interview"
            className="rounded-full w-full max-w-md mx-auto"
          />
          <div className="absolute inset-0 border-[1.5px] border-dotted border-gray-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

export default ImpactSection;
