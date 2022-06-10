import { Container } from "react-bootstrap";
import ProjectSection from "./ProjectSection";
import { useSelector } from "react-redux";
import "./project.css";

const Project = () => {
  const language = useSelector((state) => state.language.currentLanguage);
  const isEnglish = language === "ing";

  const title = isEnglish ? (
    <h1 className="project-heading">
      My <strong className="purple">Works </strong>
    </h1>
  ) : (
    <h1 className="project-heading">
      Mis <strong className="purple">proyectos </strong>
    </h1>
  );

  return (
    <Container fluid className="project-section">
      <Container style={{ textAlign: "center" }}>
        {title}
        <p style={{ color: "white" }}>
          {isEnglish
            ? "Here are a few projects I've worked on."
            : "Estos son algunos de los proyectos en los que he trabajado."}
        </p>
        <ProjectSection />
      </Container>
    </Container>
  );
};

export default Project;
