import React from "react";

import { Link } from "react-router-dom";
import cooker from "../../assets/images/cooker.jpg";
import bartender from "../../assets/images/barista.jpg";
import "./mainhomepage.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./Navbar";

function MainHomepage() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 9000,
    // autoplaySpeed: 10000,  // carousel sem parar
    cssEase: "linear",
  };
  return (
    <div>

      <Navbar className="bar" />

      <div>
        <Slider {...settings}>
          <div className="maincard">
            <img className="img" src={cooker} />
          </div>
          <div className="maincard">
            <img className="img" src={bartender} />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default MainHomepage;
