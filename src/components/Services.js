import React from 'react';
import './Services.css';
import textarriere from '../assets/textarriere.svg'

const services = [
    { id: 1, title: 'Web design', description: 'Web development is the process of building, programming Web development is the process of building, ...', link: '#', color: 'gradient' },
    { id: 2, title: 'Graphics design', description: 'Web development is the process of building, programming Web development is the process of building, ...', link: '#', color: 'gradient' },
    { id: 3, title: 'Social media', description: 'Web development is the process of building, programming Web development is the process of building, ...', link: '#', color: 'gradient' },
    { id: 4, title: 'App design', description: 'Web development is the process of building, programming Web development is the process of building, ...', link: '#', color: 'gradient' },
    { id: 5, title: 'Digital marketing', description: 'Web development is the process of building, programming Web development is the process of building, ...', link: '#', color: 'gradient' },
    { id: 6, title: 'Content writing', description: 'Web development is the process of building, programming Web development is the process of building, ...', link: '#', color: 'gradient' }
];

const Services = () => {
    return (
        <section className="services" id="services">
            
            <div class="container2">
                <img src={textarriere}/>
                <h2>My Services</h2>
            </div>
            <div className="services-container">
                {services.map(service => (
                    <div key={service.id} className="service-card">
                        <h3>{service.id}</h3>
                        <h3 className={`service-title ${service.color}`}>{service.title}</h3>
                        <p>{service.description}</p>
                        <a href={service.link} className="read-more">Read More →</a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Services;
