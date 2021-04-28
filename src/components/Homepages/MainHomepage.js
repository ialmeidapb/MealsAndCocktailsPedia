import React from "react";
import { Link } from "react-router-dom";
import cooker from "../../assets/images/cooker.jpg";
import bartender from "../../assets/images/barista.jpg";
import "./mainhomepage.css";
import Navbar from "./Navbar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MainHomepage() {
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 10000,
    cssEase: "linear",
    arrows: false,
    variableWidth: false,
    adaptiveHeight: true,
    centerPadding: "0",
    fade: true,
  };
  return (
    <div className="AllMainHomepage">
      <Navbar className="bar" style={{ zIndex: 1 }} />
      <div className="MainHomepageNavbar" style={{ zIndex: 2 }}>
        <Slider {...settings}>
          <div className="MainImg">
            <img className="img" src={cooker} />
          </div>
          <div className="MainImg">
            <img className="img" src={bartender} />
          </div>
        </Slider>
      </div>
    </div>
  );
}
export default MainHomepage;