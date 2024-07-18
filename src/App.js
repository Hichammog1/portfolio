import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import ContactMe from './components/ContactMe';

function App() {
  return (
    <div className="App">
            <Header />
            <Main />
            <AboutMe />
            <Services />
            <Portfolio />
            <ContactMe />
            <Footer />
        </div>
  );
}

export default App;
