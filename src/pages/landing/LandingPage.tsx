import { Link } from 'react-router-dom';
import './landing.css';
import UnderConstruction from '../components/UnderConstruction';

const LandingPage = () => {
    return (
        <div className="container">
            <div className="nav">
                <Link to="/login" className="btn">Login</Link>
            </div>
            <h1>Bienvenido a la Página de Inicio</h1>
            <UnderConstruction /> {/* Componente para indicar que la página está en construcción */}
        </div>
    );
};

export default LandingPage;