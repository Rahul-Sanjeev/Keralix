import React, { useState, useEffect } from 'react';
import '../styles/Hero.css';
import Hero1 from '../assets/images/hero/Hero1.png'
import Hero2 from '../assets/images/hero/Hero2.png'
import Hero3 from '../assets/images/hero/Hero3.png'
const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Images array (you can add your image paths here)
    const images = [
        Hero1, Hero2, Hero3,
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Clear interval on component unmount
    }, [images.length]);

    const handlePaginatorClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="hero-container" style={{ backgroundImage: `url(${images[currentIndex]})` }}>
            <div className="hero-content">
                <h1>Organic Anti-Aging Cosmetic Cream</h1>
                <p>Praesent in nunc vel urna consequat mattis eget vel libero. Phasellus entesque.</p>
                <button className="cta-button">SHOP NOW</button>
            </div>
            <div className="paginator">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`paginator-line ${currentIndex === index ? 'active' : ''}`}
                        onClick={() => handlePaginatorClick(index)}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Hero;
