import React, { memo } from 'react';
import './Portfolio.css';
import CarPartShopluncher from '../assets/CarPartShopluncher.webp';
import Cosmeticshopluncher from '../assets/Cosmeticshopluncher.webp';
import electrostoreshopluncher from '../assets/electrostoreshopluncher.webp';
import Fashionstoreshopluncher from '../assets/Fashionstoreshopluncher.webp';
import Fitnessshopluncher from '../assets/Fitnessshopluncher.webp';
import FragenceShopluncher from '../assets/FragenceShopluncher.webp';
import textarriere from '../assets/textarriere.svg'

const projects = [
  { id: 1, title: 'Car Parts Shop', imgSrc: CarPartShopluncher, alt: 'Project 1' },
  { id: 2, title: 'Cosmetics Shop', imgSrc: Cosmeticshopluncher, alt: 'Project 2' },
  { id: 3, title: 'Electronics Shop', imgSrc: electrostoreshopluncher, alt: 'Project 3' },
  { id: 4, title: 'Fashion Store', imgSrc: Fashionstoreshopluncher, alt: 'Project 4' },
  { id: 5, title: 'Fitness Store', imgSrc: Fitnessshopluncher, alt: 'Project 5' },
  { id: 6, title: 'Fragence Store', imgSrc: FragenceShopluncher, alt: 'Project 6' },
];

const Portfolio = memo(() => {
  return (
    <section className="portfolio" id="portfolio">
      <div className="Portfolio">
        
      <div class="container3">
                <img src={textarriere}/>
                <h2>My latest work</h2>
      </div>

        <div className="project-grid">
          {projects.map(project => (
            <div key={project.id} className="project">
              <div className="image-container">
                {/* <img loading='lazy'  src={project.imgSrc}
                  alt={project.alt}/> */}
              </div>
              <p>{project.title}</p>
            </div>
          ))}
        </div>
        <button className="show-more">Show More</button>
      </div>
    </section>
  );
});

export default Portfolio;
