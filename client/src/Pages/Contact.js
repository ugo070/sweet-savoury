import React from "react";
import { Link, Route } from "react-router-dom";

function Contact(props) {
  return (
    <div class="container">
      <form action="action_page.php">
        <label for="fname">First Name</label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your name.."
        />
        <label for="lname">Last Name</label>
        <input
          type="text"
          id="lname"
          name="lastname"
          placeholder="last name.."
        />
        <label for="lname">Email</label>
        <input
          type="text"
          id="email"
          name="example@gmail.com"
          placeholder=" Email"
        />
        <label for="country">Country</label>
        <select id="country" name="country">
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>

        <label for="subject">Subject</label>
        <textarea
          id="subject"
          name="subject"
          placeholder="Write here.."
          style={{ height: "200px" }}
        ></textarea>

        <input type="submit" value="Submit" />
      </form>
      <Link to="contact/learn" role="button" className="btn btn-link">
        Learn More
      </Link>{" "}
      <Link to="/contact" role="button" className="btn btn-link">
        Help
      </Link>
    </div>
  );
}

export default Contact;
