import NavBar from '../components/ui/NavBar';
import RouteHeader from '../components/ui/RouteHeader';

const Investments = () => {
    return (
        <div className='page__container'>
            <NavBar />  
            <div className="page__content__container">

                <RouteHeader/>

                <div className="principal__content">


                    <h2>Investments - Página Privada</h2>
                    <p>Solo puedes ver esto si estás logueado.</p>

                </div>
 

            </div>

        </div>
       
    );
};

export default Investments;