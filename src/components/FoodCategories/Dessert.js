import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Dessert extends Component {
  state = {
    desserts: [],
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert"
      );
      console.log(response);
      this.setState({ desserts: [...response.data.meals] });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div className="d-flex justify-content-center">
        <div className="d-flex justify-content-around m-5 wrap flex-wrap">
          {this.state.desserts.map((dessert) => {
            return (
              <div key={dessert.idMeal} className="card bg-dark text-white m-3">
                <img
                  src={dessert.strMealThumb}
                  className="card-img"
                  style={{ width: "300px" }}
                  alt={dessert.strMeal}
                />
                <div className="card-img-overlay">
                  <h4
                    style={{
                      textShadow: "2px 4px 3px #FF2222",
                    }}
                    className="card-title d-flex justify-content-center text-center"
                  >
                    {dessert.strMeal}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Dessert;
