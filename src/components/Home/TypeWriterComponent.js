import React from "react";
import Typewriter from "typewriter-effect";
import { useSelector } from "react-redux";

const TypeWriterComponent = () => {
  const language = useSelector((state) => state.language.currentLanguage);

  const text = [
    "Programing student",
    "Web developer",
    "JavaScript enthusiastic",
    "Game developer wannabe",
  ];

  const textEsp = [
    "Estudiante de programación",
    "Desarrollador web",
    "Entusiasta de JavaScript",
    "Intento de gamedeveloper",
  ];

  const strings = language === "ing" ? text : textEsp;
  return (
    <Typewriter
      options={{
        strings,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
};

export default TypeWriterComponent;
