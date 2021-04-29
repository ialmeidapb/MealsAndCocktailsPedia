import React, { Component } from "react";
import axios from "axios";
import "../Homepages/verticalNavbar.css";
import VerticalNavbar from "../Homepages/VerticalNavbar"
import RandomDrinkPrinter from "./RandomDrinkPrinter"

class RandomDrink extends Component {
  state = {
    randomDrink: "",
  };

  componentDidMount = async () => {
    console.log(this.props.match.params.code);
    try {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/random.php`
      );
      console.log(response);
      this.setState({ randomDrink: { ...response.data.drinks[0] } });
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
              <h1 className="h1Text individualFDText">{this.state.randomDrink.strDrink}</h1>
              <h4 className="h4Text individualFDText">
                Recommended Glass: {this.state.randomDrink.strGlass}
              </h4>
            </div>

            <div className="imgIngredients">
              <div>
                <img
                  className="imgFDDetail"
                  src={this.state.randomDrink.strDrinkThumb}
                ></img>
              </div>
              <div>
                <ul className="text-left mt-2 mb-2">
                  <h3 className="h3Text">Ingredients:</h3>
                  {/* <li>{this.state.randomDrink[`strIngredient${indice}`]}</li> */}
                  <li className="individualFDText">
                    {this.state.randomDrink.strMeasure1}{" "}
                    {this.state.randomDrink.strIngredient1}
                  </li>
                  <li className="individualFDText">
                    {this.state.randomDrink.strMeasure2}{" "}
                    {this.state.randomDrink.strIngredient2}
                  </li>
                  <li className="individualFDText">
                    {this.state.randomDrink.strMeasure3}{" "}
                    {this.state.randomDrink.strIngredient3}
                  </li>
                  <li className="individualFDText">
                    {this.state.randomDrink.strMeasure4}{" "}
                    {this.state.randomDrink.strIngredient4}
                  </li>
                  <li className="individualFDText">
                    {this.state.randomDrink.strMeasure5}{" "}
                    {this.state.randomDrink.strIngredient5}
                  </li>
                  <li className="individualFDText">
                    {this.state.randomDrink.strMeasure6}{" "}
                    {this.state.randomDrink.strIngredient6}
                  </li>
                  <li className="individualFDText">
                    {this.state.randomDrink.strMeasure7}{" "}
                    {this.state.randomDrink.strIngredient7}
                  </li>
                  <li className="individualFDText">
                    {this.state.randomDrink.strMeasure8}{" "}
                    {this.state.randomDrink.strIngredient8}
                  </li>
                  <li className="individualFDText">
                    {this.state.randomDrink.strMeasure9}{" "}
                    {this.state.randomDrink.strIngredient9}
                  </li>
                  <li className="individualFDText">
                    {this.state.randomDrink.strMeasure10}{" "}
                    {this.state.randomDrink.strIngredient10}
                  </li>
                  <li className="individualFDText">
                    {this.state.randomDrink.strMeasure11}{" "}
                    {this.state.randomDrink.strIngredient11}
                  </li>
                  <li className="individualFDText">
                    {this.state.randomDrink.strMeasure12}{" "}
                    {this.state.randomDrink.strIngredient12}
                  </li>
                  <li className="individualFDText">
                    {this.state.randomDrink.strMeasure13}{" "}
                    {this.state.randomDrink.strIngredient13}
                  </li>
                  <li className="individualFDText">
                    {this.state.randomDrink.strMeasure14}{" "}
                    {this.state.randomDrink.strIngredient14}
                  </li>
                  <li className="individualFDText">
                    {this.state.randomDrink.strMeasure15}{" "}
                    {this.state.randomDrink.strIngredient15}
                  </li>
                </ul>
              </div>
            </div>

            <div className="instructionsDiv">
            <h3 className="h3Text mt-2">Instructions:</h3>
            <p className="textP">{this.state.randomDrink.strInstructions}</p>
            </div>

            <div><RandomDrinkPrinter className="printer" drink={this.state} /></div>
           
          </div>
        </div>
      </div>












    );
  }
}

export default RandomDrink;
