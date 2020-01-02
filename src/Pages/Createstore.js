import React, { Component } from "react";
import API from "../utils/Apis.js";
import Card from "../component/Card";
import Alert from "../component/Alert";

class Createstore extends Component {
  state = {
    image: "",
    match: false,
    matchCount: 0
  };

  // When the component mounts,
  componentDidMount() {
    this.loadCaterer();
  }

  handleBtnClick = event => {
    // Get the data-value of the clicked button
    const btnType = event.target.attributes.getNamedItem("data-value").value;
    // Clone this.state to the newState object
    // We'll modify this object and use it to set our component's state
    const newState = { ...this.state };

    if (btnType === "pick") {
      // Set newState.match to either true or false depending on match
      newState.match = 1 === Math.floor(Math.random() * 5) + 1;

      // Set newState.matchCount equal to its current value or its current value + 1
      newState.matchCount = newState.match
        ? newState.matchCount + 1
        : newState.matchCount;
    } else {
      newState.match = false;
    }

    this.setState(newState);
    this.loadNextCaterer();
  };

  loadNextCaterer = () => {
    API.getRandomCaterer()
      .then(res =>
        this.setState({
          image: res.data.message
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <h1 className="text-center">Food Category</h1>
        <h3 className="text-center">Thumbs up on any category you like!</h3>
        {/* <Card image={this.state.image} handleBtnClick={this.handleBtnClick} /> */}
        <h1 className="text-center">
          Food Category {this.state.matchCount} Foodie!
        </h1>
        {/* <Alert style={{ opacity: this.state.match ? 1 : 0 }} type="success">
          Yay! That Caterer Liked You Too!!!
        </Alert> */}
      </div>
    );
  }
}

export default Createstore;
