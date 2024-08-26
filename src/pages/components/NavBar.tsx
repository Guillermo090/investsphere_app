import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div style={{ marginBottom: '20px' }}>
            <button onClick={() => navigate('/dashboard')}>Dashboard</button>
            <button onClick={() => navigate('/profile')}>Profile</button>
            <button onClick={() => navigate('/settings')}>Settings</button>
        </div>
    );
};

export default NavBar;
