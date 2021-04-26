import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Meals extends Component {
  state = {
    meals: [],
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.props.match.params.id}`
      );
      console.log(response);
      this.setState({ meals: [...response.data.meals] });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div className="d-flex justify-content-center">
        <div className="d-flex justify-content-around m-5 wrap flex-wrap">
          {this.state.meals.map((meal) => {
            return (
              <div key={meal.idMeal} className="card bg-dark text-white m-3">
                <img
                  src={meal.strMealThumb}
                  className="card-img"
                  style={{ width: "300px" }}
                  alt={meal.strMeal}
                />
                <div className="card-img-overlay">
                  <h4
                    style={{
                      textShadow: "2px 4px 3px #FF2222",
                    }}
                    className="card-title d-flex justify-content-center text-center"
                  >
                    {meal.strMeal}
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

export default Meals;
