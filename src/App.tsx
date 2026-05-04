import { Navbar } from "./assets/components/site/Navbar";
import "./styles.css";
import { About } from "./assets/components/site/About";
import { Exhibitions } from "./assets/components/site/Exhibitions";
import { Practice } from "./assets/components/site/Practice";
import { Workshops } from "./assets/components/site/Workshops";
import { Works } from "./assets/components/site/Works";
import { Hero } from "./assets/components/site/Hero";

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
    </>
  );
}

export default App;
