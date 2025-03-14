import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar custom-navbar">
            <div className="navbar-content">
                <a className="navbar-brand" href="/">🏠 FELICITA INN</a>
                <span className="navbar-subheading">MT HOME STAY <span className="subtext">(AC/NON A/C ROOMS)</span></span>
            </div>
            <div className="navbar-contact">
                <span className="contact-info">
                    <i className="fas fa-phone"></i> +91 9400991399
                </span>
                <span className="contact-info">
                    <i className="fas fa-envelope"></i> contact@felicitainn.com
                </span>
            </div>
        </nav>
    );
};

export default Navbar;
