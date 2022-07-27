import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { AiOutlineHome, AiOutlineUser, AiOutlineProject } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import logo from "../../../assets/logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import LanguageBtns from "./LanguageBtns";

const links = [
  { name: "Home", path: "/", icon: <AiOutlineHome /> },
  { name: "About", path: "/about", icon: <AiOutlineUser /> },
  { name: "Projects", path: "/projects", icon: <AiOutlineProject /> },
  { name: "Resume", path: "/resume", icon: <CgFileDocument /> },
];

const NavBar = () => {
  const [hasExpanded, setHasExpanded] = useState(false);
  const [stickyNav, setStickyNav] = useState(false);

  const collapseHandler = () => {
    setHasExpanded((prevState) => !prevState);
  };

  const closeOnClickLink = () => {
    setHasExpanded(false);
  };

  const goToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const scrollHandler = () => {
      if (window.pageYOffset >= 100) {
        setStickyNav(true);
      } else {
        setStickyNav(false);
      }
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <Navbar
      expanded={hasExpanded}
      fixed="top"
      expand="md"
      className={stickyNav ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex" onClick={goToTop}>
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
            {links.map((data, i) => (
              <Nav.Item key={i}>
                <Nav.Link
                  as={Link}
                  to={data.path}
                  onClick={closeOnClickLink}
                  style={{ display: "flex", alignItems: "center", gap: "3px" }}
                >
                  {data.icon}
                  {data.name}
                </Nav.Link>
              </Nav.Item>
            ))}
            <Nav.Item>
              <LanguageBtns close={closeOnClickLink} />
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
