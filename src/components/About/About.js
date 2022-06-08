import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AboutCardIng from "./AboutCardIng";
import AboutCardEsp from "./AboutCardEsp";
import img from "../../assets/aboutImg.svg";
import "./About.css";
import Stack from "./Stack";
import Tools from "./Tools";
import { useSelector } from "react-redux";

const About = () => {
  const language = useSelector((state) => state.language.currentLanguage);

  let title;
  let sub;
  let sub2;

  if (language === "ing") {
    title = (
      <h1 className="about-know">
        Know Who <strong className="purple">I'M</strong>
      </h1>
    );
    sub = <strong>Skillset </strong>;
    sub2 = (
      <h1 style={{ textAlign: "center" }}>
        <strong className="purple">Tools</strong> I use
      </h1>
    );
  } else {
    title = (
      <h1 className="about-know">
        Conoce quien <strong className="purple">SOY</strong>
      </h1>
    );
    sub = <strong>Habilidades </strong>;
    sub2 = (
      <h1 style={{ textAlign: "center" }}>
        <strong className="purple">Herramientas</strong> que uso
      </h1>
    );
  }

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
            {title}
            {language === "ing" ? <AboutCardIng /> : <AboutCardEsp />}
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
        <h1 style={{ textAlign: "center" }}>{sub}</h1>
        <Stack />
        {sub2}
        <Tools />
      </Container>
    </Container>
  );
};

export default About;
