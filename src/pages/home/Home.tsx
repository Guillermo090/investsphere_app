import NavBar from '../components/NavBar'

const Home = () => {
    return (
        <div>
            <NavBar /> {/* Incluye la barra de navegación */}

            <h1>Home - Página Privada</h1>
            <p>Solo puedes ver esto si estás logueado.</p>
        </div>
    );
};

export default Home;