import React from "react";
import TypeWriterEffect from "react-typewriter-effect";

const TypeWriterComponent = () => {
  const text = [
    "Programing student",
    "Web developer",
    "JavaScript enthusiastic",
    "Game developer wannabe",
  ];
  return (
    <TypeWriterEffect
      textStyle={{
        fontFamily: "Raleway",
        fontSize: "2.2em",
        color: "#be6adf",
        fontWeight: "600",
      }}
      multiTextLoop
      startDelay={100}
      cursorColor="#b562d6"
      multiText={text}
      typeSpeed={60}
    />
  );
};

export default TypeWriterComponent;
