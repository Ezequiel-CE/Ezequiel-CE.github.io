import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiHtml5,
  DiCss3Full,
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiMysql,
  DiJqueryLogo,
  DiBootstrap,
} from "react-icons/di";

import {
  SiFirebase,
  SiJest,
  SiNextdotjs,
  SiExpress,
  SiStyledcomponents,
  SiMongodb,
  SiMaterialui,
  SiTailwindcss,
  SiRedux,
} from "react-icons/si";
import "./About.css";

const Stack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <p>HTML5</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3Full />
        <p>CSS3</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJqueryLogo />
        <p>jQuery</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
        <p>Tailwindcss</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap />
        <p>Bootstrap</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p>JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p>ReactJs</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
        <p>Redux</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiStyledcomponents />
        <p>Styled components</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMaterialui />
        <p>Material Ui</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
        <p>Nextjs</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJest />
        <p>Jest</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <p>Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p>NodeJs</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
        <p>ExpressJs</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
        <p>MongoDb</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <p>Firebase</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
        <p>MySQL</p>
      </Col>
    </Row>
  );
};

export default Stack;
