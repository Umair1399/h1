import React from 'react';
import logo from '../images/poster.png';

function Dimpact() {
  return (
    <div
      className="relative w-full h-[200px] sm:h-[400px] md:h-[350px] lg:h-[460px] bg-cover bg-center"
      style={{ backgroundImage: `url(${logo})` }}
    >
      {/* Content */}
      <div className="absolute top-1/3 left-2 sm:left-10 transform -translate-y-1/2">
        {/* Optional Main Heading */}
        {/* <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
          OUR <span className="text-gray-400">STORY</span>
        </h1> */}

        <div className="flex flex-col sm:flex-row sm:items-center gap-0 mt-1">
          <span className="text-red-500 text-xl sm:text-2xl">›</span>
          <a
            href="#"
            className="text-red-500 hover:text-red-700 font-semibold text-xl sm:text-2xl md:text-5xl leading-snug"
          >
            D & I <br className="sm:hidden" /> IMPACT
          </a>
        </div>
      </div>
    </div>
  );
}

export default Dimpact;
