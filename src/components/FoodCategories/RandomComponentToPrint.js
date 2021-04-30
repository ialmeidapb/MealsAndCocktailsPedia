import React from "react";
import ReactToPrint from "react-to-print";
import RandomMeal from "./RandomMeal";

import "../Homepages/verticalNavbar.css";

class RandomComponentToPrint extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="divRandomPrint">
          <h1 className="randomPrintTitle">
            {this.props.food.randomFood.strMeal}
          </h1>
          <h4 className="randomPrintTitle">
            Origin: {this.props.food.randomFood.strArea}{" "}
          </h4>

          <div className="divRandomPrint">
            <ul>
              <h3 className="randomPrintTitle">Ingredients:</h3>

              <li className="randomPrintLi">
                {this.props.food.randomFood.strMeasure1}{" "}
                {this.props.food.randomFood.strIngredient1}
              </li>
              <li className="randomPrintLi">
                {this.props.food.randomFood.strMeasure2}{" "}
                {this.props.food.randomFood.strIngredient2}
              </li>
              <li className="randomPrintLi">
                {this.props.food.randomFood.strMeasure3}{" "}
                {this.props.food.randomFood.strIngredient3}
              </li>
              <li className="randomPrintLi">
                {this.props.food.randomFood.strMeasure4}{" "}
                {this.props.food.randomFood.strIngredient4}
              </li>
              <li className="randomPrintLi">
                {this.props.food.randomFood.strMeasure5}{" "}
                {this.props.food.randomFood.strIngredient5}
              </li>
              <li className="randomPrintLi">
                {this.props.food.randomFood.strMeasure6}{" "}
                {this.props.food.randomFood.strIngredient6}
              </li>
              <li className="randomPrintLi">
                {this.props.food.randomFood.strMeasure7}{" "}
                {this.props.food.randomFood.strIngredient7}
              </li>
              <li className="randomPrintLi">
                {this.props.food.randomFood.strMeasure8}{" "}
                {this.props.food.randomFood.strIngredient8}
              </li>
              <li className="randomPrintLi">
                {this.props.food.randomFood.strMeasure9}{" "}
                {this.props.food.randomFood.strIngredient9}
              </li>
              <li className="randomPrintLi">
                {this.props.food.randomFood.strMeasure10}{" "}
                {this.props.food.randomFood.strIngredient10}
              </li>
              <li className="randomPrintLi">
                {this.props.food.randomFood.strMeasure11}{" "}
                {this.props.food.randomFood.strIngredient11}
              </li>
              <li className="randomPrintLi">
                {this.props.food.randomFood.strMeasure12}{" "}
                {this.props.food.randomFood.strIngredient12}
              </li>
              <li className="randomPrintLi">
                {this.props.food.randomFood.strMeasure13}{" "}
                {this.props.food.randomFood.strIngredient13}
              </li>
              <li className="randomPrintLi">
                {this.props.food.randomFood.strMeasure14}{" "}
                {this.props.food.randomFood.strIngredient14}
              </li>
              <li className="randomPrintLi">
                {this.props.food.randomFood.strMeasure15}{" "}
                {this.props.food.randomFood.strIngredient15}
              </li>
            </ul>
          </div>
          <h3 className="randomPrintTitle">Instructions:</h3>
          <div className="textMargin">
            <text className="instructionsRandomPrint">
              {this.props.food.randomFood.strInstructions}
            </text>
          </div>
        </div>
      </div>
    );
  }
}

export default RandomComponentToPrint;
