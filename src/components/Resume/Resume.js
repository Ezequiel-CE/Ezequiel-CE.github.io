import { Container, Row, Button } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import "./Resume.css";
import curriculum from "../../assets/Curriculum.png";
import { useSelector } from "react-redux";
import curriculumPdf from "../../assets/curriculum.pdf";

const Resume = () => {
  const language = useSelector((state) => state.language.currentLanguage);

  const isEnglish = language === "ing";

  const title = isEnglish ? (
    <h1 style={{ textAlign: "center", fontSize: "2.1em" }}>
      My <strong className="purple">Resume</strong>
    </h1>
  ) : (
    <h1 style={{ textAlign: "center", fontSize: "2.1em" }}>
      Mi <strong className="purple">Curriculum</strong>
    </h1>
  );

  return (
    <Container fluid className="resume-section">
      {title}
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
          <AiOutlineDownload />{" "}
          {isEnglish ? "Download Resume" : "Descargar Curriculum"}
        </Button>
      </Row>
    </Container>
  );
};

export default Resume;
