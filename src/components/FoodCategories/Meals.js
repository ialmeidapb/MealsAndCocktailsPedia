import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import TextInput from "../TextInput";
// import amaticsc from "../../assets/fonts/amaticsc.woff2"

import "../Homepages/mainhomepage.css";
import Navbar from "../Homepages/Navbar";

class Meals extends Component {
  state = {
    meals: [],
    originalMeals: [],
  };
  componentDidMount = async () => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.props.match.params.id}`
      );
      console.log(response);
      this.setState({
        meals: [...response.data.meals],
        originalMeals: [...response.data.meals],
      });
    } catch (err) {
      console.error(err);
    }
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.searchedItem !== this.state.searchedItem) {
      const filteredArray = this.state.originalMeals.filter((meal) =>
        meal.strMeal
          .toLowerCase()
          .includes(this.state.searchedItem.toLowerCase())
      );
      this.setState({ meals: filteredArray });
    }
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    return (
      <div>
        <Navbar className="bar" style={{ zIndex: 1 }} />
        <div className="allMeals">
          <div className="search container mt-5" style={{ zIndex: 2 }}>
            <p>Search</p>
            <TextInput
              name="searchedItem"
              value={this.state.searchedItem}
              id="searchedItem"
              onChange={this.handleChange}
            />
          </div>
          <div className="d-flex justify-content-around m-5 wrap flex-wrap">
            {this.state.meals.map((meal) => {
              return (
                <div key={meal.idMeal} className="card bg-dark text-white m-3">
                  <Link to={`/foods/meals/${meal.idMeal}`}>
                    <img
                      src={meal.strMealThumb}
                      className="card-img"
                      style={{ width: "300px" }}
                      alt={meal.strMeal}
                    />
                    <div className="card-img-overlay">
                      <h4 className="textCard">{meal.strMeal}</h4>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default Meals;
