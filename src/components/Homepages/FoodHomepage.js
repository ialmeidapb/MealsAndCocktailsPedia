import React from "react";
import { Link } from "react-router-dom";
import chicken from "../../assets/images/chicken.jpg"
import meat from "../../assets/images/meat.jpg"
import dessert from "../../assets/images/dessert.jpg"
import lamb from "../../assets/images/lamb1.png"
import pasta from "../../assets/images/pasta.jpg"
import seafood from "../../assets/images/seafood.jpg"


function FoodHomepage(){

        return (
  <div>
<h1>Foods</h1>

<div className="d-flex justify-content-around flex-wrap">


<div class="card bg-dark text-white w-50 m-3">
  <Link to={`/foods/beef`}>
  <img src={meat} class="card-img" alt="meat"/>
  <div class="card-img-overlay">
    <h5 class="card-title">Beef Recipes</h5>
   
  </div>
  </Link>
</div>


<div class="card bg-dark text-white w-50 m-3">
<Link to={`/foods/chicken`}>
  <img src={chicken} class="card-img" alt="chicken"/>
  <div class="card-img-overlay">
    <h5 class="card-title">Chicken Recipes</h5>
 
  </div>
  </Link>
</div>

<div class="card bg-dark text-white w-50 m-3">
<Link to={`/foods/dessert`}>
  <img src={dessert} class="card-img" alt="dessert"/>
  <div class="card-img-overlay">
    <h5 class="card-title">Desserts Recipes</h5>
  
  </div>
  </Link>
</div>

<div class="card bg-dark text-white w-50 m-3">
<Link to={`/foods/lamb`}>
  <img src={lamb} class="card-img" alt="lamb"/>
  <div class="card-img-overlay">
    <h5 class="card-title">Lamb Recipes</h5>
  
  </div>
  </Link>
</div>

<div class="card bg-dark text-white w-50 m-3">
<Link to={`/foods/pasta`}>
  <img src={pasta} class="card-img" alt="pasta"/>
  <div class="card-img-overlay">
    <h5 class="card-title">Pasta Recipes</h5>
  
  </div>
 </Link>
</div>

<div class="card bg-dark text-white w-50 m-3">
<Link to={`/foods/seafood`}>
  <img src={seafood} class="card-img" alt="pasta"/>
  <div class="card-img-overlay">
    <h5 class="card-title">SeaFood Recipes</h5>
  
  </div>
 </Link>
</div>


<div class="card bg-dark text-white w-50 m-3">
<Link to={`/foods/vegetarian`}>
  <img src={pasta} class="card-img" alt="pasta"/>
  <div class="card-img-overlay">
    <h5 class="card-title">Vegetarian Recipes</h5>
  
  </div>
 </Link>
</div>

<div class="card bg-dark text-white w-50 m-3">
<Link to={`/foods/pork`}>
  <img src={pasta} class="card-img" alt="pasta"/>
  <div class="card-img-overlay">
    <h5 class="card-title">Pork Recipes</h5>
  
  </div>
 </Link>
</div>


</div>

            </div>
        )
    }



export default FoodHomepage;