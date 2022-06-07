import { Col, Row } from "react-bootstrap";
import TypeWriterComponent from "./TypeWriterComponent";
import "./Home.css";
import homeLogo from "../../assets/homeLogo.svg";

const HomeSection1 = () => {
  return (
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
      <Col
        md={5}
        style={{
          paddingBottom: 40,
        }}
      >
        <img
          src={homeLogo}
          alt="homepage pic"
          className="img-fluid logo-home"
          style={{
            maxHeight: "450px",
          }}
        />
      </Col>
    </Row>
  );
};

export default HomeSection1;
