import NavBar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Particle from "./components/Particle";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";

function App() {
  return (
    <Router>
      <NavBar />
      <Particle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;
