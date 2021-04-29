import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import TextInput from "../TextInput";

import "../Homepages/mainhomepage.css";
import Navbar from "../Homepages/Navbar";

class Drinks extends Component {
  state = {
    drinks: [],
    originalDrinks: [],
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${this.props.match.params.id}`
      );

      console.log(response);
      this.setState({
        drinks: [...response.data.drinks],
        originalDrinks: [...response.data.drinks],
      });
    } catch (err) {
      console.error(err);
    }
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.searchedItem !== this.state.searchedItem) {
      const filteredArray = this.state.originalDrinks.filter((drink) =>
        drink.strDrink
          .toLowerCase()
          .includes(this.state.searchedItem.toLowerCase())
      );
      this.setState({ drinks: filteredArray });
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

        <div className="allMeals" style={{ zIndex: 2 }}>
          <div className=" search container mt-5">
            <p>Search</p>
            <TextInput
              name="searchedItem"
              value={this.state.searchedItem}
              id="searchedItem"
              onChange={this.handleChange}
            />
          </div>

          <div className="d-flex justify-content-around m-5 wrap flex-wrap">
            {this.state.drinks.map((drink) => {
              return (
                <div
                  key={drink.idDrink}
                  className="card bg-dark text-white m-3"
                >
                  <Link to={`/drinks/cocktail/${drink.idDrink}`}>
                    <img
                      src={drink.strDrinkThumb}
                      className="card-img"
                      style={{ width: "300px" }}
                      alt={drink.strDrink}
                    />
                    <div className="card-img-overlay">
                      <h4 className="textCard">{drink.strDrink}</h4>
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

export default Drinks;
