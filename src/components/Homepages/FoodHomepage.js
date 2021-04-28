import React from "react";
import { Link } from "react-router-dom";
import chicken from "../../assets/images/food-img/chicken.png"
import meat from "../../assets/images/food-img/meat.png"
import dessert from "../../assets/images/food-img/dessert.png"
import lamb from "../../assets/images/food-img/lamb.png"
import pasta from "../../assets/images/food-img/pasta.jpg"
import seafood from "../../assets/images/food-img/seafood.png"
import pork from "../../assets/images/food-img/pork.png"
import vegetarian from "../../assets/images/food-img/vegetarian.png"
import breakfast from "../../assets/images/food-img/breakfast.jpg"
import "./mainhomepage.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class FoodHomepage extends React.Component{



  render=()=>{
        
    const settings = {
      dots: false,
      arrows:true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      vertical: true,
      verticalSwiping: true,
      swipeToSlide: true,
      autoplay:true,
      autoplaySpeed:4500,
      beforeChange: function(currentSlide, nextSlide) {
        console.log("before change", currentSlide, nextSlide);
      },
      afterChange: function(currentSlide) {
        console.log("after change", currentSlide);
      }
    }

    
    return (
  <div className="m-0">


<div className="m-0">
        <h2>Vertical Mode with Swipe To Slide</h2>
        
        <div className="d-flex flex-column img-slider m-0 float-start">
        <Slider {...settings}>
          
        <div className="imgcard m-0 float-start">
            <Link to={`/foods/beef`}>
              <img src={meat} className="foodimg" alt="meat"/>
              <div>
              <h5 className="mt-1">Beef Recipes</h5>
              </div>
            </Link>
          </div>
              
    
          <div className="imgcard m-0 float-start">
            <Link to={`/foods/chicken`}>
              <img src={chicken} className="foodimg" alt="chicken"/>
              <div>
              <h5 className="mt-1">Chicken Recipes</h5>
              </div>
            </Link>
          </div>
              
    
          <div className="imgcard m-0 float-start">
            <Link to={`/foods/dessert`}>
              <img src={dessert} className="foodimg" alt="dessert"/>
              <div>
              <h5 className="mt-1">Desserts Recipes</h5>
              </div>
            </Link>
          </div>
             
    
    
          <div className="imgcard m-0 float-start">
            <Link to={`/foods/lamb`}>
              <img src={lamb} className="foodimg" alt="lamb"/>
              <div>
              <h5 className="mt-1">Lamb Recipes</h5>
              </div>
            </Link>
          </div>
    
    
    
          <div className="imgcard m-0 float-start">
              <Link to={`/foods/pasta`}>
                <img src={pasta} className="foodimg" alt="pasta"/>
                <div>
                <h5 className="mt-1">Pasta Recipes</h5>
                </div>
              </Link>
            </div>
              
    
            <div className="imgcard m-0 float-start">
              <Link to={`/foods/seafood`}>
                <img src={seafood} className="foodimg" alt="pasta"/>
                <div>
                <h5 className="mt-1">SeaFood Recipes</h5>
                </div>
              </Link>
            </div>
    
    
            <div className="imgcard m-0 float-start">
              <Link to={`/foods/vegetarian`}>
                <img src={vegetarian} className="foodimg" alt="pasta"/>
                <div>
                <h5 className="mt-1">Vegetarian Recipes</h5>
                </div>
              </Link>
            </div>
    
    
    
            <div className="imgcard m-0 float-start">
              <Link to={`/foods/pork`}>
                <img src={pork} className="foodimg" alt="pasta"/>
                <div>
                <h5 className="mt-1">Pork Recipes</h5>
                </div>
              </Link>   
            </div>
    
    
            <div className="imgcard m-0 float-start">
              <Link to={`/foods/breakfast`}>
                <img src={breakfast} className="foodimg" alt="pasta"/>
                <div>
                <h5 className="mt-1">Breakfast Recipes</h5>
                </div>
              </Link>
            </div>
    
            
            </Slider>
        </div>
        
      </div>





           </div>
        )
}
    }



export default FoodHomepage;