import React from "react";
import st from "../images/home.png" 
import { FaLinkedin } from "react-icons/fa6";
const teamMembers = [
    {
        name: "Anuj Agrawal",
        role: "FOUNDER & CEO",
        image: st,
        linkedin: "#",
    },
    {
        name: "Anuj Agrawal",
        role: "FOUNDER & CEO",
        image: st,
        linkedin: "#",
    },
    {
        name: "Anuj Agrawal",
        role: "FOUNDER & CEO",
        image: st,
        linkedin: "#",
    },
];

const TeamSection = () => {
    return (
        <section className="w-full bg-white py-12 px-6">
            <div className="max-w-7xl mx-auto text-center">
                {/* Heading Section */}
                <h2 className="text-3xl md:text-4xl font-bold">
                    <span className="text-red-600">MEET</span> OUR TEAM
                </h2>

                {/* Team Members Grid */}
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="text-center">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="rounded-lg shadow-md w-full md:w-80 mx-auto"
                            />
                            <div className="relative">
                                <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-72 bg-white shadow-md rounded-lg p-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                                    <p className="text-blue-600 font-semibold text-sm uppercase">{member.role}</p>
                                    <p className="text-lg font-semibold">{member.name}</p>

                                    {/* LinkedIn Icon */}
                                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                        <FaLinkedin className="text-blue-600 text-2xl mx-auto mt-2 hover:text-red-600 transition-colors" /> 

                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
