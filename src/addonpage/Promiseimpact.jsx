import React from 'react';
import logo from '../images/poster.png';

function Promiseimpact() {
  return (
    <div
      className="relative w-full h-[200px] sm:h-[400px] md:h-[350px] lg:h-[450px] bg-cover bg-center"
      style={{ backgroundImage: `url(${logo})` }}
    >
      {/* Content */}
      <div className="absolute top-1/3 left-2 sm:left-10 transform -translate-y-1/2">
        {/* Title (optional): If you want a heading, you can uncomment and adjust below */}
        {/* <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
          OUR <span className="block sm:inline text-gray-400">STORY</span>
        </h1> */}

        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-0">
          <span className="text-red-500 text-xl sm:text-2xl">›</span>
          <a
            href="#"
            className="text-red-500 hover:text-red-700 font-semibold text-xl sm:text-2xl md:text-5xl leading-snug"
          >
            HIRGINIE <br className="sm:hidden" /> PROMISE
          </a>
        </div>
      </div>
    </div>
  );
}

export default Promiseimpact;
