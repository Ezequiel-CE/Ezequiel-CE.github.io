import React, { useEffect, useState } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import "./Resume.css";
import curriculum from "../../assets/curriculum.pdf";
import { Document, Page } from "react-pdf";
import spinner from "../../assets/spinner.svg";

//fix for the pdf
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = ({ footerEl }) => {
  const [width, setWidth] = useState(window.innerWidth);

  const [finishLoad, setFinishLoad] = useState(false);

  const finishLoadHandler = () => {
    setFinishLoad(true);
  };

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

  const loadSpinner = (
    <div className="load">
      <img src={spinner} alt="spiner" />
    </div>
  );

  const btnRow = (
    <Row
      style={{
        justifyContent: "center",
        position: "relative",
        padding: "50px",
      }}
    >
      <Button
        className="donwload-btn "
        variant="primary"
        href={curriculum}
        target="_blank"
      >
        <AiOutlineDownload /> Download CV
      </Button>
    </Row>
  );

  return (
    <Container
      fluid
      className="resume-section"
      style={{ height: finishLoad ? "auto" : "100vh" }}
    >
      <Row className="resume">
        <Document
          file={curriculum}
          loading={loadSpinner}
          onLoadSuccess={finishLoadHandler}
          className="d-flex justify-content-center"
        >
          <Page pageNumber={1} width={width > 786 ? 800 : 350} />
        </Document>
      </Row>

      {finishLoad && btnRow}
    </Container>
  );
};

export default Resume;
