import React from 'react'
import { Link } from "react-router-dom";
import logo from '../images/home.png'
function Hero() {
    return (
        <>
      <div className="relative bg-gray-50">
      <div className="container mx-auto  flex flex-col-reverse md:flex-row items-center justify-between mb-0 ">
        {/* Left Side */}
        <div className="text-center md:text-left max-w-2xl px- md:px-15 lg:px-25 py-12 md:py-20">
          <h1 className="text-6xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Your No.Talent <span className="text-red-500 underline">Hiring</span> Partner
          </h1>
          <p className="mt-4">
            <span className="inline-block text-gray-700 px-4 py-2 rounded-md text-3xl">
              TO HIRE OR GET HIRED
            </span>
          </p>
          <div className="mt-6">
            {/* <button className="border-2 border-gray-800 text-gray-800 px-6 py-3 rounded-md hover:bg-red-400 transition">
              CONNECT WITH US
            </button> */}
          </div>
        </div>

        {/* Right Side (Image) */}
        <div className="mt-8 md:mt-0 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl px-2 mb-0">
          <img
            src={logo}
            alt="Team"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
        </>
    )
}

export default Hero
