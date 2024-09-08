import { AuthProvider } from '../auth/AuthContext';
import { ModalProvider } from './BaseAppProvider'; // Importa correctamente ModalProvider

const AppProviders = ({ children }) => (
    <AuthProvider>
        <ModalProvider>
            {children}
        </ModalProvider>
    </AuthProvider>
);

export { AppProviders };  // Exportar correctamente AppProviders