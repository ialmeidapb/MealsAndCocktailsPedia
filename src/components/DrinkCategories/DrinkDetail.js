import React, { Component } from "react";
import axios from "axios";
import PrinterDrink from "./PrinterDrink";
import VerticalNavbar from "../Homepages/VerticalNavbar";
import "../Homepages/verticalNavbar.css";

class DrinkDetail extends Component {
  state = {
    drink: "",
  };

  componentDidMount = async () => {
    console.log(this.props.match.params.code);
    try {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.props.match.params.id}`
      );
      console.log(response);
      this.setState({ drink: { ...response.data.drinks[0] } });
    } catch (err) {
      console.error(err);
    }
  };

  render = () => {
    return (
      <div className="allindividualFD">
        <VerticalNavbar />
        <div className="individualFD">
          <div className="container mt-2 text-center">
            <div className="mb-5">
              <h1 className="h1Text individualFDText">{this.state.drink.strDrink}</h1>
              <h4 className="h4Text individualFDText">
                Recommended Glass: {this.state.drink.strGlass}
              </h4>
            </div>

            <div className="imgIngredients">
              <div>
                <img
                  className="imgFDDetail"
                  src={this.state.drink.strDrinkThumb}
                  width="400px"
                ></img>
              </div>
              <div>
                <ul className="text-left mt-2 mb-2">
                  <h3 className="h3Text">Ingredients:</h3>
                  {/* <li>{this.state.drink[`strIngredient${indice}`]}</li> */}
                  <li className="individualFDText">
                    {this.state.drink.strMeasure1}{" "}
                    {this.state.drink.strIngredient1}
                  </li>
                  <li className="individualFDText">
                    {this.state.drink.strMeasure2}{" "}
                    {this.state.drink.strIngredient2}
                  </li>
                  <li className="individualFDText">
                    {this.state.drink.strMeasure3}{" "}
                    {this.state.drink.strIngredient3}
                  </li>
                  <li className="individualFDText">
                    {this.state.drink.strMeasure4}{" "}
                    {this.state.drink.strIngredient4}
                  </li>
                  <li className="individualFDText">
                    {this.state.drink.strMeasure5}{" "}
                    {this.state.drink.strIngredient5}
                  </li>
                  <li className="individualFDText">
                    {this.state.drink.strMeasure6}{" "}
                    {this.state.drink.strIngredient6}
                  </li>
                  <li className="individualFDText">
                    {this.state.drink.strMeasure7}{" "}
                    {this.state.drink.strIngredient7}
                  </li>
                  <li className="individualFDText">
                    {this.state.drink.strMeasure8}{" "}
                    {this.state.drink.strIngredient8}
                  </li>
                  <li className="individualFDText">
                    {this.state.drink.strMeasure9}{" "}
                    {this.state.drink.strIngredient9}
                  </li>
                  <li className="individualFDText">
                    {this.state.drink.strMeasure10}{" "}
                    {this.state.drink.strIngredient10}
                  </li>
                  <li className="individualFDText">
                    {this.state.drink.strMeasure11}{" "}
                    {this.state.drink.strIngredient11}
                  </li>
                  <li className="individualFDText">
                    {this.state.drink.strMeasure12}{" "}
                    {this.state.drink.strIngredient12}
                  </li>
                  <li className="individualFDText">
                    {this.state.drink.strMeasure13}{" "}
                    {this.state.drink.strIngredient13}
                  </li>
                  <li className="individualFDText">
                    {this.state.drink.strMeasure14}{" "}
                    {this.state.drink.strIngredient14}
                  </li>
                  <li className="individualFDText">
                    {this.state.drink.strMeasure15}{" "}
                    {this.state.drink.strIngredient15}
                  </li>
                </ul>
              </div>
            </div>

            <div className="instructionsDiv">
            <h3 className="h3Text mt-2">Instructions:</h3>
            <p className="textP">{this.state.drink.strInstructions}</p>
            </div>


            <PrinterDrink className="printer"  drink={this.state} />
          </div>
        </div>
      </div>
    );
  };
}

export default DrinkDetail;
