import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Vegetarian extends Component {
  state = {
    vegFoods: [],
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian"
      );
      console.log(response);
      this.setState({ vegFoods: [...response.data.meals] });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div className="d-flex justify-content-center">
        <div className="d-flex justify-content-around m-5 wrap flex-wrap">
          {this.state.vegFoods.map((vegFood) => {
            return (
              <div key={vegFood.idMeal} className="card bg-dark text-white">
                <img
                  src={vegFood.strMealThumb}
                  className="card-img"
                  style={{ width: "300px" }}
                  alt={vegFood.strMeal}
                />
                <div className="card-img-overlay">
                  <h4
                    style={{
                      textShadow: "2px 4px 3px #FF2222",
                    }}
                    className="card-title d-flex justify-content-center text-center"
                  >
                    {vegFood.strMeal}
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

export default Vegetarian;
