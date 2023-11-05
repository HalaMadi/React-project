import React from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Menu from "./components/menu/menu";
import Home from "./pages/home/home";
import Projects from "./pages/projects/projects";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";

function App() {
  return (
    <>
      <Menu />
      <Routes>
        {/* <Route path="/" exact component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} /> */}
      </Routes>
    </>
  );
}

export default App;
