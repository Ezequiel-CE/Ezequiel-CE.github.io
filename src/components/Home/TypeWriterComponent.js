import React from "react";
import Typewriter from "typewriter-effect";

const TypeWriterComponent = () => {
  const text = [
    "Programing student",
    "Web developer",
    "JavaScript enthusiastic",
    "Game developer wannabe",
  ];
  return (
    <Typewriter
      options={{
        strings: text,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
};

export default TypeWriterComponent;
