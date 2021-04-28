import React from "react";
import { Link } from "react-router-dom";

import NonAlcoholic from "../../assets/images/drink-img/nonalcoholic.png"
import Alcoholic from "../../assets/images/drink-img/alcoholic.png"


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




class DrinkHomepage extends React.Component{



    render=()=>{
          
      const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        swipeToSlide: true,
        beforeChange: function(currentSlide, nextSlide) {
          console.log("before change", currentSlide, nextSlide);
        },
        afterChange: function(currentSlide) {
          console.log("after change", currentSlide);
        }
      }
  
      
      return (
    <div>
  
  
  <div>
          <h2>Vertical Mode with Swipe To Slide</h2>
          <Slider {...settings}>
            
        <div className="imgcard">
          <Link to={`/drinks/Alcoholic`}>
            <img src={Alcoholic} className="foodimg" alt="meat"/>
            <div>
              <h5>Alcoholic Cocktails</h5>
            </div>
          </Link>
        </div>
            
  
        <div>
          <Link to={`/drinks/Non_Alcoholic`}>
            <img src={NonAlcoholic} className="foodimg" alt="chicken"/>
            <div>
            <h5>Non-Alcoholic Cocktails</h5>
            </div>
          </Link>
        </div>
            
  
          
          </Slider>
        </div>
  
  
  
  
  
             </div>
          )
  }
      }
  
  
  
  export default DrinkHomepage;

