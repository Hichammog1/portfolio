import React, { useState } from 'react';
import './Header.css';
import textarriere from '../assets/textarriere.svg'

const Header = () => {
    const [active, setActive] = useState('home');

    return (
        <header className="header">
            
            <div class="container1">
             
            <img src={textarriere}/>
            <h3>HichamAR</h3>
            
            </div>
            <nav>
                <ul>
                    <li>
                        <a
                            href="#home"
                            className={active === 'home' ? 'active' : ''}
                            onClick={() => setActive('home')}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about"
                            className={active === 'about' ? 'active' : ''}
                            onClick={() => setActive('about')}
                        >
                            About Me
                        </a>
                    </li>
                    <li>
                        <a
                            href="#services"
                            className={active === 'services' ? 'active' : ''}
                            onClick={() => setActive('services')}
                        >
                            Services
                        </a>
                    </li>
                    <li>
                        <a
                            href="#portfolio"
                            className={active === 'portfolio' ? 'active' : ''}
                            onClick={() => setActive('portfolio')}
                        >
                            Portfolio
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className={active === 'contact' ? 'active' : ''}
                            onClick={() => setActive('contact')}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
            <button className="connect-button" onClick={() => window.location.href = '#contact'}>Connect With Me</button>
        </header>
    );
}

export default Header;
