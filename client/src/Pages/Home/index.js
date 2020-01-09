import React from "react";
// import Hero from "../../component/Hero";
import { Col, Row, Container } from "../../component/Grid";
import Homepage from "../images/homepage.jpg";
import "./style.css";

function Home() {
  return (
    <div
    // style={{
    //   background: `url(${Homepage})`,
    //   backgroundRepeat: "no-repeat",
    //   backgroundSize: "100% 100%"
    //   // height: "100vh"
    // }}
    >
      <div className="crossfade">
        <figure></figure>
        <figure></figure>
        <figure></figure>
        <figure></figure>
        <figure></figure>
        <figure></figure>
        <figure></figure>
        <figure></figure>
        <figure></figure>
        <figure></figure>
        <figure></figure>
        <figure></figure>
        <figure></figure>
        <figure></figure>
        <figure></figure>
      </div>

      {/* <Hero backgroundImage href="#">
        <img className="homepage" src={Homepage} alt="logo" />
      </Hero> */}

      <Container className="container ">
        <h1>I'm Sweet & I'm Savory !</h1>
        <Row className="Row">
          <Col size="md-12">
            <h2> First Premier Online Food CateringHub</h2>
          </Col>
        </Row>
        <Row className="Row">
          <Col className="Col" size="md-12">
            <p>
              Sweet & Savory Food CateringHub is a free online eCommerce
              Catering platform for private and commericail services.Small and
              medium food vendors register their product and services on the hub
              to render services to their clients.
            </p>
            <p>
              This site is hypothetically an online based catering solution
              where small and medium caterers,chefs, nutritionists, producers,
              and foodies can build a fully hosted online stores for their
              business.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
