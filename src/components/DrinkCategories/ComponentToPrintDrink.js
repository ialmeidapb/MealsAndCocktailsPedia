import React from "react";
import ReactToPrint from "react-to-print";
import DrinkDetail from "./DrinkDetail";
import "../Homepages/verticalNavbar.css";

class ComponentToPrintDrink extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="divRandomPrint">
          <h1 className="randomPrintTitle">
            {this.props.drink.drink.strDrink}
          </h1>
          <h4 className="randomPrintTitle">
            Recommended Glass: {this.props.drink.drink.strGlass}
          </h4>
          <h5>{this.props.drink.drink.attenuation_level} </h5>
          <div className="divRandomPrint">
            <ul>
              <h3 className="randomPrintTitle">Ingredients:</h3>

              <li className="randomPrintLi">
                {this.props.drink.drink.strMeasure1}{" "}
                {this.props.drink.drink.strIngredient1}
              </li>
              <li className="randomPrintLi">
                {this.props.drink.drink.strMeasure2}{" "}
                {this.props.drink.drink.strIngredient2}
              </li>
              <li className="randomPrintLi">
                {this.props.drink.drink.strMeasure3}{" "}
                {this.props.drink.drink.strIngredient3}
              </li>
              <li className="randomPrintLi">
                {this.props.drink.drink.strMeasure4}{" "}
                {this.props.drink.drink.strIngredient4}
              </li>
              <li className="randomPrintLi">
                {this.props.drink.drink.strMeasure5}{" "}
                {this.props.drink.drink.strIngredient5}
              </li>
              <li className="randomPrintLi">
                {this.props.drink.drink.strMeasure6}{" "}
                {this.props.drink.drink.strIngredient6}
              </li>
              <li className="randomPrintLi">
                {this.props.drink.drink.strMeasure7}{" "}
                {this.props.drink.drink.strIngredient7}
              </li>
              <li className="randomPrintLi">
                {this.props.drink.drink.strMeasure8}{" "}
                {this.props.drink.drink.strIngredient8}
              </li>
              <li className="randomPrintLi">
                {this.props.drink.drink.strMeasure9}{" "}
                {this.props.drink.drink.strIngredient9}
              </li>
              <li className="randomPrintLi">
                {this.props.drink.drink.strMeasure10}{" "}
                {this.props.drink.drink.strIngredient10}
              </li>
              <li className="randomPrintLi">
                {this.props.drink.drink.strMeasure11}{" "}
                {this.props.drink.drink.strIngredient11}
              </li>
              <li className="randomPrintLi">
                {this.props.drink.drink.strMeasure12}{" "}
                {this.props.drink.drink.strIngredient12}
              </li>
              <li className="randomPrintLi">
                {this.props.drink.drink.strMeasure13}{" "}
                {this.props.drink.drink.strIngredient13}
              </li>
              <li className="randomPrintLi">
                {this.props.drink.drink.strMeasure14}{" "}
                {this.props.drink.drink.strIngredient14}
              </li>
              <li className="randomPrintLi">
                {this.props.drink.drink.strMeasure15}{" "}
                {this.props.drink.drink.strIngredient15}
              </li>
            </ul>
          </div>
          <h3 className="randomPrintTitle">Instructions:</h3>
          <div className="textMargin">
            <text className="instructionsRandomPrint">
              {this.props.drink.drink.strInstructions}
            </text>
          </div>
        </div>
      </div>
    );
  }
}

export default ComponentToPrintDrink;
