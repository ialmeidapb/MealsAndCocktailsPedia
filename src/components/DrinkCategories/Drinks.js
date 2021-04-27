import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import TextInput from "../TextInput"

class Drinks extends Component {
  state = {
    drinks: [],
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${this.props.match.params.id}`
      );
      console.log(response);
      this.setState({ drinks: [...response.data.drinks] });
    } catch (err) {
      console.error(err);
    }
  };


  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.searchedItem !== this.state.searchedItem) {
      const filteredArray = this.state.drinks.filter((drink) =>
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
  
  <div className="container mt-5">
  <TextInput
            name="searchedItem"
            value={this.state.searchedItem}
            id="searchedItem"
            label="Search"
            onChange={this.handleChange}
          /></div>

        <div className="d-flex justify-content-around m-5 wrap flex-wrap">
          {this.state.drinks.map((drink) => {
            return (
              
              <div key={drink.idDrink} className="card bg-dark text-white m-3">
                <Link to={`/drinks/cocktail/${drink.idDrink}`}>
                <img
                  src={drink.strDrinkThumb}
                  className="card-img"
                  style={{ width: "300px" }}
                  alt={drink.strDrink}
                />
                <div className="card-img-overlay">
                  <h4
                    style={{
                      textShadow: "2px 4px 3px #FF2222",
                    }}
                    className="card-title d-flex justify-content-center text-center"
                  >
                    {drink.strDrink}
                  </h4>
                </div>
              </Link>
              </div>
              
            );
          })}
        </div>
  
      </div>
    );
  }
}

export default Drinks;
