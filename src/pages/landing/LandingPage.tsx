import { Link } from 'react-router-dom';
import './landing.css';

const LandingPage = () => {
    return (
        <div className="container">
            <div className="nav">
                <Link to="/login" className="btn">Login</Link>
            </div>
            <h1>Bienvenido a la Página de Inicio</h1>
        </div>
    );
};

export default LandingPage;