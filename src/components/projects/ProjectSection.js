import { Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import calculator from "../../assets/calculator.png";
import weather from "../../assets/Weather.png";
import curriculum from "../../assets/curriculumMK.png";
import store from "../../assets/store.png";

import poke from "../../assets/poke.png";
import portafolio from "../../assets/portafolio.png";
import "./project.css";

const projectsEng = [
  {
    title: "Js Calculator",
    link: "https://github.com/Ezequiel-CE/JS-calculator",
    description:
      "One of my first projects,a simple calculator made with vanilla JavaScript, and DOM manipulation.",
    img: calculator,
    done: true,
  },
  {
    title: "Js Weather app",
    link: "https://github.com/Ezequiel-CE/weather-app",
    description:
      "This project was created for the purpose of learning how to use an API with vanilla javascript, in this case the OpenWeatherm API.",
    img: weather,
    done: true,
  },
  {
    title: "CV maker",
    link: "https://github.com/Ezequiel-CE/cv-maker-re",
    description:
      "Page build with reactjs and materialUI to make your own resume,it use react context hook to handle state.",
    img: curriculum,
    done: true,
  },
  {
    title: "Fake store",
    link: "https://github.com/Ezequiel-CE/shopping-cart",
    description:
      "e-commerce made with reactJs,reactRouter,reactBootstrap and Styled components, that make use of the fake store API to get the products ",
    img: store,
    done: true,
  },
  {
    title: "My portafolio",
    link: "https://github.com/Ezequiel-CE/Ezequiel-CE.github.io",
    description:
      "My personal website,build with Reactjs,reactBootstrap and use redux to hadndle the state of the page.",
    img: portafolio,
    done: true,
  },
  {
    title: "Pokemon card shop",
    link: "#",
    description:
      "Pokemon card shop build with nextjs,materialUi,Redux,and use authentication with Auth0.  Also save users in a mongodb database.",
    img: poke,
    done: false,
  },
];

const ProjectSection = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      {projectsEng.map((project, i) => (
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
