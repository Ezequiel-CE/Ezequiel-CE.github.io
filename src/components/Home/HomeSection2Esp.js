import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import avatar from "../../assets/profile.png";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const HomeSection2Esp = () => {
  return (
    <Container className="section2-container">
      <Container>
        <Row>
          <Col md={7} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              PERMÍTAME <span className="purple"> PRESENTARME </span>
            </h1>
            <p className="home-about-body">
              Me enamoré de la programación y he aprendido mucho, creo… 🤷‍♂️
              <br />
              <br />
              Soy fluido en clásicos como
              <i>
                <b className="purple"> Javascript y Python. </b>
              </i>
              <br />
              <br />
              Mi campo de interés es el desarrollo de{" "}
              <i>
                <b className="purple">nuevas tecnologías web y productos </b> ,
              </i>
              también en áreas relacionadas con el{" "}
              <i>
                <b className="purple">desarrollo móvil y Videojuegos.</b>
              </i>
              <br />
              <br />
              Siempre que puedo, también aplico mi pasión por desarrollar
              productos con <b className="purple">Node.js</b> y
              <i>
                <b className="purple">
                  {" "}
                  librerías modernas de JavaScript y Frameworks
                </b>
              </i>{" "}
              como
              <i>
                <b className="purple"> ReactJs , NextJs.</b>
              </i>
            </p>
          </Col>
          <Col md={1} />
          <Col md={4} className="myAvtar">
            <img src={avatar} className="img-fluid" alt="avatar" />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ENCUÉNTRAME EN</h1>
            <p>
              Siéntete libre de <span className="purple">conectar </span>conmigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Ezequiel-CE"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/CarrizoEzequie4"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ezequiel-carrizo-escudero-b45a42153/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default HomeSection2Esp;
