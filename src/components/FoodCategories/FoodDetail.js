import React, { Component } from "react";
import axios from "axios";
import Printer from "./Printer";
import VerticalNavbar from "../Homepages/VerticalNavbar";
import "../Homepages/verticalNavbar.css"

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

  render = () => {
    return (
      <div className="allindividualFD">
        <VerticalNavbar/>
        
        <div className="individualFD">
          <div className="container mt-2 text-center">
            <div className="mb-5">
              <h1 className="individualFDText">{this.state.food.strMeal}</h1>
              <h4 className="individualFDText">Origin: {this.state.food.strArea} </h4>
            </div>
            <div className="imgIngredients">
              <div>
              <img className="imgFDDetail"
                src={this.state.food.strMealThumb}
              ></img>
              </div>
              <div>
              <ul className="text-left mt-2 mb-2">
                <h3 className="individualFDText">Ingredients:</h3>
                {/* <li>{this.state.food[`strIngredient${indice}`]}</li> */}
                <li className="individualFDText">
                  {this.state.food.strMeasure1} {this.state.food.strIngredient1}
                </li>
                <li className="individualFDText">
                  {this.state.food.strMeasure2} {this.state.food.strIngredient2}
                </li>
                <li className="individualFDText">
                  {this.state.food.strMeasure3} {this.state.food.strIngredient3}
                </li>
                <li className="individualFDText">
                  {this.state.food.strMeasure4} {this.state.food.strIngredient4}
                </li>
                <li className="individualFDText">
                  {this.state.food.strMeasure5} {this.state.food.strIngredient5}
                </li>
                <li className="individualFDText">
                  {this.state.food.strMeasure6} {this.state.food.strIngredient6}
                </li>
                <li className="individualFDText">
                  {this.state.food.strMeasure7} {this.state.food.strIngredient7}
                </li>
                <li className="individualFDText">
                  {this.state.food.strMeasure8} {this.state.food.strIngredient8}
                </li>
                <li className="individualFDText">
                  {this.state.food.strMeasure9} {this.state.food.strIngredient9}
                </li>
                <li className="individualFDText">
                  {this.state.food.strMeasure10}{" "}
                  {this.state.food.strIngredient10}
                </li>
                <li className="individualFDText">
                  {this.state.food.strMeasure11}{" "}
                  {this.state.food.strIngredient11}
                </li>
                <li className="individualFDText">
                  {this.state.food.strMeasure12}{" "}
                  {this.state.food.strIngredient12}
                </li>
                <li className="individualFDText">
                  {this.state.food.strMeasure13}{" "}
                  {this.state.food.strIngredient13}
                </li>
                <li className="individualFDText">
                  {this.state.food.strMeasure14}{" "}
                  {this.state.food.strIngredient14}
                </li>
                <li className="individualFDText">
                  {this.state.food.strMeasure15}{" "}
                  {this.state.food.strIngredient15}
                </li>
              </ul>
              </div>
            </div>
            
            <div className="instructionsDiv">
              <h3 className="textH3 mt-2 mb-3">Instructions:</h3>
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
