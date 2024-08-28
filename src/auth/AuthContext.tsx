import React, { createContext, useContext, useState, useEffect } from 'react';

// Define la interfaz para los valores del contexto
interface AuthContextProps {
    isAuth: boolean;
    setIsAuth: (auth: boolean) => void;
}

// Crear el contexto con un valor inicial indefinido
const AuthContext = createContext<AuthContextProps | undefined>(undefined);

// Proveedor de contexto para envolver la aplicación
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // Inicializa isAuth basado en sessionStorage
    const [isAuth, setIsAuth] = useState<boolean>(() => {
        const user = sessionStorage.getItem('user');
        return !!user; // Inicializa isAuth a true si hay datos en sessionStorage
    });

    // Efecto para actualizar sessionStorage cuando isAuth cambie
    useEffect(() => {
        if (isAuth) {
            const user = sessionStorage.getItem('user');
            if (!user) {
                // Supongamos que tienes un objeto de usuario que quieras almacenar
                sessionStorage.setItem('user', JSON.stringify({ loggedIn: true }));
            }
        } else {
            sessionStorage.removeItem('user');
        }
    }, [isAuth]);

    return (
        <AuthContext.Provider value={{ isAuth, setIsAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook personalizado para usar el contexto de autenticación
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth debe ser usado dentro de un AuthProvider');
    }
    return context;
};