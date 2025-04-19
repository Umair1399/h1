import React from 'react'
import img from '../images/man.webp'
function Section() {
    return (
    //     <section className="bg-blue-500 text-white py-16">
    //   <div className="container mx-auto px-6">
    //     {/* Heading */}
    //     <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us?</h2>

    //     {/* Stats Grid */}
    //     <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center">
    //       {/* Item 1 */}
    //       <div className="text-center">
    //         <p className="text-4xl font-bold">19</p>
    //         <p className="text-sm uppercase tracking-wide">Years of Industry Presence</p>
    //       </div>

    //       {/* Vertical Divider */}
    //       <div className="hidden lg:block w-px h-16 bg-white mx-auto"></div>

    //       {/* Item 2 */}
    //       <div className="text-center">
    //         <p className="text-4xl font-bold">1000+</p>
    //         <p className="text-sm uppercase tracking-wide">Trusted Customers</p>
    //       </div>

    //       {/* Vertical Divider */}
    //       <div className="hidden lg:block w-px h-16 bg-white mx-auto"></div>

    //       {/* Item 3 */}
    //       <div className="text-center">
    //         <p className="text-4xl font-bold">300+</p>
    //         <p className="text-sm uppercase tracking-wide">GCC Customers</p>
    //       </div>

    //       {/* Vertical Divider */}
    //       <div className="hidden lg:block w-px h-16 bg-white mx-auto"></div>

    //       {/* Item 4 */}
    //       <div className="text-center">
    //         <p className="text-4xl font-bold">350+</p>
    //         <p className="text-sm uppercase tracking-wide">Leadership Hires</p>
    //       </div>

    //       {/* Vertical Divider */}
    //       <div className="hidden lg:block w-px h-16 bg-white mx-auto"></div>

    //       {/* Item 5 */}
    //       <div className="text-center">
    //         <p className="text-4xl font-bold">12K+</p>
    //         <p className="text-sm uppercase tracking-wide">Talents Hired</p>
    //       </div>

    //       {/* Vertical Divider */}
    //       <div className="hidden lg:block w-px h-16 bg-white mx-auto"></div>

    //       {/* Item 6 */}
    //       <div className="text-center">
    //         <p className="text-4xl font-bold">1.5M</p>
    //         <p className="text-sm uppercase tracking-wide">Managed Hiring Pool</p>
    //       </div>

    //       {/* Vertical Divider */}
    //       <div className="hidden lg:block w-px h-16 bg-white mx-auto"></div>

    //       {/* Item 7 */}
    //       <div className="text-center">
    //         <p className="text-4xl font-bold">70+</p>
    //         <p className="text-sm uppercase tracking-wide">Operating Locations</p>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <>
    <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      {/* Buttons Section */}
      <div className="flex justify-center gap-4 mb-12">
        <button className="border-2 border-red-500 text-red-500 px-10 py-4 rounded-lg shadow-sm font-semibold hover:bg-blue-50 transition duration-300">
          I'm Hiring
        </button>
        <button className="border-2 border-gray-300 text-gray-500 px-10 py-4 rounded-lg shadow-sm font-semibold hover:bg-gray-100 transition duration-300">
          I'm a Job seeker
        </button>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div>
          <img
            src={img}
            alt="Business Meeting"
            className="rounded-xl shadow-lg w-full"
          />
        </div>

        {/* Text Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            HIRE TALENTS
          </h2>
          <p className="text-gray-600 mb-4">
            Find talents as unique as your business needs. Join our league of 1200+ businesses who’ve streamlined their hiring process and accelerated growth.
          </p>
          <p className="text-gray-600 mb-8">
            Discover a world of possibilities with Zyoin Group.
          </p>
          <button className="border-2 border-red-500 text-red-500 px-8 py-3 rounded-lg shadow-sm font-semibold hover:bg-red-300 transition duration-300">
            CONNECT WITH US
          </button>
        </div>
      </div>
    </div>
  </section>
  </>
    )
}

export default Section
