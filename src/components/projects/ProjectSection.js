import { Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import "./project.css";
import { useSelector } from "react-redux";
import { projectsEng, projectsEsp } from "../../utils/projectSectionInfo";

const ProjectSection = () => {
  const language = useSelector((state) => state.language.currentLanguage);
  const projects = language === "ing" ? projectsEng : projectsEsp;
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      {projects.map((project, i) => (
        <Col key={i} md={4} className="project-card">
          <ProjectCard
            img={project.img}
            title={project.title}
            description={project.description}
            link={project.link}
            done={project.done}
          />
        </Col>
      ))}
    </Row>
  );
};

export default ProjectSection;
