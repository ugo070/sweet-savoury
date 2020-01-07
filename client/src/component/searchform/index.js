import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="caterers">CaterersName:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="caterer"
          list="nutritionist"
          type="text"
          className="form-control"
          placeholder="Type in Food Category"
          id="Foodie"
        />
        <datalist id="Foodie">
          {props.foodie.map(foodie => (
            <option value={foodie} key={foodie} />
          ))}
        </datalist>
        <button
          type="submit"
          onClick={props.handleFormSubmit}
          className="btn btn-success"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
