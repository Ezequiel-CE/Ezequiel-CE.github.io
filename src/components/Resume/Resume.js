import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import "./Resume.css";
import curriculum from "../../assets/curriculum.pdf";
import { Document, Page } from "react-pdf";

const Resume = () => {
  return (
    <>
      <Container fluid className="resume-section">
        <Row className="resume">
          <Document file={curriculum}>
            <Page pageNumber={1} />
          </Document>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={curriculum}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload /> Download CV
          </Button>
        </Row>
      </Container>
    </>
  );
};

export default Resume;
