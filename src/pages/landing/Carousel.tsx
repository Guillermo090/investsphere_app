import { useState, useEffect } from 'react';
import './carousel.css';
import Logo from '../../assets/logo.png';
// import Asset from '../../assets/carousel3.webp';

const Carousel = () => {
    const images = [Logo,Logo];
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="carousel">
            <button className="carousel-button prev" onClick={prevSlide}>❮</button>
            <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="carousel-image" />
            <button className="carousel-button next" onClick={nextSlide}>❯</button>
            <div className="carousel-indicators">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`indicator ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;