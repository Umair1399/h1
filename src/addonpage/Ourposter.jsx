import React from 'react';
import logo from '../images/poster.png';

function Ourposter() {
  return (
    <div
      className="relative w-full h-[200px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-cover bg-center"
      style={{ backgroundImage: `url(${logo})` }}
    >
      {/* Content */}
      <div className="absolute top-1/3 left-5 sm:left-10 transform -translate-y-1/2">
        {/* <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
          OUR <span className="text-gray-400">STORY</span>
        </h1> */}
        <div className="flex items-center gap-2 mt-4">
          <span className="text-red-500 text-xl sm:text-2xl">›</span>
          <a
            href="#"
            className="text-red-500 hover:text-red-700 font-semibold text-xl sm:text-2xl md:text-5xl"
          >
            OUR STORY
          </a>
        </div>
      </div>
    </div>
  );
}

export default Ourposter;
