import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Drinks from "./DrinkCategories/Drinks"
import Meals from "./FoodCategories/Meals"




function App() {
  return (
    
    <div className="App">
  <BrowserRouter>
  <Route exact path="/:id" component={Meals} />
  <Route exact path="/:id" component={Drinks} />

  </BrowserRouter>
    
    </div>
  );
}

export default App;
