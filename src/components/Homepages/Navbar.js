import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import bluewall from "../../assets/images/bluewall.jpg";
import "./navbar.css";


function Navbar() {
  return (
 <div className="Navbardiv">
    <div className="position-fixed">
      <div className="wrapper">
        <div className="sidebar">
          <h2>Menu</h2>
          <ul>
            <li><Link to="/"><i class="fas fa-home"></i>Home</Link></li>
            <li><Link to="/foods"><i class="fas fa-utensils"></i>Meals</Link></li>
            <li><Link to="/drinks"><i class="fas fa-cocktail"></i>Drinks</Link></li>
            <li><Link to="/randomfood"><i class="fas fa-spinner"></i>Cook me a Meal!</Link></li>
            <li><Link to="/randomdrink"><i class="fas fa-spinner"></i>Shake me a Drink!</Link></li>
          </ul>
          <div className="social_media">
            <a target="_blank" href="https://www.linkedin.com/in/graziele-dantas-silveira-6330591aa/"><i class="fab fa-linkedin fa-lg"></i></a>
            <a target="_blank" href="https://github.com/Trolleza"><i class="fab fa-github-square fa-lg"></i></a>
            <a target="_blank" href="https://www.linkedin.com/in/ialmeidapb/"><i class="fab fa-linkedin fa-lg"></i></a>
            <a target="_blank" href="https://github.com/ialmeidapb"><i class="fab fa-github-square fa-lg"></i></a>
          </div>
        </div>
      </div>
    </div>
 </div>
  );
}

export default Navbar;
