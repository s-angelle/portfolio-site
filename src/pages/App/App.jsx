import React from "react";
import { Routes, Route } from "react-router-dom";

// Components
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <About />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
