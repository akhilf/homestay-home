import React from 'react';
// import './AboutFelicita.css';

const AboutFelicita = () => {
    return (
        <div className="about-container">
            <h1 className="about-title">Welcome to Felicita Inn</h1>
            <p className="about-description">
                Nestled in the heart of Wayanad, Felicita Inn offers a serene and comfortable homestay experience. 
                Whether you're here for a peaceful retreat or an adventure, our warm hospitality ensures a memorable stay.
            </p>
            <div className="about-content">
                <h2>Why Choose Us?</h2>
                <ul>
                    <li>Luxurious AC and Non-AC rooms</li>
                    <li>Authentic local cuisine</li>
                    <li>Peaceful and scenic surroundings</li>
                    <li>Easy access to major attractions</li>
                </ul>
            </div>
            <div className="about-contact">
                <h2>Contact Us</h2>
                <p><strong>Phone:</strong> +91 9400991399</p>
                <p><strong>Email:</strong> contact@felicitainn.com</p>
                <p><strong>Address:</strong> S VALAVU, Wayanad</p>
            </div>
        </div>
    );
};

export default AboutFelicita;