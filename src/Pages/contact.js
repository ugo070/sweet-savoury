import React from "react";
import { Link, Route } from "react-router-dom";
import Learn from "./contact";

function Contact(props) {
  return (
    <div>
      <div id="main-container" className="container">
        <section className="main-section">
          <h1>Contact</h1>
          <form id="contact-form">
            <ul>
              <li>
                <label for="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Smith"
                  required="required"
                ></input>
                <li>
                  <label for="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="example@gmail.com"
                    required="required"
                  ></input>
                  <li>
                    <label for="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      required="required"
                    ></textarea>
                  </li>
                </li>
                <input type="submit" />
              </li>
            </ul>
          </form>
          <Link
            to={`${props.match.url}/learn`}
            role="button"
            className="btn btn-link"
          >
            Learn More
          </Link>{" "}
          <Link to="/contact" role="button" className="btn btn-link">
            Help
          </Link>
          <Route
            exact
            path={`${props.match.url}/learn`}
            component={Learn}
          ></Route>
        </section>
      </div>
    </div>
  );
}

export default Contact;
