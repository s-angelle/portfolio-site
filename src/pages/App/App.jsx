import React from "react";
import { Routes, Route } from "react-router-dom";

// Components
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import ScrollToTop from "../../components/ScrollToTop";

// Pages
import About from "../About/About";
import Home from "../Home/Home";
import Projects from "../Projects/Projects";

// CSS
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <About />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
