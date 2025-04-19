import React from 'react'
import backgroundimg from '../images/About-Us-18-scaled.webp'

const About = () => {
    return (
        <section
            className="relative w-full h-[400px] md:h-[200px] bg-cover bg-center flex items-center justify-start text-white cursor-pointer bg-img"
            style={
                {
                    backgroundImage: `url(${backgroundimg})`
                }
            }
        // onClick={handleRedirect} // Entire section is clickable
        >
            {/* Overlay Effect */}
            {/* <div className="absolute inset-0 bg-black bg-opacity-90"></div> */}

            {/* Content */}
            <div className="relative z-10 px-6 md:px-16">
                <h1 className="text-4xl md:text-6xl font-bold">ABOUT US</h1>
            </div>
        </section>
    )
}

export default About