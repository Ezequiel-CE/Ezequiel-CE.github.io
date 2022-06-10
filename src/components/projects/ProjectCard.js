import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";
import "./project.css";

function ProjectCard({ img, title, description, link, done }) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={img} alt="card-img" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>{description}</Card.Text>
        <Button variant="primary" href={link} target="_blank" disabled={!done}>
          <BiLinkExternal />
          {done ? " View Project" : " In progress "}
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCard;
