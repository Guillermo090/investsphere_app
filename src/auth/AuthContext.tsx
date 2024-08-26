import React, { createContext, useContext, useState } from 'react';

// Define la interfaz para los valores del contexto
interface AuthContextProps {
    isAuth: boolean;
    setIsAuth: (auth: boolean) => void;
}

// Crear el contexto con un valor inicial indefinido
const AuthContext = createContext<AuthContextProps | undefined>(undefined);

// Proveedor de contexto para envolver la aplicación
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false);

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
