import React from "react";
import { Link, Route } from "react-router-dom";
import Learn from "./contact";

function Contact(props) {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>I</p>
      <Link
        to={`${props.match.url}/learn`}
        role="button"
        className="btn btn-link"
      >
        Learn More
      </Link>{" "}
      <Link to="/contact" role="button" className="btn btn-link">
        Learn Less
      </Link>
      <Route exact path={`${props.match.url}/learn`} component={Learn} />
    </div>
  );
}

export default Contact;
