import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Gon from "./Gon";
import Kurapika from "./Kurapika";
import Leorio from "./Leorio";
import Killua from "./Killua";
import "../fonts/fonts.css";
import Skills from "./Skills";
import Netero from "./Netero"


const CharacterSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <div className='w-full h-screen'>
      <Slider {...settings}>
        <div>
          <Netero />
        </div>
        <div>
          <Killua />
        </div>
        <div>
          <Gon />
        </div>
        <div>
          <Kurapika />
        </div>
        <div>
          <Leorio />
        </div>
        <div>
          <Skills />
        </div>
      </Slider>
    </div>
  )
}

export default CharacterSlider