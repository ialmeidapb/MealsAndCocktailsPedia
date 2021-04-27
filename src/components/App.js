import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import Drinks from "./DrinkCategories/Drinks"
import Meals from "./FoodCategories/Meals"
import FoodHomepage from "./Homepages/FoodHomepage"
import DrinkHomepage from "./Homepages/DrinkHomepage"
import DrinkDetail from "./DrinkCategories/DrinkDetail"
import FoodDetail from "./FoodCategories/FoodDetail"

import MainHomepage from "./Homepages/MainHomepage"
import RandomMeal from "./FoodCategories/RandomMeal"
import RandomDrink from "./DrinkCategories/RandomDrink"



function App() {
  return (
    
    <div>
  <BrowserRouter>
  
  <Route exact path="/" component={MainHomepage} />
  <Route exact path="/foods" component={FoodHomepage} />
  <Route exact path="/foods/:id" component={Meals} />
  <Route exact path="/foods/meals/:id" component={FoodDetail} />
  <Route exact path="/randomfood" component={RandomMeal} />
  <Route exact path="/drinks" component={DrinkHomepage} />
  <Route exact path="/drinks/:id" component={Drinks} />
  <Route exact path="/drinks/cocktail/:id" component={DrinkDetail} />
  <Route exact path="/randomdrink" component={RandomDrink} />
  

  </BrowserRouter>
    
    </div>
  );
}

export default App;
