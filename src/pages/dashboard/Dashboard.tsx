import React from 'react';
import RouteHeader from '../components/ui/RouteHeader';
import NavBar from '../components/ui/NavBar';

const Dashboard: React.FC = () => {
    return (
        <div className='page__container'>
            <NavBar />
            <div className="page__content__container">
            
                <RouteHeader />

                <div className="principal__content">
                    <h2>Dashboard</h2>
                    <p>Bienvenido al panel de control.</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;