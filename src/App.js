import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Navbar';
import HomestayList from './HomestayList';
import HomestayDetails from './HomestayDetails';
import ContactUs from './ContactUs';
import image1 from "./assets/images/image1.jpeg";
import image2 from "./assets/images/image2.jpeg";
import image3 from "./assets/images/image3.jpeg";
import image4 from "./assets/images/image4.jpeg";
import image5 from "./assets/images/image5.jpeg";
import image6 from "./assets/images/image6.jpeg";
import image7 from "./assets/images/image7.jpeg";
import image8 from "./assets/images/image8.jpeg";
import image9 from "./assets/images/image9.jpeg";
import image10 from "./assets/images/image10.jpeg";

const App = () => {
    const [selectedHomestay, setSelectedHomestay] = useState(null);

    const homestays = [
        {
            id: 1,
            name: 'Felicita',
            location: 'S VALAVU, Mananthavady, Wayanad, India',
            image: 'image1.jpeg',
            description: 'A beautiful home stay with a stunning nature view.',
            images: [
                image1,
                image2,
                image3,
                image4,
                image5,
                image6,
                image7,
                image8,
                image9,
                image10
            ]
        }
    ];

    const handleViewDetails = (id) => {
        const homestay = homestays.find(h => h.id === id);
        setSelectedHomestay(homestay);
    };

    const handleBack = () => {
        setSelectedHomestay(null);
    };

    return (
        <div className="app-container">
            <Navbar />
            <div className="main-content">
                {selectedHomestay ? (
                    <HomestayDetails homestay={selectedHomestay} onBack={handleBack} />
                ) : (
                    <HomestayList homestays={homestays} onViewDetails={handleViewDetails} />
                )}
            </div>
            <ContactUs />
        </div>
    );
};

export default App;