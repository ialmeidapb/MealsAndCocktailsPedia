import React, { Component } from "react";
import axios from "axios";
import Printer from "./Printer"

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
      <div>
        <div className="container mt-5 text-center">
          <img
            className="m-5"
            src={this.state.food.strMealThumb}
            width="400px"
          ></img>
          <h1 className="mt-5">{this.state.food.strMeal}</h1>
          <h4 className="mb-5">Origin: {this.state.food.strArea} </h4>

          <div className="text-left mt-2 mb-2">
            <ul>
              <h3>Ingredients:</h3>
              {/* <li>{this.state.food[`strIngredient${indice}`]}</li> */}
              <li>
                {this.state.food.strMeasure1} {this.state.food.strIngredient1}
              </li>
              <li>
                {this.state.food.strMeasure2} {this.state.food.strIngredient2}
              </li>
              <li>
                {this.state.food.strMeasure3} {this.state.food.strIngredient3}
              </li>
              <li>
                {this.state.food.strMeasure4} {this.state.food.strIngredient4}
              </li>
              <li>
                {this.state.food.strMeasure5} {this.state.food.strIngredient5}
              </li>
              <li>
                {this.state.food.strMeasure6} {this.state.food.strIngredient6}
              </li>
              <li>
                {this.state.food.strMeasure7} {this.state.food.strIngredient7}
              </li>
              <li>
                {this.state.food.strMeasure8} {this.state.food.strIngredient8}
              </li>
              <li>
                {this.state.food.strMeasure9} {this.state.food.strIngredient9}
              </li>
              <li>
                {this.state.food.strMeasure10} {this.state.food.strIngredient10}
              </li>
              <li>
                {this.state.food.strMeasure11} {this.state.food.strIngredient11}
              </li>
              <li>
                {this.state.food.strMeasure12} {this.state.food.strIngredient12}
              </li>
              <li>
                {this.state.food.strMeasure13} {this.state.food.strIngredient13}
              </li>
              <li>
                {this.state.food.strMeasure14} {this.state.food.strIngredient14}
              </li>
              <li>
                {this.state.food.strMeasure15} {this.state.food.strIngredient15}
              </li>
            </ul>
            </div>
            <h3 className="text-left mt-2 mb-3">Instructions:</h3>
            <p className="text-justify">{this.state.food.strInstructions}</p>

            <Printer food={this.state}/>
            
            </div>



            </div>
        )
    }
}

export default FoodDetail;
