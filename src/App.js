import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from "./Pages/images/logo.svg.jpg";
import "./App.css";
import "./index.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Createstore from "./Pages/Createstore";
import Contact from "./Pages/contact";
import Search from "./Pages/Search";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Wrapper from "./component/Wrapper";

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
          <Route path="/contact" component={Contact} />
          <Route exact path="/search" component={Search} />
        </Wrapper>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
