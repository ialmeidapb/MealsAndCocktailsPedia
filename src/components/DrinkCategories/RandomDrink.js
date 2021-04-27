import React, { Component } from "react";
import axios from "axios";

class RandomDrink extends Component {
    state = {
        randomDrink: "",
      };
    
      componentDidMount = async () => {
        console.log(this.props.match.params.code)
        try {
          const response = await axios.get(
            `https://www.thecocktaildb.com/api/json/v1/1/random.php`
          );
          console.log(response)
          this.setState({ randomDrink: { ...response.data.drinks[0] } });
        } catch (err) {
          console.error(err);
        }
      };
    
    
    render() {
        return (
            <div>
           
            <div className="container mt-5 text-center">
            <img src={this.state.randomDrink.strDrinkThumb} width="400px"></img>
            <h1 className="mt-5">{this.state.randomDrink.strDrink}</h1>
            <h4 className="mb-5">Recommended Glass: {this.state.randomDrink.strGlass}</h4>
           
            <div className="text-left mt-2 mb-2">
            <ul><h3>Ingredients:</h3>
            {/* <li>{this.state.randomDrink[`strIngredient${indice}`]}</li> */}
            <li>{this.state.randomDrink.strMeasure1} {this.state.randomDrink.strIngredient1}</li>
            <li>{this.state.randomDrink.strMeasure2} {this.state.randomDrink.strIngredient2}</li>
            <li>{this.state.randomDrink.strMeasure3} {this.state.randomDrink.strIngredient3}</li>
            <li>{this.state.randomDrink.strMeasure4} {this.state.randomDrink.strIngredient4}</li>
            <li>{this.state.randomDrink.strMeasure5} {this.state.randomDrink.strIngredient5}</li>
            <li>{this.state.randomDrink.strMeasure6} {this.state.randomDrink.strIngredient6}</li>
            <li>{this.state.randomDrink.strMeasure7} {this.state.randomDrink.strIngredient7}</li>
            <li>{this.state.randomDrink.strMeasure8} {this.state.randomDrink.strIngredient8}</li>
            <li>{this.state.randomDrink.strMeasure9} {this.state.randomDrink.strIngredient9}</li>
            <li>{this.state.randomDrink.strMeasure10} {this.state.randomDrink.strIngredient10}</li>
            <li>{this.state.randomDrink.strMeasure11} {this.state.randomDrink.strIngredient11}</li>
            <li>{this.state.randomDrink.strMeasure12} {this.state.randomDrink.strIngredient12}</li>
            <li>{this.state.randomDrink.strMeasure13} {this.state.randomDrink.strIngredient13}</li>
            <li>{this.state.randomDrink.strMeasure14} {this.state.randomDrink.strIngredient14}</li>
            <li>{this.state.randomDrink.strMeasure15} {this.state.randomDrink.strIngredient15}</li>

            </ul>
            </div>
            <h3 className="text-left mt-2 mb-3">Instructions:</h3>
            <p className="text-justify">{this.state.randomDrink.strInstructions}</p>
            
            </div>



            </div>
        )
    }
}


export default RandomDrink;