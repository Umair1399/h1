import React from 'react'
import aa from '../images/a6.jpg'
import Ourposter from '../addonpage/Ourposter'
function OurStories() {
    return (
      <>
      <Ourposter></Ourposter>
        <div className="flex flex-col items-center justify-center px-4 py-10 bg-gray-100">
      {/* Image Section */}
      <div className="w-full max-w-4xl">
        <img
          src={aa}
          alt="Teamwork"
          className="w-full rounded-lg"
        />
      </div>

      {/* Content Section */}
      <div className="bg-white w-full max-w-3xl p-6 mt-[-40px] shadow-lg rounded-lg text-center relative z-10">
        <h2 className="text-2xl font-bold mb-4">Our Story</h2>
        <p className="text-gray-600 leading-relaxed">
          Hireginie was founded with an emotion, the passion to solve for two
          different problems. The lack of impactful digital solutions in the B2B
          Talent Acquisition space that could deliver precision, pace, and
          predictability. The other was to make an impact for qualified specially
          abled people, homemakers, and domain experts on post-maternity break
          who were still subjected to exclusion even in the 21st Century.
        </p>
        <p className="text-gray-600 leading-relaxed mt-4">
          We at Hireginie, converge Artificial Intelligence with Human
          Intelligence in the hiring domain to leverage upon the talent
          ecosystem through our 3-dimensional bridge solution via Hireginie Talent
          Bridge, Hireginie Career Bridge, and Hireginie Campus Bridge which are
          interlinked in the talent ecosystem.
        </p>
        <p className="text-gray-600 leading-relaxed mt-4">
          We are evolving as the best tech-enabled talent marketplace by solving
          the two-sided problem in the talent space.
        </p>
      </div>
    </div>
    </>
    )
}

export default OurStories
