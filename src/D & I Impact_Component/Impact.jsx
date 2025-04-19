import React from 'react'
import logo from '../images/About-Us02.webp'
// import logo1 from '../images/yellow (1).png'
function Impact() {
    return (
        <>
     <div className="relative w-full h-[500px] bg-cover bg-center" 
      style={{ backgroundImage: `url(${logo})` }}>
      
      {/* Red Semi-Circle Overlay */}
      {/* <img 
        src={logo} 
        alt="Red Semi-Circle" 
        className="absolute top-0 right-0 h-full w-250 object-cover px-2"
      /> */}

      {/* Yellow Outlined Shape */}
      {/* <img 
        src={logo}
        alt="Yellow Outline" 
        className="absolute top-1/2 right-10 transform -translate-y-1/2 w-40 h-auto "
      /> */}

      {/* Content */}
      <div className="absolute top-1/2 left-10 transform -translate-y-1/2">
        <h1 className="text-7xl font-bold text-white">
          D <span className="text-gray-400">&</span> I Impact
        </h1>
        <div className="flex items-center gap-2 mt-2">
          {/* <a href="" className="text-gray-500 hover:text-gray-700  text-4xl">Home</a> */}
          <span className="text-red-500">›</span>
          <a href="" className="text-red-500 hover:text-red-700 font-medium text-4xl">D & I Impact</a>
        </div>
      </div>
    </div>
        </>
    )
}

export default Impact
