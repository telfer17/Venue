import React from 'react';
import Slider from 'react-slick';

import prydz1 from '../../resources/images/prydz1.jpg';
import prydz2 from '../../resources/images/prydz2.jpg';
import prydz3 from '../../resources/images/prydz3.jpg';
import prydz4 from '../../resources/images/prydz4.jpg';

const Carousel = () => {

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1500
  }

  return (
    <div
      className="carousel_wrapper"
      style={{
        height:`${window.innerHeight}px`,
        overflow: 'hidden'
      }}
    >

      <Slider {...settings}>
        <div>
          <div
            className="carousel_image"
            style={{
              background:`url(${prydz1})`,
              height:`${window.innerHeight}px`
            }}
          >
          </div>
        </div>
        <div>
          <div
            className="carousel_image"
            style={{
              background:`url(${prydz2})`,
              height:`${window.innerHeight}px`
            }}
          >
          </div>
        </div>
        <div>
          <div
            className="carousel_image"
            style={{
              background:`url(${prydz3})`,
              height:`${window.innerHeight}px`
            }}
          >
          </div>
        </div>

        <div>
          <div
            className="carousel_image"
            style={{
              background:`url(${prydz4})`,
              height:`${window.innerHeight}px`
            }}
          >
          </div>
        </div>

      </Slider>

    </div>
  );
};


export default Carousel;
