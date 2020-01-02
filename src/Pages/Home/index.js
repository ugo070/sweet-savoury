import React from "react";
import Hero from "../../component/Hero";
import { Col, Row, Container } from "../../component/Grid";
import Homepage from "../images/homepage.jpg";
import "./style.css";

function Home() {
  return (
    <div
      style={{
        background: `url(${Homepage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        height: "100vh"
      }}
    >
      <Hero backgroundImage href="#">
        {/* <img className="homepage" src={Homepage} alt="logo" /> */}
        <h3>Premier Online Food CateringHub</h3>
      </Hero>
      <Container className="container " style={{ marginTop: 30 }}>
        <Row className="Row">
          <Col size="md-12">
            <h5> I am Sweet & Savoury !</h5>
          </Col>
        </Row>
        <Row className="Row">
          <Col className="Col" size="md-12">
            <p>
              S & S Food CateringHub is an online free eCommerce platform for
              food catering services for commercial and private services. Small
              and medium food vendors register their product and services on the
              hub to render services to their clients. <br />
              This is hypothetically an online based catering solution where
              small and medium caterers can build a fully hosted online stores
              for their business
              <br />
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
