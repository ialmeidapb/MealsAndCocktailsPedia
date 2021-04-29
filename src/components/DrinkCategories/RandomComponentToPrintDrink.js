import React from 'react';
import ReactToPrint from 'react-to-print';
import RandomDrink from "./RandomDrink"
import VerticalNavbar from "../Homepages/VerticalNavbar"

import "../Homepages/verticalNavbar.css"


class RandomComponentToPrint extends React.PureComponent {
    render() {
      return (<div>
           
        <div className="container mt-5 text-center">
        <img src={this.props.drink.randomDrink.strDrinkThumb} width="400px"></img>
        <h1 className="mt-5">{this.props.drink.randomDrink.strDrink}</h1>
        <h4 className="mb-5">Recommended Glass: {this.props.drink.randomDrink.strGlass}</h4>
        <h5>{this.props.drink.randomDrink.attenuation_level} </h5>
        <div className="text-left mt-2 mb-2">
        <ul><h3>Ingredients:</h3>
        {/* <li>{this.props.drink.drink[`strIngredient${indice}`]}</li> */}
        <li>{this.props.drink.randomDrink.strMeasure1} {this.props.drink.randomDrink.strIngredient1}</li>
        <li>{this.props.drink.randomDrink.strMeasure2} {this.props.drink.randomDrink.strIngredient2}</li>
        <li>{this.props.drink.randomDrink.strMeasure3} {this.props.drink.randomDrink.strIngredient3}</li>
        <li>{this.props.drink.randomDrink.strMeasure4} {this.props.drink.randomDrink.strIngredient4}</li>
        <li>{this.props.drink.randomDrink.strMeasure5} {this.props.drink.randomDrink.strIngredient5}</li>
        <li>{this.props.drink.randomDrink.strMeasure6} {this.props.drink.randomDrink.strIngredient6}</li>
        <li>{this.props.drink.randomDrink.strMeasure7} {this.props.drink.randomDrink.strIngredient7}</li>
        <li>{this.props.drink.randomDrink.strMeasure8} {this.props.drink.randomDrink.strIngredient8}</li>
        <li>{this.props.drink.randomDrink.strMeasure9} {this.props.drink.randomDrink.strIngredient9}</li>
        <li>{this.props.drink.randomDrink.strMeasure10} {this.props.drink.randomDrink.strIngredient10}</li>
        <li>{this.props.drink.randomDrink.strMeasure11} {this.props.drink.randomDrink.strIngredient11}</li>
        <li>{this.props.drink.randomDrink.strMeasure12} {this.props.drink.randomDrink.strIngredient12}</li>
        <li>{this.props.drink.randomDrink.strMeasure13} {this.props.drink.randomDrink.strIngredient13}</li>
        <li>{this.props.drink.randomDrink.strMeasure14} {this.props.drink.randomDrink.strIngredient14}</li>
        <li>{this.props.drink.randomDrinkstrMeasure15} {this.props.drink.randomDrink.strIngredient15}</li>

        </ul>
        </div>
        <h3 className="text-left mt-2 mb-3">Instructions:</h3>
        <p className="text-justify">{this.props.drink.randomDrink.strInstructions}</p>
        
        </div>



        </div>
      );
    }
  }

  export default RandomComponentToPrint;