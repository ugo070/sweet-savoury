import React, { Component } from "react";
import API from "../utils/Apis.js";
import { Container } from "../component/Grid";
import SearchForm from "../component/searchform";
import SearchResults from "../component/searchresult";
import Alert from "../component/Alert";

class Search extends Component {
  state = {
    search: "",
    caterers: [],
    results: [],
    error: ""
  };

  // When the component mounts, get a list of all available base caterers and update this.state.breeds
  componentDidMount() {
    API.getBaseCaterersList()
      .then(res => this.setState({ caterers: res.data.message }))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getBaseCaterersList(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };
  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Search By Location!</h1>
          {/* <Alert
            type="location"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert> */}
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            caterers={this.state.caterers}
          />
          <SearchResults results={this.state.results} />
        </Container>
      </div>
    );
  }
}

export default Search;
