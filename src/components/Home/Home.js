import { Container } from "react-bootstrap";
import HomeSection1 from "./HomeSection1";
import HomeSection1Esp from "./HomeSection1Esp";
import HomeSection2 from "./HomeSection2";
import { useSelector } from "react-redux";
import HomeSection2Esp from "./HomeSection2Esp";
import React from "react";
import "./Home.css";

const HomeEsp = () => {
  return (
    <Container className="home-content">
      <HomeSection1Esp />
      <HomeSection2Esp />
    </Container>
  );
};

const HomeEng = () => {
  return (
    <Container className="home-content">
      <HomeSection1 />
      <HomeSection2 />
    </Container>
  );
};

const Home = () => {
  const language = useSelector((state) => state.language.currentLanguage);

  return (
    <Container fluid id="home">
      {language === "ing" ? <HomeEng /> : <HomeEsp />}
    </Container>
  );
};

export default Home;
