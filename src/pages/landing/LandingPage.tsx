import { Link } from 'react-router-dom';
import './landing.css';
import Logo from '../../assets/logo.png'
import { CContainer } from '@coreui/react';
import { useState, useEffect } from 'react';

const LandingPage = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerWidth < 880) {
                console.log(window.innerWidth)
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        handleScroll(); 
        window.addEventListener('resize', handleScroll);
        return () => window.removeEventListener('resize', handleScroll);
    }, []);

    return (
        <CContainer className='container'>
            <header className="header">
                <div className="logo">
                    <img src={Logo} alt="Logo" className="logo-img" />
                </div>
                <div className='header-right'>
                    <nav className="navbar">
                        <a href="#" className="nav-link">INICIO</a>
                        <a href="#about" className="nav-link">NOSOTROS</a>
                        <a href="#contact_us" className="nav-link">CONTACTANOS</a>
                    </nav>
                    <Link to="/login" className="btn-start mx-5">Login</Link>
                </div>
            </header>

            <main className="main-content">
                <div id="carousel">
                    <img src={Logo} alt="Logo" />
                </div>
                <div id='about'>
                    <h1>About Us</h1>
                </div>
                <div id='contact_us'>
                    <h1>Contact Us</h1>
                </div>
                <footer>
                    <p>&copy; 2024 | Hecho con ❤️ | Todos los derechos reservados</p>
                </footer>
            </main>

            {showButton && (
                <Link to="/login" className="btn-start show" >Login</Link>
            )}
        </CContainer>
    );
};

export default LandingPage;