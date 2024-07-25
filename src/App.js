import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import ContactMe from './components/ContactMe';
import Resume from './components/Resume';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Main />
            <AboutMe />
            <Services />
            <Portfolio />
            <ContactMe />
            <Footer />
          </>
        } />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;
