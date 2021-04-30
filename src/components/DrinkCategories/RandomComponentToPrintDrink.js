import React from "react";
import ReactToPrint from "react-to-print";
import RandomDrink from "./RandomDrink";
import VerticalNavbar from "../Homepages/VerticalNavbar";

import "../Homepages/verticalNavbar.css";

class RandomComponentToPrint extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="divRandomPrint">
          <h1 className="randomPrintTitle">
            {this.props.drink.randomDrink.strDrink}
          </h1>
          <h4 className="randomPrintTitle">
            Recommended Glass: {this.props.drink.randomDrink.strGlass}
          </h4>
          <div className="divRandomPrint">
            <ul>
              <h3 className="randomPrintTitle">Ingredients:</h3>

              <li className="randomPrintLi">
                {this.props.drink.randomDrink.strMeasure1}{" "}
                {this.props.drink.randomDrink.strIngredient1}
              </li>
              <li className="randomPrintLi">
                {this.props.drink.randomDrink.strMeasure2}{" "}
                {this.props.drink.randomDrink.strIngredient2}
              </li>
              <li className="randomPrintLi">
                {this.props.drink.randomDrink.strMeasure3}{" "}
                {this.props.drink.randomDrink.strIngredient3}
              </li>
              <li className="randomPrintLi">
                {this.props.drink.randomDrink.strMeasure4}{" "}
                {this.props.drink.randomDrink.strIngredient4}
              </li>
              <li className="randomPrintLi">
                {this.props.drink.randomDrink.strMeasure5}{" "}
                {this.props.drink.randomDrink.strIngredient5}
              </li>
              <li className="randomPrintLi">
                {this.props.drink.randomDrink.strMeasure6}{" "}
                {this.props.drink.randomDrink.strIngredient6}
              </li>
              <li className="randomPrintLi">
                {this.props.drink.randomDrink.strMeasure7}{" "}
                {this.props.drink.randomDrink.strIngredient7}
              </li>
              <li className="randomPrintLi">
                {this.props.drink.randomDrink.strMeasure8}{" "}
                {this.props.drink.randomDrink.strIngredient8}
              </li>
              <li className="randomPrintLi">
                {this.props.drink.randomDrink.strMeasure9}{" "}
                {this.props.drink.randomDrink.strIngredient9}
              </li>
              <li className="randomPrintLi">
                {this.props.drink.randomDrink.strMeasure10}{" "}
                {this.props.drink.randomDrink.strIngredient10}
              </li>
              <li className="randomPrintLi">
                {this.props.drink.randomDrink.strMeasure11}{" "}
                {this.props.drink.randomDrink.strIngredient11}
              </li>
              <li className="randomPrintLi">
                {this.props.drink.randomDrink.strMeasure12}{" "}
                {this.props.drink.randomDrink.strIngredient12}
              </li>
              <li className="randomPrintLi">
                {this.props.drink.randomDrink.strMeasure13}{" "}
                {this.props.drink.randomDrink.strIngredient13}
              </li>
              <li className="randomPrintLi">
                {this.props.drink.randomDrink.strMeasure14}{" "}
                {this.props.drink.randomDrink.strIngredient14}
              </li>
              <li className="randomPrintLi">
                {this.props.drink.randomDrinkstrMeasure15}{" "}
                {this.props.drink.randomDrink.strIngredient15}
              </li>
            </ul>
          </div>
          <h3 className="randomPrintTitle">Instructions:</h3>
          <div className="textMargin">
            <text className="instructionsRandomPrint">
              {this.props.drink.randomDrink.strInstructions}
            </text>
          </div>
        </div>
      </div>
    );
  }
}

export default RandomComponentToPrint;
