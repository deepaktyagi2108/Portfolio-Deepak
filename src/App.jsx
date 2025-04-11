import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Home from './components/Home'
import Skills from './components/Skills';
import Contact from './components/Contact'
import Aos from "aos"
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
Aos.init();
  
    
  }, [])
  
  return (
    <>
      <Navbar />
      <div className="container">
        <Home />
        <Skills />
        <Projects />
        <Contact/>
      </div>
    </>
  );
};

export default App;
