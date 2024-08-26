import React from 'react';
import NavBar from '../components/NavBar'

const Settings: React.FC = () => {
    return (
        <div>
            <NavBar /> {/* Incluye la barra de navegación */}
            <h2>Settings</h2>
            <p>Ajusta tus preferencias y configuraciones de cuenta aquí.</p>
            {/* Aquí puedes agregar opciones y formularios de configuración */}
        </div>
    );
};

export default Settings;