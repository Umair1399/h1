import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const dataJobFunction = [
    { name: "Engineering & IT", value: 48, color: "#2D4FFF" },
    { name: "Marketing", value: 7, color: "#7A30DC" },
    { name: "Sales", value: 15, color: "#F49C25" },
    { name: "HR", value: 5, color: "#009688" },
    { name: "Finance", value: 6, color: "#B22222" },
    { name: "Others", value: 19, color: "#4B0082" },
];

const dataExperienceLevel = [
    { name: "0-4 Years", value: 42, color: "#7A30DC" },
    { name: "4-8 Years", value: 36, color: "#F49C25" },
    { name: "8+ Years", value: 22, color: "#2D4FFF" },
];

const dataGenderDiversity = [
    { name: "Male", value: 65, color: "#2D4FFF" },
    { name: "Female", value: 33, color: "#7A30DC" },
    { name: "Others", value: 2, color: "#F49C25" },
];

const COLORS = ["#2D4FFF", "#7A30DC", "#F49C25", "#009688", "#B22222", "#4B0082"];

const DiversityStats = () => {
    return (
        <section className="w-full bg-white py-12 px-6">
            <div className="max-w-7xl mx-auto text-center">
                {/* Header Section */}
                <h2 className="text-3xl md:text-4xl font-bold">
                    <span className="text-red-600">MOST DIVERSE</span> TALENT COMMUNITY
                </h2>

                {/* Stats Overview */}
                <div className="mt-6 flex flex-col md:flex-row justify-center items-center gap-10">
                    <div>
                        <h3 className="text-4xl font-bold">2M+</h3>
                        <p className="text-gray-500">TALENT COMMUNITY</p>
                    </div>
                    <div className="h-10 w-px bg-gray-300 hidden md:block"></div>
                    <div>
                        <h3 className="text-4xl font-bold">300K+</h3>
                        <p className="text-gray-500">SOCIAL MEDIA FOLLOWERS</p>
                    </div>
                </div>

                {/* Chart Grid */}
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Job Function Chart */}
                    <a href="/job-function" className="hover:scale-105 transition-all">
                        <div className="bg-white shadow-md rounded-lg p-6">
                            <h3 className="text-lg font-semibold mb-4">Job Function</h3>
                            <ResponsiveContainer width="100%" height={250}>
                                <PieChart>
                                    <Pie data={dataJobFunction} cx="50%" cy="50%" innerRadius={50} outerRadius={80} dataKey="value" label={({ name }) => name}>
                                        {dataJobFunction.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </a>

                    {/* Experience Level Chart */}
                    <a href="/experience-level" className="hover:scale-105 transition-all">
                        <div className="bg-white shadow-md rounded-lg p-6">
                            <h3 className="text-lg font-semibold mb-4">Experience Level</h3>
                            <ResponsiveContainer width="100%" height={250}>
                                <PieChart>
                                    <Pie data={dataExperienceLevel} cx="50%" cy="50%" innerRadius={50} outerRadius={80} dataKey="value" label={({ name }) => name}>
                                        {dataExperienceLevel.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </a>

                    {/* Gender Diversity Chart */}
                    <a href="/gender-diversity" className="hover:scale-105 transition-all">
                        <div className="bg-white shadow-md rounded-lg p-6">
                            <h3 className="text-lg font-semibold mb-4">Gender Diversity</h3>
                            <ResponsiveContainer width="100%" height={250}>
                                <PieChart>
                                    <Pie data={dataGenderDiversity} cx="50%" cy="50%" innerRadius={50} outerRadius={80} dataKey="value" label={({ name }) => name}>
                                        {dataGenderDiversity.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </a>
                </div>

                {/* Description */}
                <p className="mt-10 text-gray-600 text-sm md:text-base max-w-4xl mx-auto">
                    Our Talent community is a thriving hub where professionals and emerging talents connect to explore new opportunities. Our extensive database of skilled individuals from diverse backgrounds ensures we have the right candidates to match your specific requirements. Whether you're seeking seasoned professionals or fresh perspectives, we have the perfect fit for your team.
                </p>
            </div>
        </section>
    );
};

export default DiversityStats;
