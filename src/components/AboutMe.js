import React from 'react';
import './AboutMe.css';
import IMG_1763 from '../assets/IMG_1763.jpg';
import textarriere from '../assets/textarriere.svg'

const AboutMe = () => {
    return (
        <section className="about-me" id="about">
            <div class="container">
                <img src={textarriere}/>
                <h2>About me</h2>
            </div>
            
            <div className="about-content">
                <div className="profile">
                    <img src={IMG_1763} alt="hichamRa" className="about-pic"/>
                </div>
                <div className="description">
                    <p>I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>
                    <p>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
                    <div className="skills">
                        <div className="skill">
                            <span>HTML & CSS</span>
                            <div className="progress-bar">
                                <div className="html-css"></div>
                            </div>
                        </div>
                        <div className="skill">
                            <span>React JS</span>
                            <div className="progress-bar">
                                <div className="react-js"></div>
                            </div>
                        </div>
                        <div className="skill">
                            <span>JavaScript</span>
                            <div className="progress-bar">
                                <div className="javascript"></div>
                            </div>
                        </div>
                        <div className="skill">
                            <span>Next JS</span>
                            <div className="progress-bar">
                                <div className="next-js"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="stats">
                <div className="stat">
                    <h3>10+</h3>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <div className="stat">
                    <h3>90+</h3>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <div className="stat">
                    <h3>15+</h3>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
