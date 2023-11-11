import React from "react";
import {
  Route,
  Routes,
} from "react-router-dom";
import Menu from "./components/menu/menu";
import Home from "./pages/home";
import Projects from "./pages/projects";
import About from "./pages/about";
import Contact from "./pages/contact";

const App: React.FC = () => {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
