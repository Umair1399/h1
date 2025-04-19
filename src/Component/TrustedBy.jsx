import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import cus1 from '../images/customer-1.png';
import cus2 from '../images/customer-3.png';
import cus3 from '../images/customer-4.png';
import cus4 from '../images/customer-5.png';
import cus5 from '../images/customer-6.png';
import cus6 from '../images/customer-7.png';
import cus7 from '../images/customer-8.png';
import cus8 from '../images/customer-9.png';
import cus9 from '../images/customer-11.png';
import cus10 from '../images/customer-12.png';
import cus11 from '../images/customer-13.png';
import cus12 from '../images/customer-14.png';
import cus13 from '../images/customer-15.png';
import cus14 from '../images/customer-16.png';

const TrustedBy = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-red-500 py-8">
      <h2 className="text-center text-white font-bold text-2xl mb-6">
        Trusted By
      </h2>
      <div className="px-6">
        <Slider {...settings}>
          {/* LOGOS */}
          <div className="flex justify-center">
            <img src={cus1} alt="Target" className="h-20" />
          </div>
          <div className="flex justify-center">
            <img src={cus2} alt="Ola" className="h-20" />
          </div>
          <div className="flex justify-center">
            <img src={cus3} alt="Ivy" className="h-20" />
          </div>
          <div className="flex justify-center">
            <img src={cus4} alt="IG" className="h-20" />
          </div>
          <div className="flex justify-center">
            <img src={cus5} alt="Broadridge" className="h-20" />
          </div>
          <div className="flex justify-center">
            <img src={cus6} alt="Broadridge" className="h-20" />
          </div>
          <div className="flex justify-center">
            <img src={cus7} alt="Broadridge" className="h-20" />
          </div>
          <div className="flex justify-center">
            <img src={cus8} alt="Broadridge" className="h-20" />
          </div>
          <div className="flex justify-center">
            <img src={cus9} alt="Broadridge" className="h-20" />
          </div>
          <div className="flex justify-center">
            <img src={cus10} alt="Broadridge" className="h-20" />
          </div>
          <div className="flex justify-center">
            <img src={cus11} alt="Broadridge" className="h-20" />
          </div>
          <div className="flex justify-center">
            <img src={cus12} alt="Broadridge" className="h-20" />
          </div>
          <div className="flex justify-center">
            <img src={cus13} alt="Broadridge" className="h-20" />
          </div>
          <div className="flex justify-center">
            <img src={cus14} alt="Broadridge" className="h-20" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default TrustedBy;