import React from 'react';
import './ContactMe.css';
import textarriere from '../assets/textarriere.svg'


const ContactForm = () => {
  return (
    <section className="contact-section" id="contact">
      <div class="container4">
                <img src={textarriere}/>
                <h2>Get in touch</h2>
      </div>
      
      <div className="contact-container">
          <div className="contact-info">
          <h2>Let's talk</h2>
          <p>
            I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.
          </p>
          <ul>
            <li><i className="fas fa-envelope"></i>arhemtallah.hicham@gmail.com</li>
            <li><i className="fas fa-phone"></i>+212619840509</li>
            <li><i className="fas fa-map-marker-alt"></i>Casablanca, Morocco</li>
          </ul>
        </div>
        <div className="contact-form">
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Write your message here" required></textarea>
            
            <button type="submit">Submit now</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
