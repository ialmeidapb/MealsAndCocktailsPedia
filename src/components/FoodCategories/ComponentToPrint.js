import React from 'react';
import ReactToPrint from 'react-to-print';
import FoodDetail from "./FoodDetail"




class ComponentToPrint extends React.PureComponent {
    render() {
      return (
        <div>
           
        <div className="container mt-5 text-center">
        <img className="m-5" src={this.props.food.food.strMealThumb} width="400px"></img>
        <h1 className="mt-5">{this.props.food.food.strMeal}</h1>
        <h4 className="mb-5">Origin: {this.props.food.food.strArea} </h4>
        
        <div className="text-left mt-2 mb-2">
        <ul><h3>Ingredients:</h3>
        {/* <li>{this.props.food.food[`strIngredient${indice}`]}</li> */}
        <li>{this.props.food.food.strMeasure1} {this.props.food.food.strIngredient1}</li>
        <li>{this.props.food.food.strMeasure2} {this.props.food.food.strIngredient2}</li>
        <li>{this.props.food.food.strMeasure3} {this.props.food.food.strIngredient3}</li>
        <li>{this.props.food.food.strMeasure4} {this.props.food.food.strIngredient4}</li>
        <li>{this.props.food.food.strMeasure5} {this.props.food.food.strIngredient5}</li>
        <li>{this.props.food.food.strMeasure6} {this.props.food.food.strIngredient6}</li>
        <li>{this.props.food.food.strMeasure7} {this.props.food.food.strIngredient7}</li>
        <li>{this.props.food.food.strMeasure8} {this.props.food.food.strIngredient8}</li>
        <li>{this.props.food.food.strMeasure9} {this.props.food.food.strIngredient9}</li>
        <li>{this.props.food.food.strMeasure10} {this.props.food.food.strIngredient10}</li>
        <li>{this.props.food.food.strMeasure11} {this.props.food.food.strIngredient11}</li>
        <li>{this.props.food.food.strMeasure12} {this.props.food.food.strIngredient12}</li>
        <li>{this.props.food.food.strMeasure13} {this.props.food.food.strIngredient13}</li>
        <li>{this.props.food.food.strMeasure14} {this.props.food.food.strIngredient14}</li>
        <li>{this.props.food.food.strMeasure15} {this.props.food.food.strIngredient15}</li>

        </ul>
        </div>
        <h3 className="text-left mt-2 mb-3">Instructions:</h3>
        <p className="text-justify">{this.props.food.food.strInstructions}</p>

      
        
        </div>



        </div>
      );
    }
  }

  export default ComponentToPrint;