import React from 'react'

// css files from bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
// copied from react router dom
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

//imports 
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Projects from './components/Projects';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route path="/" element={<Home />}>
            </Route>
            <Route path="/about" element={<About />}>
            </Route>
            <Route path="/contact" element={<Contact />}>
            </Route>
            <Route path="/projects" element={<Projects />}>
            </Route>
            <Route path="/resume" element={<Resume />}>
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;