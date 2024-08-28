import NavBar from '../components/NavBar'

const Investments = () => {
    return (
        <div>
            <NavBar /> {/* Incluye la barra de navegación */}

            <h1>Investments - Página Privada</h1>
            <p>Solo puedes ver esto si estás logueado.</p>
        </div>
    );
};

export default Investments;