import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import './HomestayDetails.css';

const HomestayDetails = ({ homestay, onBack }) => {
    return (
        <div className="details-container">
            <button className="btn btn-secondary back-button" onClick={onBack}>
                ← Back
            </button>
            {/* <h1 className="details-title">{homestay.name}</h1> */}

            {/* Carousel for images */}
            <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
                {homestay.images.map((image, index) => (
                    <div key={index} className="carousel-slide"   style={{ backgroundImage: `url(${image})` }}>
                    </div>
                ))}
            </Carousel>

            <p className="details-description">{homestay.description}</p>
            <p className="details-location"><strong>Location:</strong> {homestay.location}</p>
        </div>
    );
};

export default HomestayDetails;
