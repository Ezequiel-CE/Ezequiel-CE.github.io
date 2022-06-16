import { Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import calculator from "../../assets/calculator.png";
import weather from "../../assets/Weather.png";
import curriculum from "../../assets/curriculumMK.png";
import store from "../../assets/store.png";
import poke from "../../assets/poke.png";
import portafolio from "../../assets/portafolio.png";
import StarWars from "../../assets/StarWars.png";
import "./project.css";
import { useSelector } from "react-redux";

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
      "e-commerce made with ReactJs,React Router,React Bootstrap and Styled components, that make use of the fake store API to get the products ",
    img: store,
    done: true,
  },
  {
    title: "My portafolio",
    link: "https://github.com/Ezequiel-CE/Ezequiel-CE.github.io",
    description:
      "My personal website,build with Reactjs,React Bootstrap and use redux to hadndle the state of the page.",
    img: portafolio,
    done: true,
  },
  {
    title: "Star Wars Finder",
    link: "https://github.com/Ezequiel-CE/Starwars-finder",
    description:
      "App to find characters from the Star Wars franchise , using the SWAPI API to fetch the data.Build with React, ReactRouter, MaterialUi, Emotion, Redux.",
    img: StarWars,
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
const projectsEsp = [
  {
    title: "Js Calculator",
    link: "https://github.com/Ezequiel-CE/JS-calculator",
    description:
      "Uno de mis primeros proyectos, una simple calculadora hecha con vanilla JavaScript, y manipulacion de DOM.",
    img: calculator,
    done: true,
  },
  {
    title: "Js Weather app",
    link: "https://github.com/Ezequiel-CE/weather-app",
    description:
      "Este proyecto fur creado con el proposito de aprender a usar una APi con vanilla javascript, en este caso hace uso de la OpenWeatherm API.",
    img: weather,
    done: true,
  },
  {
    title: "CV maker",
    link: "https://github.com/Ezequiel-CE/cv-maker-re",
    description:
      "Pagina contruida con ReactJs y materialUI para hacer tu propio curriculum, usa el hook context de react para manejar el state.",
    img: curriculum,
    done: true,
  },
  {
    title: "Fake store",
    link: "https://github.com/Ezequiel-CE/shopping-cart",
    description:
      "Comercio virtual hencho con ReactJs,React Router,React Bootstrap and Styled components, que hace uso de la fake store API para obtener los productos. ",
    img: store,
    done: true,
  },
  {
    title: "My portafolio",
    link: "https://github.com/Ezequiel-CE/Ezequiel-CE.github.io",
    description:
      "Mi pagina personal, constrida con ReactJs,React Bootstrap y usa redux  para manejar el estado de la pagina.",
    img: portafolio,
    done: true,
  },
  {
    title: "Star Wars Finder",
    link: "https://github.com/Ezequiel-CE/Starwars-finder",
    description:
      "Aplicación para encontrar personajes de la franquicia Star Wars, utilizando la API SWAPI para obtener los datos.Contruida con React, ReactRouter, MaterialUi, Emotion, Redux.",
    img: StarWars,
    done: true,
  },
  {
    title: "Pokemon card shop",
    link: "#",
    description:
      "Tienda de tarjetas Pokemon construida con nextjs,materialUi,Redux, y realiza autenticación con Auth0.  También se podra guardar los usuarios en una base de datos de  mongodb.",
    img: poke,
    done: false,
  },
];

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
