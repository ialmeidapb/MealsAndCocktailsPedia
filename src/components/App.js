import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Drinks from "./DrinkCategories/Drinks"
import Meals from "./FoodCategories/Meals"
import FoodHomepage from "./Homepages/FoodHomepage"
import DrinkHomepage from "./Homepages/DrinkHomepage"
import DrinkDetail from "./DrinkCategories/DrinkDetail"
import FoodDetail from "./FoodCategories/FoodDetail"



function App() {
  return (
    <div className="App">
  <BrowserRouter>
  
  <Route exact path="/foods" component={FoodHomepage} />
  <Route exact path="/foods/:id" component={Meals} />
  <Route exact path="/foods/meals/:id" component={FoodDetail} />
  <Route exact path="/drinks" component={DrinkHomepage} />
  <Route exact path="/drinks/:id" component={Drinks} />
  <Route exact path="/drinks/cocktail/:id" component={DrinkDetail} />
  

  </BrowserRouter>
    
    </div>
  );
}

export default App;
