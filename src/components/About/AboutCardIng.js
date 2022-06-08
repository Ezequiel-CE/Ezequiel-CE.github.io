import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

const AboutCardIng = () => {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <div className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">Carlos Ezequiel Carrizo Escudero </span>
            from <span className="purple"> La Rioja, Argentina.</span>
            <br />I am a student pursuing an Associate degree in programming and
            wanting to get my first job as a junior in the industry.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies and Series
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <blockquote
            style={{ textAlign: "center", color: "rgb(155 126 172)" }}
          >
            <p style={{ color: "rgb(155 126 172)" }}>
              "Programming isn't about what you know; it's about what you can
              figure out.”
            </p>
            <footer className="blockquote-footer">Chris Pine</footer>
          </blockquote>
        </div>
      </Card.Body>
    </Card>
  );
};

export default AboutCardIng;
