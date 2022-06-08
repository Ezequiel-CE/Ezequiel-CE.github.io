import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

const AboutCardEsp = () => {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <div className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola a todos, soy
            <span className="purple"> Carlos Ezequiel Carrizo Escudero </span>
            de <span className="purple"> La Rioja, Argentina.</span>
            <br />
            Soy un estudiante de la Tecnicatura Universitaria en Programación de
            la UTN , el cual quiere obtener su primer trabajo en la industria.
            <br />
            <br />
            Además de programar, ¡algunas otras actividades que me encantan
            hacer!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jugar Videojuegos
            </li>
            <li className="about-activity">
              <ImPointRight /> Ver películas y series
            </li>
            <li className="about-activity">
              <ImPointRight /> Viajar
            </li>
          </ul>

          <blockquote
            style={{ textAlign: "center", color: "rgb(155 126 172)" }}
          >
            <p style={{ color: "rgb(155 126 172)" }}>
              "Las pruebas conducen al fracaso y el fracaso conduce a la
              comprensión.”
            </p>
            <footer className="blockquote-footer">Burt Rutan</footer>
          </blockquote>
        </div>
      </Card.Body>
    </Card>
  );
};

export default AboutCardEsp;
