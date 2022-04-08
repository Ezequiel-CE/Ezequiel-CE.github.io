import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TypeWriterComponent from "./TypeWriterComponent";
import homeLogo from "../../assets/homeLogo.svg";
import "./Home.css";

const Home = () => {
  return (
    <section>
      <Container fluid className="home-section" id="home"></Container>
      <Container className="home-content">
        <Row>
          <Col md={7} className="home-header">
            <h1 style={{ paddingBottom: 15 }} className="heading">
              Hi There!
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </h1>
            <h1 className="heading-name">
              I'm
              <strong className="main-name">
                Carlos Ezequiel Carrizo Escudero
              </strong>
            </h1>
            <div style={{ padding: 50, textAlign: "left" }}>
              <TypeWriterComponent />
            </div>
          </Col>
          <Col md={5} style={{ paddingBottom: 20 }}>
            <img
              src={homeLogo}
              alt="homepage pic"
              className="img-fluid"
              style={{ maxHeight: "450px" }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
