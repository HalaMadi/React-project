// App.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Menu from "./components/menu/menu";
import Home from "./pages/home";
import Projects from "./pages/projects";
import About from "./pages/about";
import Contact from "./pages/contact";
import Logo from "./components/logo";
import Footer from "./components/footer";


const App: React.FC = () => {
  return (
    <>
      <Logo/>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <Footer/> */}
    </>
  );
};

export default App;
