import React from "react";
import { Link } from "react-router-dom";
import "./verticalNavbar.css";

function VerticalNavbar() {
  return (
    <div>
      <nav className="navbar navbar-transparent">
        <Link className="navbar-brand" to="/">
          <i className="fas fa-home"></i>
        </Link>
      </nav>
    </div>
  );
}

export default VerticalNavbar;
