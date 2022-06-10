import { Container } from "react-bootstrap";
import ProjectSection from "./ProjectSection";
import "./project.css";

const Project = () => {
  return (
    <Container fluid className="project-section">
      <Container style={{ textAlign: "center" }}>
        <h1 className="project-heading">
          My <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <ProjectSection />
      </Container>
    </Container>
  );
};

export default Project;
