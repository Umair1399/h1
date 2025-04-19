import React from "react";
import backgroundimg from '../images/Mission.webp'
import Missionimpact from "../addonpage/Missionimpact";

const MissionVisionSection = () => {
    return (
        <>
        {/* <Missionimpact></Missionimpact> */}
        <section className="w-full bg-white py-12 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Left Side: Text Content */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-red-600">
                        OUR MISSION & VISION
                    </h2>
                    <p className="text-gray-600 mt-4 text-lg">
                        To build strong partnerships with our customers by dispensing
                        foremost recruitment solutions and game-changing talent.
                    </p>
                    <p className="text-gray-600 mt-4 text-lg">
                        To become the most respected corporation that provides the best
                        hiring solutions.
                    </p>
                </div>

                {/* Right Side: Image */}
                <div className="flex justify-center">
                    <img
                        src={backgroundimg}
                        alt="Mission and Vision"
                        className="rounded-xl shadow-lg w-full md:w-4/5"
                    />
                </div>
            </div>
        </section>
        </>
    );
};

export default MissionVisionSection;
