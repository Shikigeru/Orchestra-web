import React from 'react';
import Slider from 'react-slick';
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';

const InnerSlider = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} className="main__slider">
      <div>
        <img src="/images/main-slider/02.jpg" alt="" />
      </div>
      <div>
        <img src="/images/main-slider/03.jpg" alt="" />
      </div>
      <div>
        <img src="/images/main-slider/04.jpg" alt="" />
      </div>
      <div>
        <img src="/images/main-slider/05.jpg" alt="" />
      </div>
    </Slider>
  );
};

export default InnerSlider;
