import React from 'react'
import logo from '../images/poster.png'
function Cimpact() {
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
             <div className="absolute top-1/3 left-10 transform -translate-y-1/2">
               <h1 className="text-16xl font-bold text-white">
                 OUR<span className="text-gray-400"></span> STORY
               </h1>
               <div className="flex items-center gap-1 mt-2">
                 {/* <a href="" className="text-gray-500 hover:text-gray-700  text-4xl">Home</a> */}
                 <span className="text-red-500">›</span>
                 <a href="" className="text-red-500 hover:text-red-700 font-medium text-7xl">CONTACT</a>
               </div>
             </div>
           </div>
               </>
                
    )
}

export default Cimpact
