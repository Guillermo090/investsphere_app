import { Link } from 'react-router-dom';
import './landing.css';
import Logo from '../../assets/logo.png';
import { CContainer } from '@coreui/react';
import Carousel from './Carousel'; // Asegúrate de que la ruta del archivo sea correcta
import { useState, useEffect } from 'react';

const LandingPage = () => {
    const [showButton, setShowButton] = useState(false);

    const handleResize = () => {
        if (window.innerWidth < 880) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        window.addEventListener('load', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('load', handleResize);
        };
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
                <div id="start">
                    <div className="top_start" >
                        <Carousel /> {/* Carrusel de imágenes */}
                    </div>
                    <div className="bottom_start">
                        <h2 className="slogan">Transforma tu futuro con nosotros.</h2>
                        {/* <Link to="/signup" className="cta-button">Empieza Ahora</Link> */}
                        {/* <p className="sub-slogan">Únete a una comunidad comprometida con la innovación y el crecimiento personal.</p> */}
                        <Link to="/login" className="btn-start mx-5"> Acceder </Link>
                    </div>
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
                <Link to="/login" className="btn-start show">Login</Link>
            )}
        </CContainer>
    );
};

export default LandingPage;