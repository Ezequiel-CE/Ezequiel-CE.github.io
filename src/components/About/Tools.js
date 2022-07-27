import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiGithub,
  SiGit,
  SiWindows,
  SiUbuntu,
} from "react-icons/si";
import "./About.css";

const Tools = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
        <p>Linux</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiUbuntu />
        <p>Ubuntu</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p>Visual studio code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p>Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <p>Github</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit />
        <p>Git</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
        <p>Windows</p>
      </Col>
    </Row>
  );
};

export default Tools;
