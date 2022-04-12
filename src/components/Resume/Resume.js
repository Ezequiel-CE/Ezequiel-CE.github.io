import React, { useEffect, useState } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import "./Resume.css";
import curriculum from "../../assets/curriculum.pdf";
import { Document, Page } from "react-pdf";
//fix for the pdf
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleRezise = () => {
      const windowWidth = window.innerWidth;
      setWidth(windowWidth);
    };
    window.addEventListener("resize", handleRezise);

    return () => {
      window.removeEventListener("resize", handleRezise);
    };
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Row className="resume">
          <Document file={curriculum} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
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
    </div>
  );
};

export default Resume;
