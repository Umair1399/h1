import React from "react";

const ServicesSection = () => {
  // Placeholder image URLs - replace with your actual images
  const serviceImages = {
    gcc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
    startup: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
    techfirst: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
    it: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80"
  };

  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">EMPOWERING BUSINESS</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-red-600">WITH EXCEPTIONAL TALENTS</h2>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {/* GCC | CAPTIVES Card */}
        <a 
          href="/gcc-captives" 
          className="group border-2 border-gray-200 rounded-lg overflow-hidden hover:border-blue-500 hover:shadow-lg transition-all duration-300"
        >
          <div className="h-48 overflow-hidden">
            <img 
              src={serviceImages.gcc} 
              alt="GCC Captives" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-3">GCC | CAPTIVES</h3>
            <p className="text-gray-600 mb-4">
              GCCs have become instrumental in innovation and growth. Crafting a high-performing captive team is the need of the hour.
            </p>
            {/* <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-800">
              MORE DETAILS →
            </div> */}
          </div>
        </a>

        {/* STARTUP Card */}
        <a 
          href="/startup" 
          className="group border-2 border-gray-200 rounded-lg overflow-hidden hover:border-blue-500 hover:shadow-lg transition-all duration-300"
        >
          <div className="h-48 overflow-hidden">
            <img 
              src={serviceImages.startup} 
              alt="Startup Services" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-3">STARTUP</h3>
            <p className="text-gray-600 mb-4">
              We understand the unique challenges and opportunities that startups face, and help them build a high-performing team.
            </p>
            {/* <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-800">
              MORE DETAILS →
            </div> */}
          </div>
        </a>

        {/* TECHFIRST COMPANIES Card */}
        <a 
          href="/techfirst-companies" 
          className="group border-2 border-gray-200 rounded-lg overflow-hidden hover:border-blue-500 hover:shadow-lg transition-all duration-300"
        >
          <div className="h-48 overflow-hidden">
            <img 
              src={serviceImages.techfirst} 
              alt="Techfirst Companies" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-3">TECHFIRST COMPANIES</h3>
            <p className="text-gray-600 mb-4">
              We specialize in finding exceptional tech talents that possess the skills and experience to drive your product forward.
            </p>
            {/* <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-800">
              MORE DETAILS →
            </div> */}
          </div>
        </a>

        {/* IT | OFFSHORING Card */}
        <a 
          href="/it-offshoring" 
          className="group border-2 border-gray-200 rounded-lg overflow-hidden hover:border-blue-500 hover:shadow-lg transition-all duration-300"
        >
          <div className="h-48 overflow-hidden">
            <img 
              src={serviceImages.it} 
              alt="IT Offshoring" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-3">IT | OFFSHORING</h3>
            <p className="text-gray-600 mb-4">
              Whether changing market conditions or evolving tech landscape, elevate your business with our tailored IT talent Solutions.
            </p>
            {/* <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-800">
              MORE DETAILS →
            </div> */}
          </div>
        </a>
      </div>

      {/* CTA Button */}
      <div className="text-center">
        <a 
          href="/contact" 
          className="inline-block bg-blue-600 hover:bg-red-700 text-white font-bold py-3 px-6 md:px-8 rounded-lg transition-colors duration-300 text-sm md:text-base"
        >
          Know more about our services. Talk To Our Talent Advisor!
        </a>
      </div>
    </div>
  );
};

export default ServicesSection;