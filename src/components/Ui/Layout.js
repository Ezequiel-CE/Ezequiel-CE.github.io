import Preloader from "./Preloader";
import Particle from "./Particle";
import NavBar from "./navbar/Navbar";
import Footer from "./Footer";
import { useSelector } from "react-redux";

const Layout = ({ children }) => {
  const load = useSelector((state) => state.load.load);
  return (
    <div id={load ? "no-scroll" : "scroll"}>
      <Preloader load={load} />
      <Particle />
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
