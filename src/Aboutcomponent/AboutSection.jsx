import React from "react";
import backgroundimg from '../images/About-Us02.webp'

const AboutSection = () => {
    // const handleRedirect = () => {
    //     window.location.href = "/software-developer"; // Redirect on click
    // };

    return (
        <section
            className="relative w-full h-[400px] md:h-[305px] bg-cover bg-center flex items-center px-6 md:px-16 cursor-pointer"
            style={{
                backgroundImage: `url(${backgroundimg})`
            }}
            // onClick={handleRedirect} // Click anywhere to redirect
        >
            {/* Overlay Effect */}
            {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}

            {/* Content */}
            <div className="relative z-10 flex flex-col md:flex-row items-start justify-between w-full max-w-7xl mx-auto">
                {/* Left Side - Heading */}
                <div className="w-full md:w-1/2">
                    <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
                        YOUR NO:1 <br /> HIRING <br /> PARTNER
                    </h1>
                </div>

                {/* Right Side - Description */}
                <div className="w-full md:w-1/2 text-white text-lg md:text-xl">
                    <p>
                        We are India’s premier hiring solutions provider, with a proven
                        track record of serving the hiring needs of organisations ranging
                        from Stealth Mode Startups to Fortune 500 companies. We specialise
                        in providing staffing solutions, talent acquisition, executive
                        search and human resources consulting services.
                    </p>
                    <p className="mt-4">
                        Established in 2005, Zyoin has built a reputation for connecting
                        businesses with top-tier talent in technology and non-technology
                        functions across a wide range of industries.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
