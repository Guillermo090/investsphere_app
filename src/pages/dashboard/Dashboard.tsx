import React from 'react';
import NavBar from '../components/NavBar'

const Dashboard: React.FC = () => {
    return (
        <div>
            <NavBar /> {/* Incluye la barra de navegación */}
            <h2>Dashboard</h2>
            <p>Bienvenido al panel de control.</p>
            {/* Aquí puedes agregar más contenido específico del Dashboard */}
        </div>
    );
};

export default Dashboard;