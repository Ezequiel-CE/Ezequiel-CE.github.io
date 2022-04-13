import NavBar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Particle from "./components/Particle";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
import useScrollTop from "./hooks/use-ScrollToTop";
import Footer from "./components/Footer";

function App() {
  useScrollTop();

  return (
    <>
      <Particle />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
