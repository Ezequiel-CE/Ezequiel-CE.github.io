import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AboutCard from "./AboutCard";
import img from "../../assets/aboutImg.svg";
import "./About.css";
import Stack from "./Stack";
import Tools from "./Tools";

const About = () => {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={6}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 className="about-know">
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <AboutCard />
          </Col>
          <Col md={2} />
          <Col
            md={4}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={img} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 style={{ textAlign: "center" }}>
          <strong>Skillset </strong>
        </h1>
        <Stack />

        <h1 style={{ textAlign: "center" }}>
          <strong className="purple">Tools</strong> I use
        </h1>
        <Tools />
      </Container>
    </Container>
  );
};

export default About;
