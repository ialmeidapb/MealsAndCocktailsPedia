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
            <img src={this.state.drink.strDrinkThumb} width="100px"></img>
            <h1>{this.state.drink.strDrink}</h1>
            <h4>Recommended Glass: {this.state.drink.strGlass}</h4>
            <h5>{this.state.drink.attenuation_level} </h5>
            <ul>
            {/* <li>{this.state.drink[`strIngredient${indice}`]}</li> */}
            <li>{this.state.drink.strIngredient1}</li>
            <li>{this.state.drink.strIngredient2}</li>
            <li>{this.state.drink.strIngredient3}</li>
            <li>{this.state.drink.strIngredient4}</li>
            <li>{this.state.drink.strIngredient5}</li>
            <li>{this.state.drink.strIngredient6}</li>
            <li>{this.state.drink.strIngredient7}</li>
            <li>{this.state.drink.strIngredient8}</li>
            <li>{this.state.drink.strIngredient9}</li>
            <li>{this.state.drink.strIngredient10}</li>
            <li>{this.state.drink.strIngredient11}</li>
            <li>{this.state.drink.strIngredient12}</li>
            <li>{this.state.drink.strIngredient13}</li>
            <li>{this.state.drink.strIngredient14}</li>
            <li>{this.state.drink.strIngredient15}</li>

            </ul>
            <p className="text-justify">{this.state.drink.strInstructions}</p>
            
            </div>



            </div>
        )
    }
}

export default DrinkDetail;