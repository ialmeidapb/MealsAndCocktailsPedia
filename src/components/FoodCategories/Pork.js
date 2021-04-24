import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Pork extends Component {
  state = {
    porks: [],
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=Pork"
      );
      console.log(response);
      this.setState({ porks: [...response.data.meals] });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div className="d-flex justify-content-center">
        <div className="d-flex justify-content-around m-5 wrap flex-wrap">
          {this.state.porks.map((pork) => {
            return (
              <div key={pork.idMeal} className="card bg-dark text-white">
                <img
                  src={pork.strMealThumb}
                  className="card-img"
                  style={{ width: "300px" }}
                  alt={pork.strMeal}
                />
                <div className="card-img-overlay">
                  <h4
                    style={{
                      textShadow: "2px 4px 3px #FF2222",
                    }}
                    className="card-title d-flex justify-content-center text-center"
                  >
                    {pork.strMeal}
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

export default Pork;
