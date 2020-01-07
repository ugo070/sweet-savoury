import React from "react";
import UserContext from "../../context/UserContext";

const HomePage = props => (
  <div>
    <UserContext.Consumer>
      {context => (
        <>
          <h1>Home Page (protected)</h1>
          <h2>Welcome, {context.user && context.user.username}!</h2>
        </>
      )}
    </UserContext.Consumer>
  </div>
);

export default HomePage;
