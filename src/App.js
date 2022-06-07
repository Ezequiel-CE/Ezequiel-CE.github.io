import React, { useState, useEffect } from "react";

import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
import useScrollTop from "./hooks/use-ScrollToTop";
import Layout from "./components/Ui/Layout";
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
    <Layout load={load}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;
