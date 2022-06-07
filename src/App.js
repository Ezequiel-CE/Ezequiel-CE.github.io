import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
import useScrollTop from "./hooks/use-ScrollToTop";
import Layout from "./components/Ui/Layout";
import { useDispatch } from "react-redux";
import { finishLoad } from "./store/slices";
import "./index.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(finishLoad());
    }, 1800);

    return () => {
      clearTimeout(timer);
    };
  }, [dispatch]);

  useScrollTop();

  return (
    <Layout>
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
