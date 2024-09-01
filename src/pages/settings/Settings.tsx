import React from 'react';
import NavBar from '../components/ui/NavBar';
import RouteHeader from '../components/ui/RouteHeader';

const Settings: React.FC = () => {
    return (
        <div className='page__container'>
            <NavBar />  
            <div className="page__content__container">

                <RouteHeader/>

                <div className="principal__content">

                    <h2>Settings</h2>
                    <p>Ajusta tus preferencias y configuraciones de cuenta aquí.</p>

                </div>

            </div>
        </div>
    );
};

export default Settings;