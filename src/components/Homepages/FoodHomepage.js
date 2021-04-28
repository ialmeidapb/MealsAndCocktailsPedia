import React from "react";
import { Link } from "react-router-dom";
import chicken from "../../assets/images/chicken.png";
import meat from "../../assets/images/meat.png";
import dessert from "../../assets/images/dessert.png";
import lamb from "../../assets/images/lamb.png";
import pasta from "../../assets/images/pasta.png";
import seafood from "../../assets/images/seafood.png";
import pork from "../../assets/images/pork.png";
import vegetarian from "../../assets/images/vegetarian.png";
import breakfast from "../../assets/images/breakfast.png";

function FoodHomepage() {
  return (
    <div>
      <h1>Foods</h1>

      <div className="d-flex justify-content-around flex-wrap">
        <div class="card bg-dark text-white w-50 m-3">
          <Link to={`/foods/beef`}>
            <img src={meat} class="card-img" alt="meat" />
            <div class="card-img-overlay">
              <h5 class="card-title">Beef Recipes</h5>
            </div>
          </Link>
        </div>

        <div class="card bg-dark text-white w-50 m-3">
          <Link to={`/foods/chicken`}>
            <img src={chicken} class="card-img" alt="chicken" />
            <div class="card-img-overlay">
              <h5 class="card-title">Chicken Recipes</h5>
            </div>
          </Link>
        </div>

        <div class="card bg-dark text-white w-50 m-3">
          <Link to={`/foods/dessert`}>
            <img src={dessert} class="card-img" alt="dessert" />
            <div class="card-img-overlay">
              <h5 class="card-title">Desserts Recipes</h5>
            </div>
          </Link>
        </div>

        <div class="card bg-dark text-white w-50 m-3">
          <Link to={`/foods/lamb`}>
            <img src={lamb} class="card-img" alt="lamb" />
            <div class="card-img-overlay">
              <h5 class="card-title">Lamb Recipes</h5>
            </div>
          </Link>
        </div>

        <div class="card bg-dark text-white w-50 m-3">
          <Link to={`/foods/pasta`}>
            <img src={pasta} class="card-img" alt="pasta" />
            <div class="card-img-overlay">
              <h5 class="card-title">Pasta Recipes</h5>
            </div>
          </Link>
        </div>

        <div class="card bg-dark text-white w-50 m-3">
          <Link to={`/foods/seafood`}>
            <img src={seafood} class="card-img" alt="pasta" />
            <div class="card-img-overlay">
              <h5 class="card-title">SeaFood Recipes</h5>
            </div>
          </Link>
        </div>

        <div class="card bg-dark text-white w-50 m-3">
          <Link to={`/foods/vegetarian`}>
            <img src={vegetarian} class="card-img" alt="pasta" />
            <div class="card-img-overlay">
              <h5 class="card-title">Vegetarian Recipes</h5>
            </div>
          </Link>
        </div>

        <div class="card bg-dark text-white w-50 m-3">
          <Link to={`/foods/pork`}>
            <img src={pork} class="card-img" alt="pasta" />
            <div class="card-img-overlay">
              <h5 class="card-title">Pork Recipes</h5>
            </div>
          </Link>
        </div>

        <div class="card bg-dark text-white w-50 m-3">
          <Link to={`/foods/breakfast`}>
            <img src={breakfast} class="card-img" alt="pasta" />
            <div class="card-img-overlay">
              <h5 class="card-title">Breakfast Recipes</h5>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FoodHomepage;
