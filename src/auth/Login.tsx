import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext'; // Importa el hook personalizado para el contexto

const Login: React.FC = () => {
    const initialUser = {
        username: '',
        password: ''
    };
    const [user, setUser] = useState(initialUser);
    const { username, password } = user;

    const { setIsAuth } = useAuth(); // Usa el hook para obtener setIsAuth
    const navigate = useNavigate();

    const handleLogin = () => {
        if (username === 'user' && password === 'pass') {
            setIsAuth(true);
            navigate('/home');
        } else {
            alert('Credenciales incorrectas');
        }
    };

    const handleLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    return (
        <div>
            <h2>Login</h2>
            <input
                type="text"
                placeholder="Username"
                name="username"
                value={username}
                onChange={handleLoginChange}
            />
            <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={handleLoginChange}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;