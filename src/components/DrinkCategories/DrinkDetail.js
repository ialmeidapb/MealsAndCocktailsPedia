import React, { Component } from "react";
import axios from "axios";



class DrinkDetail extends Component{
    state = {
        drink: "",
      };

      componentDidMount = async () => {
        console.log(this.props.match.params.code)
        try {
          const response = await axios.get(
            `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.props.match.params.id}`
          );
          console.log(response)
          this.setState({ drink: { ...response.data.drinks[0] } });
        } catch (err) {
          console.error(err);
        }
      };

    render=()=>{
        return(
            <div>
           
            <div className="container mt-5 text-center">
            <img src={this.state.drink.strDrinkThumb} width="400px"></img>
            <h1>{this.state.drink.strDrink}</h1>
            <h4>Recommended Glass: {this.state.drink.strGlass}</h4>
            <h5>{this.state.drink.attenuation_level} </h5>
            <div className="text-left mt-2 mb-2">
            <ul><h3>Ingredients:</h3>
            {/* <li>{this.state.drink[`strIngredient${indice}`]}</li> */}
            <li>{this.state.drink.strMeasure1} {this.state.drink.strIngredient1}</li>
            <li>{this.state.drink.strMeasure2} {this.state.drink.strIngredient2}</li>
            <li>{this.state.drink.strMeasure3} {this.state.drink.strIngredient3}</li>
            <li>{this.state.drink.strMeasure4} {this.state.drink.strIngredient4}</li>
            <li>{this.state.drink.strMeasure5} {this.state.drink.strIngredient5}</li>
            <li>{this.state.drink.strMeasure6} {this.state.drink.strIngredient6}</li>
            <li>{this.state.drink.strMeasure7} {this.state.drink.strIngredient7}</li>
            <li>{this.state.drink.strMeasure8} {this.state.drink.strIngredient8}</li>
            <li>{this.state.drink.strMeasure9} {this.state.drink.strIngredient9}</li>
            <li>{this.state.drink.strMeasure10} {this.state.drink.strIngredient10}</li>
            <li>{this.state.drink.strMeasure11} {this.state.drink.strIngredient11}</li>
            <li>{this.state.drink.strMeasure12} {this.state.drink.strIngredient12}</li>
            <li>{this.state.drink.strMeasure13} {this.state.drink.strIngredient13}</li>
            <li>{this.state.drink.strMeasure14} {this.state.drink.strIngredient14}</li>
            <li>{this.state.drink.strMeasure15} {this.state.drink.strIngredient15}</li>

            </ul>
            </div>
            <h3 className="text-left mt-2 mb-3">Instructions:</h3>
            <p className="text-justify">{this.state.drink.strInstructions}</p>
            
            </div>



            </div>
        )
    }
}

export default DrinkDetail;