import React from 'react';
import NavBar from '../components/ui/NavBar';
import RouteHeader from '../components/ui/RouteHeader';

const Profile: React.FC = () => {
    return (
        <div className='page__container'>
            <NavBar />  
            <div className="page__content__container">

                <RouteHeader/>

                <div className="principal__content">

                    <h2>Profile</h2>
                    <p>Esta es tu página de perfil. Aquí puedes ver y editar tu información personal.</p>

                </div>
 

            </div>

        </div>
    );
};

export default Profile;