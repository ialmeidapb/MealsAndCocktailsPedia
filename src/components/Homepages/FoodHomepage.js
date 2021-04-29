import React from "react";
import { Link } from "react-router-dom";
import chicken from "../../assets/images/food-img/chicken.png";
import meat from "../../assets/images/food-img/meat.png";
import dessert from "../../assets/images/food-img/dessert.png";
import lamb from "../../assets/images/food-img/lamb.png";
import pasta from "../../assets/images/food-img/pasta.jpg";
import seafood from "../../assets/images/food-img/seafood.png";
import pork from "../../assets/images/food-img/pork.png";
import vegetarian from "../../assets/images/food-img/vegetarian.png";
import breakfast from "../../assets/images/food-img/breakfast.jpg";
import starter from "../../assets/images/food-img/starters.png";
import "./mainhomepage.css";
import Navbar from "./Navbar";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class FoodHomepage extends React.Component {
  render = () => {
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 2,
      vertical: true,
      verticalSwiping: true,
      swipeToSlide: true,
      autoplay: true,
      autoplaySpeed: 4500,
      beforeChange: function (currentSlide, nextSlide) {
        console.log("before change", currentSlide, nextSlide);
      },
      afterChange: function (currentSlide) {
        console.log("after change", currentSlide);
      },
    };

    return (
      <div className="homeFD">
        <Navbar className="bar" style={{ zIndex: 1 }} />

        <div className="allFDHomepage" style={{ zIndex: 2 }}>
          <h2 className="canI">How can I Serve You?</h2>

          <div className="img-slider">
            <Slider {...settings}>
              <div>
                <Link to={`/foods/breakfast`}>
                  <img src={breakfast} className="foodimg" alt="breakfast" />
                  <div>
                    <h5 className="recipeFoods">Breakfast Recipes</h5>
                  </div>
                </Link>
              </div>

              <div>
                <Link to={`/foods/starter`}>
                  <img src={starter} className="foodimg" alt="starter" />
                  <div>
                    <h5 className="recipeFoods">Starters</h5>
                  </div>
                </Link>
              </div>

              <div>
                <Link to={`/foods/beef`}>
                  <img src={meat} className="foodimg" alt="meat food" />
                  <div>
                    <h5 className="recipeFoods">Beef Recipes</h5>
                  </div>
                </Link>
              </div>

              <div>
                <Link to={`/foods/chicken`}>
                  <img src={chicken} className="foodimg" alt="chicken food" />
                  <div>
                    <h5 className="recipeFoods">Chicken Recipes</h5>
                  </div>
                </Link>
              </div>

              <div>
                <Link to={`/foods/seafood`}>
                  <img src={seafood} className="foodimg" alt="sea food" />
                  <div>
                    <h5 className="recipeFoods">SeaFood Recipes</h5>
                  </div>
                </Link>
              </div>

              <div>
                <Link to={`/foods/pasta`}>
                  <img src={pasta} className="foodimg" alt="pasta food" />
                  <div>
                    <h5 className="recipeFoods">Pasta Recipes</h5>
                  </div>
                </Link>
              </div>

              <div>
                <Link to={`/foods/lamb`}>
                  <img src={lamb} className="foodimg" alt="lamb food" />
                  <div>
                    <h5 className="recipeFoods">Lamb Recipes</h5>
                  </div>
                </Link>
              </div>

              <div>
                <Link to={`/foods/pork`}>
                  <img src={pork} className="foodimg" alt="pork food" />
                  <div>
                    <h5 className="recipeFoods">Pork Recipes</h5>
                  </div>
                </Link>
              </div>

              <div>
                <Link to={`/foods/vegetarian`}>
                  <img src={vegetarian} className="foodimg" alt="vetarian food"/>
                  <div>
                    <h5 className="recipeFoods">Vegetarian Recipes</h5>
                  </div>
                </Link>
              </div>

              <div>
                <Link to={`/foods/dessert`}>
                  <img src={dessert} className="foodimg" alt="dessert" />
                  <div>
                    <h5 className="recipeFoods">Desserts Recipes</h5>
                  </div>
                </Link>
              </div>

            </Slider>
          </div>
        </div>
      </div>
    );
  };
}

export default FoodHomepage;
