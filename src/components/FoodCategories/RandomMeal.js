import React, { Component } from "react";
import axios from "axios";
import RandomPrinter from "./RandomPrinter";

import "../Homepages/verticalNavbar.css";
import VerticalNavbar from "../Homepages/VerticalNavbar";

class RandomMeal extends Component {
  state = {
    randomFood: "",
  };

  componentDidMount = async () => {
    console.log(this.props.match.params.code);
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/random.php`
      );
      console.log(response);
      this.setState({ randomFood: { ...response.data.meals[0] } });
    } catch (err) {
      console.error(err);
    }
  };

  handleIngredients = () => {
    let item = {};
    let n = 0;

    if (this.state.randomFood) {
      let ingredients = Object.entries(this.state.randomFood).filter(
        (x) =>
          (x[0].includes("strIngredient") || x[0].includes("strMeasure")) &&
          x[1] !== null &&
          x[1] !== " " &&
          x[1] !== ""
      );
      console.log(ingredients);
      for (let i = 0; i < ingredients.length; i++) {
        item[ingredients[i][0]] = ingredients[i][1];
      }

      n = Math.floor(ingredients.length / 2);
    }
    return new Array(n).fill(1).map((y, i) => {
      return (
        <li className="individualFDText">
          {item[`strMeasure${i + 1}`]} {item[`strIngredient${i + 1}`]}
        </li>
      );
    });
  };

  render() {
    return (
      <div className="allindividualFD">
        <VerticalNavbar />

        <div className="individualFD">
          <div className="container mt-2 text-center">
            <div className="mb-5">
              <h1 className="h1Text individualFDText">
                {this.state.randomFood.strMeal}
              </h1>
              <h4 className="h4Text individualFDText">
                Origin: {this.state.randomFood.strArea}{" "}
              </h4>
            </div>
            <div className="imgIngredients">
              <div>
                <img
                  className="imgFDDetail"
                  src={this.state.randomFood.strMealThumb}
                ></img>
              </div>
              <div>
                <ul className="text-left mt-2 mb-2">
                  <h3 className="h3Text">Ingredients:</h3>
                  {this.handleIngredients()}
                </ul>
              </div>
            </div>
            <div className="instructionsDiv">
              <h3 className="h3Text mt-2">Instructions:</h3>
              <p className="textP">{this.state.randomFood.strInstructions}</p>
            </div>

            <div>
              <RandomPrinter className="printer" food={this.state} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RandomMeal;
