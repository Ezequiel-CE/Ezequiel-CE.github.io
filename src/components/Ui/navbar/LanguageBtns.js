import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { changeLanguage } from "../../../store/slices";

function LanguageBtns({ close }) {
  const dispatcher = useDispatch();
  const language = useSelector((state) => state.language.currentLanguage);

  const changeToIng = () => {
    dispatcher(changeLanguage("ing"));
  };
  const changeToEsp = () => {
    dispatcher(changeLanguage("esp"));
  };

  const isEnglish = language === "ing";

  return (
    <ButtonGroup size="sm">
      <Button
        className={`language-btn ${isEnglish ? "btn-active " : ""}`}
        onClick={() => {
          changeToIng();
          close();
        }}
      >
        ENG
      </Button>
      <Button
        className={`language-btn ${isEnglish ? "" : "btn-active"}`}
        onClick={() => {
          changeToEsp();
          close();
        }}
      >
        SPA
      </Button>
    </ButtonGroup>
  );
}

export default LanguageBtns;
