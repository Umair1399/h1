import React from "react";
import { useNavigate } from "react-router-dom";
import { FaClock, FaSearch } from "react-icons/fa";
import a9 from '../images/a9.png';
import Promiseimpact from "../addonpage/Promiseimpact";

const HireginiePromise = () => {
  const navigate = useNavigate();

  return (
    <>
    <Promiseimpact></Promiseimpact>
    <div className="flex flex-col md:flex-row items-center justify-center bg-white px-4 py-10">
      {/* Left Image Section */}
      <div className="w-full md:w-1/2">
        <img
          src={a9}
          alt="Hourglass"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Right Content Section */}
      <div className="w-full md:w-1/2 bg-gradient-to-r from-orange-500 to-pink-500 text-white p-10 flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-6">Hireginie Promise</h2>

        {/* Feature 1 */}
        <div
          className="flex items-center space-x-4 cursor-pointer hover:opacity-80 transition"
          onClick={() => navigate("/turnaround-time")}
        >
          <FaClock className="text-3xl" />
          <p className="text-lg font-medium">Unbeatable Turn Around Time</p>
        </div>

        <hr className="my-4 border-white opacity-40" />

        {/* Feature 2 */}
        <div
          className="flex items-center space-x-4 cursor-pointer hover:opacity-80 transition"
          onClick={() => navigate("/unmatchable-talent")}
        >
          <FaSearch className="text-3xl" />
          <p className="text-lg font-medium">Unmatchable Talent</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default HireginiePromise;
