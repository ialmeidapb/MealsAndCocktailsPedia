import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Chicken extends Component {
  state = {
    chickens: [],
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken"
      );
      console.log(response);
      this.setState({ chickens: [...response.data.meals] });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div className="d-flex justify-content-center">
        <div className="d-flex justify-content-around wrap flex-wrap m-5">
          {this.state.chickens.map((chicken) => {
            return (
              <div key={chicken.idMeal} className="card bg-dark text-white m-4">
                <img
                  src={chicken.strMealThumb}
                  className="card-img"
                  style={{ width: "300px" }}
                  alt={chicken.strMeal}
                />
                <div className="card-img-overlay">
                  <h4
                    style={{
                      textShadow: "2px 4px 3px #FF2222",
                    }}
                    className="card-title d-flex justify-content-center text-center"
                  >
                    {chicken.strMeal}
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

export default Chicken;
