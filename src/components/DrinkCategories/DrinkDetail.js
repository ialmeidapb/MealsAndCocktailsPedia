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
            <h4>{this.state.drink.strGlass} &nbsp; {this.state.drink.strIBA} </h4>
            <h5>{this.state.drink.attenuation_level} </h5>
            <ul>
            {/* <li>{this.state.drink[`strIngredient${indice}`]}</li> */}
            
            </ul>
            <p className="text-justify">{this.state.drink.strInstructions}</p>
            
            </div>



            </div>
        )
    }
}

export default DrinkDetail;