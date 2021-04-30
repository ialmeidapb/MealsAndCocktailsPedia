import React, { Component } from "react";
import axios from "axios";
import Printer from "./Printer";
import VerticalNavbar from "../Homepages/VerticalNavbar";
import "../Homepages/verticalNavbar.css";

class FoodDetail extends Component {
  state = {
    food: "",
  };

  componentDidMount = async () => {
    console.log(this.props.match.params.code);
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.props.match.params.id}`
      );
      console.log(response);
      this.setState({ food: { ...response.data.meals[0] } });
    } catch (err) {
      console.error(err);
    }
  };

  handleIngredients = () => {
    let item = {};
    let n = 0;

    if (this.state.food) {
      let ingredients = Object.entries(this.state.food).filter(
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

  render = () => {
    return (
      <div className="allindividualFD">
        <VerticalNavbar />

        <div className="individualFD">
          <div className="container mt-2 text-center">
            <div className="mb-5">
              <h1 className="h1Text individualFDText">
                {this.state.food.strMeal}
              </h1>
              <h4 className="h4Text individualFDText">
                Origin: {this.state.food.strArea}{" "}
              </h4>
            </div>
            <div className="imgIngredients">
              <div>
                <img
                  className="imgFDDetail"
                  src={this.state.food.strMealThumb}
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
              <p className="textP">{this.state.food.strInstructions}</p>
            </div>

            <div>
              <Printer className="printer" food={this.state} />
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default FoodDetail;
