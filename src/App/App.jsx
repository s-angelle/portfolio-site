import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Components
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';

// Pages
import About from '../pages/About/About';
import Home from '../pages/Home/Home';
import Projects from '../pages/Projects/Projects';
import Contact from '../pages/Contact/Contact';

// CSS
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
