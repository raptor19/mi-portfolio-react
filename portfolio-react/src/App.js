import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/index";
import Contact from "./pages/Contact/index";
import Projects from "./pages/Projects/index";
import "./App.css";
import MenuEx from "./components/Menu/MenuEx";

function App() {
  const header = React.createRef();

  return (
    <React.Fragment>
      <MenuEx />
      <Header ref={header} />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

export default App;
