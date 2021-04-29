import React from 'react';
import ReactToPrint from 'react-to-print';
import RandomMeal from "./RandomMeal"

import "../Homepages/verticalNavbar.css"


class RandomComponentToPrint extends React.PureComponent {
    render() {
      return (
        <div>
           
        <div className="container mt-5 text-center">
        <img className="m-5" src={this.props.food.randomFood.strMealThumb} width="400px"></img>
        <h1 className="mt-5">{this.props.food.randomFood.strMeal}</h1>
        <h4 className="mb-5">Origin: {this.props.food.randomFood.strArea} </h4>
        
        <div className="text-left mt-2 mb-2">
        <ul><h3>Ingredients:</h3>
        {/* <li>{this.props.food.food[`strIngredient${indice}`]}</li> */}
        <li>{this.props.food.randomFood.strMeasure1} {this.props.food.randomFood.strIngredient1}</li>
        <li>{this.props.food.randomFood.strMeasure2} {this.props.food.randomFood.strIngredient2}</li>
        <li>{this.props.food.randomFood.strMeasure3} {this.props.food.randomFood.strIngredient3}</li>
        <li>{this.props.food.randomFood.strMeasure4} {this.props.food.randomFood.strIngredient4}</li>
        <li>{this.props.food.randomFood.strMeasure5} {this.props.food.randomFood.strIngredient5}</li>
        <li>{this.props.food.randomFood.strMeasure6} {this.props.food.randomFood.strIngredient6}</li>
        <li>{this.props.food.randomFood.strMeasure7} {this.props.food.randomFood.strIngredient7}</li>
        <li>{this.props.food.randomFood.strMeasure8} {this.props.food.randomFood.strIngredient8}</li>
        <li>{this.props.food.randomFood.strMeasure9} {this.props.food.randomFood.strIngredient9}</li>
        <li>{this.props.food.randomFood.strMeasure10} {this.props.food.randomFood.strIngredient10}</li>
        <li>{this.props.food.randomFood.strMeasure11} {this.props.food.randomFood.strIngredient11}</li>
        <li>{this.props.food.randomFood.strMeasure12} {this.props.food.randomFood.strIngredient12}</li>
        <li>{this.props.food.randomFood.strMeasure13} {this.props.food.randomFood.strIngredient13}</li>
        <li>{this.props.food.randomFood.strMeasure14} {this.props.food.randomFood.strIngredient14}</li>
        <li>{this.props.food.randomFood.strMeasure15} {this.props.food.randomFood.strIngredient15}</li>

        </ul>
        </div>
        <h3 className="text-left mt-2 mb-3">Instructions:</h3>
        <p className="text-justify">{this.props.food.randomFood.strInstructions}</p>

      
        
        </div>



        </div>
      );
    }
  }

  export default RandomComponentToPrint;