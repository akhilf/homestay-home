import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
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
        <div>
            <h2>Contact Us</h2>
            <p className="contact-description">
                We'd love to hear from you! Reach out to us for bookings, inquiries, or any questions.
            </p>
            <div className="contact-details">
                <p><i className="fas fa-phone"></i> <strong>Phone 1: </strong> <a href="tel:+919745149731" className="contact-link">+91 9745149731</a></p>
                <p><i className="fas fa-phone"></i> <strong>Phone 2: </strong> <a href="tel:+919400991399" className="contact-link">+91 9400991399</a></p>
                <p><i className="fas fa-envelope"></i> <strong>Email: </strong> contact@felicitainn.com</p>
                <p><i className="fas fa-map-marker-alt"></i> <strong>Address: </strong> S VALAVU, Mananthavady, Wayanad </p>
                
                {/* Facebook Link */}
                <p>
                    <a 
                        href="https://www.facebook.com/profile.php?id=61570376145975" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="facebook-link"
                    >
                        <i className="fab fa-facebook"></i> Facebook
                    </a>
                </p>
            </div>
        </div>
    </div>
        
    );
};

export default ContactUs;
