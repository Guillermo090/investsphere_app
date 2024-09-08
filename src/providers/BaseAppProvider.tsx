import { createContext, useState, ReactNode } from "react";

interface ModalContextType {
  isVisible: boolean;
  modalName: string;
  showModal: () => void;
  hideModal: () => void;
  updateModalName: (name: string) => void;
}

// Crear el contexto
// Crear el contexto con un valor por defecto
const ModalContext = createContext<ModalContextType>({
  isVisible: false,
  modalName: '',
  showModal: () => {},
  hideModal: () => {},
  updateModalName: () => {},
});
interface AppProvidersProps {
  children:ReactNode
}

// Crear el proveedor del contexto
export const ModalProvider = ({ children }: AppProvidersProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [modalName, setModalName] = useState('');

  // Funciones para abrir y cerrar el modal
  const showModal = () => setIsVisible(true);
  const hideModal = () => setIsVisible(false);

  const updateModalName=(name:string)=> setModalName(name);

  return (
    <ModalContext.Provider value={{ isVisible, modalName, showModal, hideModal, updateModalName }}>
      {children}
    </ModalContext.Provider>
  );
};

// Exportar ambos correctamente
export { ModalContext };