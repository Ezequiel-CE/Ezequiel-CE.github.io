import Preloader from "./Preloader";
import Particle from "./Particle";
import NavBar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ load, children }) => {
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
