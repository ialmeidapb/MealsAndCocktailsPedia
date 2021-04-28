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
import "./mainhomepage.css";
import Navbar from "./Navbar";
import bitechocolate from "../../assets/fonts/bitechocolate.ttf"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class FoodHomepage extends React.Component {
  render = () => {
    const settings = {
      dots: false,
      arrows: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      swipeToSlide: true,
      autoplay: true,
      beforeChange: function (currentSlide, nextSlide) {
        console.log("before change", currentSlide, nextSlide);
      },
      afterChange: function (currentSlide) {
        console.log("after change", currentSlide);
      },
    };

    return (
      <div>
        <Navbar/>
        <div className="AllFoodHomepage">
          <h2 className="mayI">How may I Serve You?</h2>

          <div className="img-slider" style={{fontFamily: {bitechocolate}}}>
            <Slider {...settings}>
              <div className="imgcard">
                <Link to={`/foods/beef`}>
                  <img src={meat} className="foodimg" alt="meat" />
                  <div>
                    <h5 className = "foodRecipe">Beef Recipes</h5>
                  </div>
                </Link>
              </div>

              <div>
                <Link to={`/foods/chicken`}>
                  <img src={chicken} className="foodimg" alt="chicken" />
                  <div>
                    <h5 className = "foodRecipe">Chicken Recipes</h5>
                  </div>
                </Link>
              </div>

              <div>
                <Link to={`/foods/dessert`}>
                  <img src={dessert} className="foodimg" alt="dessert" />
                  <div>
                    <h5 className = "foodRecipe">Desserts Recipes</h5>
                  </div>
                </Link>
              </div>

              <div>
                <Link to={`/foods/lamb`}>
                  <img src={lamb} className="foodimg" alt="lamb" />
                  <div>
                    <h5 className = "foodRecipe">Lamb Recipes</h5>
                  </div>
                </Link>
              </div>

              <div>
                <Link to={`/foods/pasta`}>
                  <img src={pasta} className="foodimg" alt="pasta" />
                  <div>
                    <h5 className = "foodRecipe">Pasta Recipes</h5>
                  </div>
                </Link>
              </div>

              <div>
                <Link to={`/foods/seafood`}>
                  <img src={seafood} className="foodimg" alt="pasta" />
                  <div>
                    <h5 className = "foodRecipe">SeaFood Recipes</h5>
                  </div>
                </Link>
              </div>

              <div>
                <Link to={`/foods/vegetarian`}>
                  <img src={vegetarian} className="foodimg" alt="pasta" />
                  <div>
                    <h5 className = "foodRecipe">Vegetarian Recipes</h5>
                  </div>
                </Link>
              </div>

              <div>
                <Link to={`/foods/pork`}>
                  <img src={pork} className="foodimg" alt="pasta" />
                  <div>
                    <h5 className = "foodRecipe">Pork Recipes</h5>
                  </div>
                </Link>
              </div>

              <div>
                <Link to={`/foods/breakfast`}>
                  <img src={breakfast} className="foodimg" alt="pasta" />
                  <div>
                    <h5 className = "foodRecipe">Breakfast Recipes</h5>
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
