import React from 'react';
import NavBar from '../components/NavBar'

const Profile: React.FC = () => {
    return (
        <div>
            <NavBar /> {/* Incluye la barra de navegación */}

            <h2>Profile</h2>
            <p>Esta es tu página de perfil. Aquí puedes ver y editar tu información personal.</p>
            {/* Aquí puedes agregar más campos de perfil e información del usuario */}
        </div>
    );
};

export default Profile;