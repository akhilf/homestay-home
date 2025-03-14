import React from 'react';
import HomestayCard from './HomestayCard';

const HomestayList = ({ homestays, onViewDetails }) => {
    return (
        <div className="d-flex flex-wrap justify-content-center">
            {homestays.map(homestay => (
                <HomestayCard key={homestay.id} homestay={homestay} onViewDetails={onViewDetails} />
            ))}
        </div>
    );
};

export default HomestayList;
