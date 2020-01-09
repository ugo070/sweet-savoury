import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./index.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Createstore from "./Pages/Createstore";
import Contact from "./Pages/Contact";
import Search from "./Pages/Search";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Wrapper from "./component/Wrapper";
import authenticatedAxios from "./utils/AuthenticatedAxios";
import ProtectedRoute from "./utils/ProtectedRoute";
import LoginPage from "./Pages/Login";
import Signup from "./Pages/Signup";
import HomePage from "./Pages/Home/HomePage";
import UserContext from "./context/UserContext";

function App() {
  return (
    <Router>
      <div>
        <Navbar></Navbar>
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/createstore" component={Createstore} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/homepage" component={HomePage} />
          <Route exact path="/context" component={UserContext} />
          <Route exact path="/contact/learn" component={Contact}></Route>
        </Wrapper>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
