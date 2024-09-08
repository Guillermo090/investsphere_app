import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import './login.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const INVESTSPHERE_APP_BACKEND_URL = import.meta.env.VITE_INVESTSPHERE_APP_BACKEND_URL;

const Login: React.FC = () => {
    const initialUser = {
        email: '',
        password: ''
    };
    const [user, setUser] = useState(initialUser);
    const { email, password } = user;

    const { setIsAuth } = useAuth();
    const navigate = useNavigate();

   
    const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        if (email === '' || password === '') {
            toast.error(' Ingrese datos para acceder', {
                position: "top-right",
                closeOnClick: true,
            });
            return
        }

        localStorage.removeItem('user');

        axios({
            method: 'post',
            url: INVESTSPHERE_APP_BACKEND_URL +  '/api/token/',
            data: { email, password }
        })
        .then(({data}) => {

            const userObject = {
                token: data.access,
                email: email
            };

            localStorage.setItem('user', JSON.stringify(userObject));

            setIsAuth(true);
            navigate('/dashboard');
        })
        .catch(() => {
            toast.error('Datos inválidos' , {
                position: "top-right",
                autoClose: 5000,
                closeOnClick: true
            });
        });
    };

    const handleLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    return (
        <div className="login-container">
            <ToastContainer />
            <form onSubmit={handleLogin} className="login-form">
                <h2>Login</h2>
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={handleLoginChange}
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={handleLoginChange}
                />
                <button type='submit'>Login</button>
            </form>
        </div>
    );
};

export default Login;