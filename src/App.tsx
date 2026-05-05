import { Navbar } from "./components/site/Navbar";
import "./styles.css";
import { About } from "./components/site/About";
import { Exhibitions } from "./components/site/Exhibitions";
import { Practice } from "./components/site/Practice";
import { Workshops } from "./components/site/Workshops";
import { Works } from "./components/site/Works";
import { Hero } from "./components/site/Hero";
import { Footer } from "./components/site/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Works />
      <Exhibitions />
      <Practice />
      <Workshops />
      <Footer />
    </>
  );
}

export default App;
