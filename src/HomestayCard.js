import React from 'react';
import './HomestayCard.css';

const HomestayCard = ({ homestay, onViewDetails }) => {
    return (
        <div className="homestay-card">
            <div className="homestay-img"></div>
            <div className="homestay-body">
                <h5 className="homestay-title">{homestay.name}</h5>
                <p className="homestay-location">{homestay.location}</p>
                <button className="btn btn-primary" onClick={() => onViewDetails(homestay.id)}>
                    View Details
                </button>
            </div>
        </div>
    );
};

export default HomestayCard;
