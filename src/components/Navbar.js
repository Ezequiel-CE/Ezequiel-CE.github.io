import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import logo from "../assets/logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [hasExpanded, setHasExpanded] = useState(false);

  const collapseHandler = () => {
    setHasExpanded((prevState) => (prevState ? false : true));
  };

  const closeOnClickLink = () => {
    setHasExpanded(false);
  };

  return (
    <Navbar expanded={hasExpanded} fixed="top" expand="md" className="navbar">
      <Container>
        <Navbar.Brand href="#home" className="d-flex">
          <img src={logo} alt="brand" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={collapseHandler}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" onClick={closeOnClickLink}>
              <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={closeOnClickLink}>
              <AiOutlineUser style={{ marginBottom: "2px" }} /> About
            </Nav.Link>
            <Nav.Link as={Link} to="/resume" onClick={closeOnClickLink}>
              <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
