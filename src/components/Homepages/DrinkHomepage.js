import React from "react";
import { Link } from "react-router-dom";

import NonAlcoholic from "../../assets/images/drink-img/nonalcoholic.png";
import Alcoholic from "../../assets/images/drink-img/alcoholic.png";
import "./mainhomepage.css";
import Navbar from "./Navbar";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class DrinkHomepage extends React.Component {
  render = () => {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      swipeToSlide: true,
      beforeChange: function (currentSlide, nextSlide) {
        console.log("before change", currentSlide, nextSlide);
      },
      afterChange: function (currentSlide) {
        console.log("after change", currentSlide);
      },
    };

    return (
      <div className = "homeFD">
        <Navbar className="bar" style={{ zIndex: 1 }} />

        <div className="allFDHomepage" style={{ zIndex: 2 }}>
          <h2 className="mayI">May I mix you... a Drink?</h2>
          <Slider {...settings}>
            <div className="imgcard">
              <Link to={`/drinks/Alcoholic`}>
                <img src={Alcoholic} className="foodimg" alt="meat" />
                <div>
                  <h5 className = "recipeDrinks">Alcoholic Cocktails</h5>
                </div>
              </Link>
            </div>

            <div>
              <Link to={`/drinks/Non_Alcoholic`}>
                <img src={NonAlcoholic} className="foodimg" alt="chicken" />
                <div>
                  <h5 className = "recipeDrinks">Non-Alcoholic Cocktails</h5>
                </div>
              </Link>
            </div>
          </Slider>
        </div>
      </div>
    );
  };
}

export default DrinkHomepage;
