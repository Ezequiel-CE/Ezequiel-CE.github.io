import { Container, Row, Button } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import "./Resume.css";
import curriculum from "../../assets/Curriculum.png";
import curriculumPdf from "../../assets/Currículumv5.pdf";

const Resume = ({ footerEl }) => {
  return (
    <Container fluid className="resume-section">
      <h1 style={{ textAlign: "center", fontSize: "2.1em" }}>
        My <strong className="purple">Resume</strong>
      </h1>
      <Row className="resume">
        <img src={curriculum} alt="curriculum" />
      </Row>
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
          href={curriculumPdf}
          target="_blank"
        >
          <AiOutlineDownload /> Download CV
        </Button>
      </Row>
    </Container>
  );
};

export default Resume;
