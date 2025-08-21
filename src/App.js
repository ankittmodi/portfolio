import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/banner';
import Features from './components/features';
import Project from './components/Project';
import Resume from './components/Resume/resume';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="body">
        <Banner/>
        <Features/>
        <Project/>
        <Resume/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
