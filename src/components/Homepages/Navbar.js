import React from "react";
import bluewall from "../../assets/images/bluewall.jpg";
import "./navbar.css";

function Navbar() {
  return (
 <div className="Navbardiv">
    <div className="position-fixed">
      <div className="wrapper">
        <div className="sidebar">
          <h2>Sidebar</h2>
          <ul>
            <li><a href="#"><i class="fas fa-home"></i>Home</a></li>
            <li><a href="#"><i class="fas fa-utensils"></i>Meals</a></li>
            <li><a href="#"><i class="fas fa-cocktail"></i>Drinks</a></li>
            <li><a href="#"><i class="fas fa-project-diagram"></i>portfolio</a></li>
            <li><a href="#"><i class="fas fa-blog"></i>Blogs</a></li>
            <li><a href="#"><i class="fas fa-address-book"></i>Contact</a></li>
            <li><a href="#"><i className="fas fa-map-pin"></i>Map</a></li>
          </ul>
          <div className="social_media">
            <a href="#"><i class="fab fa-linkedin"></i></a>
            <a href="#"><i class="fab fa-github-square"></i></a>
            <a href="#"><i class="fab fa-linkedin"></i></a>
            <a href="#"><i class="fab fa-github-square"></i></a>
          </div>
        </div>
      </div>
    </div>
 </div>
  );
}

export default Navbar;
