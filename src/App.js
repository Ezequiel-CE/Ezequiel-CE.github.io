import React, { useState, useEffect } from "react";
import NavBar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Particle from "./components/Particle";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
import useScrollTop from "./hooks/use-ScrollToTop";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import "./index.css";

function App() {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 1800);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useScrollTop();

  return (
    <div id={load ? "no-scroll" : "scroll"}>
      <Preloader load={load} />
      <Particle />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
