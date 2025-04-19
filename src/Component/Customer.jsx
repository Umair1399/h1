import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const testimonials = [
    {
      id: 1,
      company: "Zolve",
      message:
        "I wanted to take a moment to express our sincere gratitude for your invaluable support and dedication. Thanks to your efforts, we have successfully closed many critical roles that were important for our organization. Your expertise, diligence, and commitment to finding the right talent have made a significant impact on our recruitment success. We deeply appreciate the time and energy you’ve invested in understanding our needs and delivering exceptional results.",
      author: "Shelly",
    },
    {
      id: 2,
      company: "Tech Corp",
      message:
        "Your outstanding support and commitment to finding the right talent have played a significant role in our success. We truly value your expertise and look forward to more milestones together.",
      author: "John Doe",
    },
    {
      id: 3,
      company: "InnovateX",
      message:
        "Thanks to your efforts, we have built a strong team that aligns perfectly with our goals. Your dedication and understanding of our needs have been exceptional.",
      author: "Emma Smith",
    },
    {
      id: 4,
      company: "NextGen",
      message:
        "Your strategic insights and attention to detail have helped us build a capable and motivated team. We appreciate your continuous support and guidance.",
      author: "Michael Lee",
    },
  ];
  
function Customer() {
    return (
        <>
           <div className="bg-blue-500 py-16 px-6 relative overflow-hidden">
      {/* Background World Map Pattern */}
      <div className="absolute inset-0 bg-[url('/public/world-map.png')] bg-no-repeat bg-center opacity-20"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Side - Heading */}
        <div className="md:w-1/3">
          <h2 className="text-white text-3xl md:text-4xl font-bold leading-snug">
            Hear It From <br />
            <span className="text-black">Our Customers</span>
          </h2>
        </div>

        {/* Right Side - Testimonial Carousel */}
        <div className="md:w-2/3">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="w-full"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white rounded-lg shadow-lg p-8 relative">
                  {/* Floating Company Logo */}
                  <div className="absolute -top-5 left-5 bg-white shadow-md rounded-md px-4 py-2 flex items-center gap-1">
                    <span className="text-red-500 font-bold text-lg">
                      {testimonial.company}
                    </span>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-700 text-base leading-relaxed mt-6">
                    {testimonial.message}
                  </p>

                  {/* Author + Quote */}
                  <div className="mt-6 flex justify-between items-center">
                    <span className="text-blue-500 font-semibold">
                      {testimonial.author}{" "}
                      <span className="text-gray-500">
                        - {testimonial.company}
                      </span>
                    </span>
                    <div className="text-blue-500 text-4xl font-bold">”</div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination */}
          <div className="flex justify-center mt-4">
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </div>
    </>
    )
}

export default Customer
