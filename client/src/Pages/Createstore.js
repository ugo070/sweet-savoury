import React, { Component } from "react";
import axios from "axios";

export default class Createstore extends Component {
  constructor(props) {
    super(props);

    this.onChangeCaterersDescription = this.onChangeCaterersDescription.bind(
      this
    );
    this.onChangeCaterersResponsible = this.onChangeCaterersResponsible.bind(
      this
    );
    this.onChangeCaterersPriority = this.onChangeCaterersPriority.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      caterers_description: "",
      caterers_responsible: "",
      caterers_priority: "",
      caterers_completed: false
    };
  }
  onChangeCaterersDescription(e) {
    this.setState({
      todo_description: e.target.value
    });
  }

  onChangeCaterersResponsible(e) {
    this.setState({
      caterers_responsible: e.target.value
    });
  }

  onChangeCaterersPriority(e) {
    this.setState({
      caterers_priority: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(`Form submitted:`);
    console.log(`Caterers Description: ${this.state.caterers_description}`);
    console.log(`Caterers Responsible: ${this.state.caterers_responsible}`);
    console.log(`Caterers Priority: ${this.state.caterers_priority}`);

    const newCaterers = {
      caterers_description: this.state.caterers_description,
      caterers_responsible: this.state.caterers_responsible,
      caterers_priority: this.state.caterers_priority,
      caterers_completed: this.state.todo_completed
    };

    axios
      .post("http://localhost:3001/caterers/add", newCaterers)
      .then(res => console.log(res.data));

    this.setState({
      caterers_description: "",
      catererss_responsible: "",
      caterers_priority: "",
      caterers_completed: false
    });
  }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Create Store</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.caterers_description}
              onChange={this.onChangeCaterersDescription}
            />
          </div>
          <div className="form-group">
            <label>Responsible: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.caterers_responsible}
              onChange={this.onChangeCaterersResponsible}
            />
          </div>
          <div className="form-group">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityLow"
                value="Low"
                checked={this.state.caterers_priority === "Low"}
                onChange={this.onChangeCaterersPriority}
              />
              <label className="form-check-label">Low</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityMedium"
                value="Medium"
                checked={this.state.caterers_priority === "Medium"}
                onChange={this.onChangeCaterersPriority}
              />
              <label className="form-check-label">Medium</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityHigh"
                value="High"
                checked={this.state.caterers_priority === "High"}
                onChange={this.onChangeCaterersPriority}
              />
              <label className="form-check-label">High</label>
            </div>
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Create Caterers"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
