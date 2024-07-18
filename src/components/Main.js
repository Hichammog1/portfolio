import React from 'react';
import './Main.css';
import IMG_1764 from '../assets/IMG_1764.jpg';

const Main = () => {

    const handleResumeClick = () => {
        window.open('https://files.fm/f/t7judxsces', '_blank');
    };

    return (
        <section className="home-section" id="home">
        <main className="main-content">
            <div className="intro">
                <img src={IMG_1764} alt="hichamRa" className="profile-pic"/>
                <h1> <span>I'm Hicham Arhemt Allah,</span> Web developer based in Casablanca.</h1>
                <p>I am a frontend developer based in Casablanca, Morocco, with diverse experience in web and mobile development. Having recently completed my studies, I am now seeking employment. I have worked as a freelancer on several web development projects, which has allowed me to develop strong skills in various technologies.
                </p>
            </div>
            <div className="about-header">
                <button className="connect-button">Connect with me</button>
                <button className="resume-button" onClick={handleResumeClick}>My resume</button>
            </div>
        </main>
        </section>
    );
}

export default Main;
