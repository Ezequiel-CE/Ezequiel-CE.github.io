import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";
import { useSelector } from "react-redux";
import "./project.css";

function ProjectCard({ img, title, description, link, done }) {
  const language = useSelector((state) => state.language.currentLanguage);
  const isEnglish = language === "ing";
  const btntexteng = done ? " View Project" : " In progress ";
  const btntextesp = done ? " Ver proyecto" : " En progreso ";
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={img} alt="card-img" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" href={link} target="_blank" disabled={!done}>
          <BiLinkExternal />
          {isEnglish ? btntexteng : btntextesp}
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCard;
