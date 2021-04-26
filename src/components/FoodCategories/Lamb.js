import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Lamb extends Component {
  state = {
    lambs: [],
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=Lamb"
      );
      console.log(response);
      this.setState({ lambs: [...response.data.meals] });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div className="d-flex justify-content-center">
        <div className="d-flex justify-content-around m-5 wrap flex-wrap">
          {this.state.lambs.map((lamb) => {
            return (
              <div key={lamb.idMeal} className="card bg-dark text-white m-4">
                <img
                  src={lamb.strMealThumb}
                  className="card-img"
                  style={{ width: "300px" }}
                  alt={lamb.strMeal}
                />
                <div className="card-img-overlay">
                  <h4
                    style={{
                      textShadow: "2px 4px 3px #FF2222",
                    }}
                    className="card-title d-flex justify-content-center text-center"
                  >
                    {lamb.strMeal}
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

export default Lamb;
