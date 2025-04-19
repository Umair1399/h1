import React, { useState } from "react";
import Serveimpact from "../addonpage/Serveimpact";

const industries = [
  { name: "Banking", icon: "🏦", link: "/banking" },
  { name: "NBFC", icon: "📜", link: "/nbfc" },
  { name: "Fintech", icon: "💳", link: "/fintech" },
  { name: "Insurance", icon: "🛡️", link: "/insurance" },
  { name: "Pharmaceuticals", icon: "💊", link: "/pharmaceuticals" },
  { name: "Aviation", icon: "✈️", link: "/aviation" },
  { name: "Ecommerce", icon: "🛒", link: "/ecommerce" },
  { name: "Technology", icon: "🌿", link: "/technology" },
  { name: "Cement", icon: "🏗️", link: "/cement" },
  { name: "Biotechnology", icon: "🧪", link: "/biotechnology" },
  { name: "Tourism", icon: "🛫", link: "/tourism" },
  { name: "Telecom", icon: "📡", link: "/telecom" },
  { name: "Engineering", icon: "🌳", link: "/engineering" },
  { name: "Textiles", icon: "👕", link: "/textiles" },
  { name: "Oil & Gas", icon: "⛽", link: "/oil-gas" },
  { name: "Medical Devices", icon: "🖥️", link: "/medical-devices" },
  { name: "Media", icon: "📺", link: "/media" },
  { name: "Manufacturing", icon: "🏭", link: "/manufacturing" },
  { name: "Infrastructure", icon: "🏢", link: "/infrastructure" },
  { name: "Healthcare", icon: "🏥", link: "/healthcare" },
  { name: "Power", icon: "⚡", link: "/power" },
  { name: "Logistics", icon: "🚚", link: "/logistics" },
  { name: "FMCG", icon: "🛍️", link: "/fmcg" },
  { name: "Energy", icon: "☀️", link: "/energy" },
  { name: "Edutech", icon: "📖", link: "/edutech" },
  { name: "Rural Finance", icon: "🌾", link: "/rural-finance" },
];

const IndustriesWeServe = () => {
  const [selectedIndustry, setSelectedIndustry] = useState("Banking");

  return (
    <>
    <Serveimpact></Serveimpact>
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Industries We Serve</h2>

      {/* Grid Container */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {industries.map((industry) => (
          <a
            key={industry.name}
            href={industry.link}
            className={`flex flex-col items-center justify-center w-28 h-28 rounded-lg border ${
              selectedIndustry === industry.name
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-800 border-gray-300 hover:border-blue-500"
            } transition-all duration-300 shadow-md`}
            onClick={() => setSelectedIndustry(industry.name)}
          >
            <span className="text-3xl">{industry.icon}</span>
            <p className="mt-2 text-sm font-medium">{industry.name}</p>
          </a>
        ))}
      </div>
    </div>
    </>
  );
};

export default IndustriesWeServe;
