import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { changeLanguage } from "../../../store/slices";

function LanguageBtns() {
  const dispatcher = useDispatch();

  const changeToIng = () => {
    dispatcher(changeLanguage("ing"));
  };
  const changoToEsp = () => {
    dispatcher(changeLanguage("esp"));
  };

  return (
    <ButtonGroup size="sm">
      <Button className="lenguage-btn" onClick={changeToIng}>
        ING
      </Button>
      <Button className="lenguage-btn" onClick={changoToEsp}>
        ESP
      </Button>
    </ButtonGroup>
  );
}

export default LanguageBtns;
