import React from "react";

const highlights = [
    {
        number: "19 YEARS",
        text: "INDUSTRY PRESENCE",
        image: "/images/industry.jpg",
    },
    {
        number: "1.5 Mn",
        text: "MANAGED HIRING POOL",
        image: "/images/hiring.jpg",
    },
    {
        number: "1000+",
        text: "SATISFIED CUSTOMERS",
        image: "/images/customers.jpg",
    },
    {
        number: "12000+",
        text: "SUCCESSFUL ONBOARDINGS",
        image: "/images/onboarding.jpg",
    },
    {
        number: "1000+",
        text: "SATISFIED CUSTOMERS",
        image: "/images/customers.jpg",
    },
    {
        number: "12000+",
        text: "SUCCESSFUL ONBOARDINGS",
        image: "/images/onboarding.jpg",
    },
    {
        number: "12000+",
        text: "SUCCESSFUL ONBOARDINGS",
        image: "/images/onboarding.jpg",
    },
    {
        number: "12000+",
        text: "SUCCESSFUL ONBOARDINGS",
        image: "/images/onboarding.jpg",
    },
];

const HighlightsSection = () => {
    return (
        <section className="w-full bg-gray-100 py-12">
            {/* Title */}
            <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold">
                    <span className="text-red-600">HERE ARE SOME NOTABLE</span> <br />
                    HIGHLIGHTS ABOUT US
                </h2>
            </div>

            {/* Cards Container */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 j">
                {highlights.map((item, index) => (
                    <div
                        key={index}
                        className="relative bg-cover bg-center h-56 flex items-center justify-center text-white font-bold rounded-lg overflow-hidden"
                        style={{ backgroundImage: `url(${item.image})` }}
                    >
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                        {/* Text Content */}
                        <div className="relative z-10 text-center">
                            <h3 className="text-3xl md:text-4xl">{item.number}</h3>
                            <p className="text-sm md:text-lg">{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HighlightsSection;
