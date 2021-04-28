import React, { Component } from "react";
import axios from "axios";

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
      <div>
        <div className="container mt-5 text-center">
          <img
            className="m-5"
            src={this.state.randomFood.strMealThumb}
            width="400px"
          ></img>
          <h1 className="mt-5">{this.state.randomFood.strMeal}</h1>
          <h4 className="mb-5">Origin: {this.state.randomFood.strArea} </h4>

          <div className="text-left mt-2 mb-2">
            <ul>
              <h3>Ingredients:</h3>
              {/* <li>{this.state.randomFood[`strIngredient${indice}`]}</li> */}
              <li>
                {this.state.randomFood.strMeasure1}{" "}
                {this.state.randomFood.strIngredient1}
              </li>
              <li>
                {this.state.randomFood.strMeasure2}{" "}
                {this.state.randomFood.strIngredient2}
              </li>
              <li>
                {this.state.randomFood.strMeasure3}{" "}
                {this.state.randomFood.strIngredient3}
              </li>
              <li>
                {this.state.randomFood.strMeasure4}{" "}
                {this.state.randomFood.strIngredient4}
              </li>
              <li>
                {this.state.randomFood.strMeasure5}{" "}
                {this.state.randomFood.strIngredient5}
              </li>
              <li>
                {this.state.randomFood.strMeasure6}{" "}
                {this.state.randomFood.strIngredient6}
              </li>
              <li>
                {this.state.randomFood.strMeasure7}{" "}
                {this.state.randomFood.strIngredient7}
              </li>
              <li>
                {this.state.randomFood.strMeasure8}{" "}
                {this.state.randomFood.strIngredient8}
              </li>
              <li>
                {this.state.randomFood.strMeasure9}{" "}
                {this.state.randomFood.strIngredient9}
              </li>
              <li>
                {this.state.randomFood.strMeasure10}{" "}
                {this.state.randomFood.strIngredient10}
              </li>
              <li>
                {this.state.randomFood.strMeasure11}{" "}
                {this.state.randomFood.strIngredient11}
              </li>
              <li>
                {this.state.randomFood.strMeasure12}{" "}
                {this.state.randomFood.strIngredient12}
              </li>
              <li>
                {this.state.randomFood.strMeasure13}{" "}
                {this.state.randomFood.strIngredient13}
              </li>
              <li>
                {this.state.randomFood.strMeasure14}{" "}
                {this.state.randomFood.strIngredient14}
              </li>
              <li>
                {this.state.randomFood.strMeasure15}{" "}
                {this.state.randomFood.strIngredient15}
              </li>
            </ul>
          </div>
          <h3 className="text-left mt-2 mb-3">Instructions:</h3>
          <p className="text-justify">
            {this.state.randomFood.strInstructions}
          </p>
        </div>
      </div>
    );
  }
}

export default RandomMeal;
