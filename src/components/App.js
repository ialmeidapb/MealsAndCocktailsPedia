import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import AlcoholicDrinks from "./DrinkCategories/AlcoholicDrinks"
import NonAlcoholicDrinks from "./DrinkCategories/NonAlcoholicDrinks"
import Beef from "./FoodCategories/Beef"
import Dessert from "./FoodCategories/Dessert"
import Chicken from "./FoodCategories/Chicken"
import Pasta from "./FoodCategories/Pasta"
import SeaFood from "./FoodCategories/SeaFood"
import Vegetarian from "./FoodCategories/Vegetarian"
import Pork from "./FoodCategories/Pork"
import Lamb from "./FoodCategories/Lamb"



function App() {
  return (
    
    <div className="App">

      {/* <AlcoholicDrinks/> */}
      <Beef/> 
      {/* <Dessert/>
      <Chicken/>
      <Pasta/>
      <SeaFood/>
      <Vegetarian/>
      <Pork/>
      <Lamb/>
      <NonAlcoholicDrinks/> */}
      
    </div>
  );
}

export default App;
