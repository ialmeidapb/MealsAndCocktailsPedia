import React, { Component } from "react";
import axios from "axios";
import RandomPrinter from "./RandomPrinter"

import "../Homepages/verticalNavbar.css"
import VerticalNavbar from "../Homepages/VerticalNavbar"

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
                  {/* <li>{this.state.randomFood[`strIngredient${indice}`]}</li> */}
                  <li className="individualFDText">
                    {this.state.randomFood.strMeasure1}{" "}
                    {this.state.randomFood.strIngredient1}
                  </li>
                  <li className="individualFDText">
                    {this.state.randomFood.strMeasure2}{" "}
                    {this.state.randomFood.strIngredient2}
                  </li>
                  <li className="individualFDText">
                    {this.state.randomFood.strMeasure3}{" "}
                    {this.state.randomFood.strIngredient3}
                  </li>
                  <li className="individualFDText">
                    {this.state.randomFood.strMeasure4}{" "}
                    {this.state.randomFood.strIngredient4}
                  </li>
                  <li className="individualFDText">
                    {this.state.randomFood.strMeasure5}{" "}
                    {this.state.randomFood.strIngredient5}
                  </li>
                  <li className="individualFDText">
                    {this.state.randomFood.strMeasure6}{" "}
                    {this.state.randomFood.strIngredient6}
                  </li>
                  <li className="individualFDText">
                    {this.state.randomFood.strMeasure7}{" "}
                    {this.state.randomFood.strIngredient7}
                  </li>
                  <li className="individualFDText">
                    {this.state.randomFood.strMeasure8}{" "}
                    {this.state.randomFood.strIngredient8}
                  </li>
                  <li className="individualFDText">
                    {this.state.randomFood.strMeasure9}{" "}
                    {this.state.randomFood.strIngredient9}
                  </li>
                  <li className="individualFDText">
                    {this.state.randomFood.strMeasure10}{" "}
                    {this.state.randomFood.strIngredient10}
                  </li>
                  <li className="individualFDText">
                    {this.state.randomFood.strMeasure11}{" "}
                    {this.state.randomFood.strIngredient11}
                  </li>
                  <li className="individualFDText">
                    {this.state.randomFood.strMeasure12}{" "}
                    {this.state.randomFood.strIngredient12}
                  </li>
                  <li className="individualFDText">
                    {this.state.randomFood.strMeasure13}{" "}
                    {this.state.randomFood.strIngredient13}
                  </li>
                  <li className="individualFDText">
                    {this.state.randomFood.strMeasure14}{" "}
                    {this.state.randomFood.strIngredient14}
                  </li>
                  <li className="individualFDText">
                    {this.state.randomFood.strMeasure15}{" "}
                    {this.state.randomFood.strIngredient15}
                  </li>
                </ul>
              </div>
            </div>
            <div className="instructionsDiv">
              <h3 className="h3Text mt-2">Instructions:</h3>
              <p className="textP">{this.state.randomFood.strInstructions}</p>
            </div>
          
            <div><RandomPrinter className="printer" food={this.state} /></div>
          </div>
        </div>
      </div>
    );
  }
}


 
export default RandomMeal;
