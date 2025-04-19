import React from "react";
// import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import a7 from '../images/eye.png';
import a8 from '../images/arrow.png';
import Missionimpact from "../addonpage/Missionimpact";

const MissionVision = () => {
    // const navigate = useNavigate();

    return (
        <>
        <Missionimpact />
        <div className="flex flex-col items-center justify-center py-10 bg-gray-100 px-4">
            {/* Title */}
            <div className="text-center">
                <div className="w-5 h-5 bg-red-400 rounded-full mx-auto mb-2"></div>
                <h2 className="text-3xl font-bold text-gray-900">
                    Our Mission <span className="text-red-500">&</span> Vision
                </h2>
            </div>

            {/* Cards Section */}
            <div className="grid md:grid-cols-2 gap-6 mt-10">
                {/* Vision Card */}
                <div
                    className="border rounded-lg p-8 text-center bg-white shadow-md cursor-pointer hover:shadow-lg transition-all relative hover:border-red-600"
                    /* onClick removed to disable navigation */
                >
                    <img
                        src={a7}
                        alt="Vision"
                        className="mx-auto mb-4"
                    />
                    <h3 className="text-xl font-semibold text-gray-900">Vision</h3>
                    <p className="text-gray-600 mt-2">
                        To be the best tech-enabled talent marketplace.
                    </p>

                    {/* Arrow Indicator */}
                    {/* <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 bg-red-500 text-white p-3 rounded-full shadow-lg">
                        <FaArrowRight />
                    </div> */}
                </div>

                {/* Mission Card */}
                <div
                    className="border border-gray-300 rounded-lg p-8 text-center bg-white shadow-md cursor-pointer hover:shadow-lg transition-all hover:border-red-400"
                    /* onClick removed to disable navigation */
                >
                    <img
                        src={a8}
                        alt="Mission"
                        className="mx-auto mb-4"
                    />
                    <h3 className="text-xl font-semibold text-gray-900">Mission</h3>
                    <p className="text-gray-600 mt-2">
                        To make a positive impact on the world of business and humanity with
                        technology and human expertise.
                    </p>
                </div>
            </div>
        </div>/
        </>
    );
};

export default MissionVision;
