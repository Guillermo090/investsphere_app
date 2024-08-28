import { Link } from 'react-router-dom';
import './landing.css';
import UnderConstruction from '../components/UnderConstruction';
import Logo from '../../assets/logo.png'
import { CContainer } from '@coreui/react';

const LandingPage = () => {
    return (
        <CContainer  className='container'  >
            <header className="header">
                <div className="logo" >
                    {/* Aquí puedes agregar tu logo */}
                    <img src={Logo} alt="Logo"  className="logo-img" />
                </div>
                <div className='header-right'>
                    <nav className="navbar">
                        <a href="#" className="nav-link">INICIO</a>
                        <a href="#about" className="nav-link">NOSOTROS</a>
                        <a href="#contact_us" className="nav-link">CONTACTANOS</a>
                    </nav>
                    <Link to="/login" className="btn-start  mx-5 ">Login</Link>
                </div>
            </header>

            <main className="main-content">
                <div id="carousel">
                    <UnderConstruction />  
                    {/* <h1>carousell</h1> */}
                    
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
            
        </CContainer>
    );
};

export default LandingPage;