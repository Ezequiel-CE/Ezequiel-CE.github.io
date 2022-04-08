import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TypeWriterComponent from "./TypeWriterComponent";
import homeLogo from "../../assets/homeLogo.svg";
import "./Home.css";
import HomeSection2 from "./HomeSection2";

const Home = () => {
  return (
    <section>
      <Container fluid className="home-section" id="home"></Container>
      <Container className="home-content">
        <Row>
          <Col md={7} className="home-header">
            <h1 className="heading">
              Hi There!
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </h1>
            <h1 className="heading-name">
              I'm{" "}
              <strong className="main-name">
                Carlos Ezequiel Carrizo Escudero
              </strong>
            </h1>
            <div className="type-wrapper">
              <TypeWriterComponent />
            </div>
          </Col>
          <Col md={5} style={{ paddingBottom: 40 }}>
            <img
              src={homeLogo}
              alt="homepage pic"
              className="img-fluid logo-home"
              style={{ maxHeight: "450px" }}
            />
          </Col>
        </Row>
        <HomeSection2 />
      </Container>
    </section>
  );
};

export default Home;
