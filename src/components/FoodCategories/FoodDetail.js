import React, { Component } from "react";
import axios from "axios";



class FoodDetail extends Component{
    state = {
        food: "",
      };

      componentDidMount = async () => {
        console.log(this.props.match.params.code)
        try {
          const response = await axios.get(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.props.match.params.id}`
          );
          console.log(response)
          this.setState({ food: { ...response.data.meals[0] } });
        } catch (err) {
          console.error(err);
        }
      };

    render=()=>{
        return(
            <div>
           
            <div className="container mt-5 text-center">
            <img src={this.state.food.strMealThumb} width="100px"></img>
            <h1>{this.state.food.strMeal}</h1>
            <h4>{this.state.food.strTags} &nbsp; {this.state.food.strArea} </h4>
            <p className="text-justify">{this.state.food.strInstructions}</p>
            
            </div>



            </div>
        )
    }
}

export default FoodDetail;