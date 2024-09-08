import {useContext, useEffect, useState} from 'react'

import NavBar from '../components/ui/NavBar';
import RouteHeader from '../components/ui/RouteHeader';
import './investments.css'
import CryptoList from  './CryptoList'
import { ToastContainer } from 'react-toastify';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import ModalNewCripto from './ModalNewCripto';
import {ModalContext} from "../../providers/BaseAppProvider";

const Investments = () => {

    const [activeTab, setActiveTab] = useState(0);

    const { showModal, updateModalName } = useContext(ModalContext);

    const handleTabClick = ( index: number ) => {
      setActiveTab(index);
    };

    const activeNewCriptoModal = () => {
        updateModalName("newCripto");
        showModal();
    }

    return (
        <div className='page__container'>
            <NavBar />  
            <ToastContainer />
            <div className="page__content__container">

                <RouteHeader/>

                <div className="principal__content">

                     {/* Tabs */}
                    <div className="tabs">
                        <button onClick={() => handleTabClick(0)} className={activeTab === 0 ? "active" : ""} >
                            CRYPTO
                        </button>
                        <button onClick={() => handleTabClick(1)} className={activeTab === 1 ? "active" : ""} disabled={true}>
                            DEPOSITOS A PLAZO
                        </button>
                        <button onClick={() => handleTabClick(2)} className={activeTab === 2 ? "active" : ""} disabled={true}>
                            FONDOS MUTUOS
                        </button>
                        <button onClick={() => handleTabClick(2)} className={activeTab === 3 ? "active" : ""} disabled={true}>
                            ACCIONES
                        </button>
                    </div>

                    {/* Tab Content */}
                    <div className="tab-content">
                        {
                            activeTab === 0 && 
                            <div className=''>
                                <div className='tab-header'>
                                    <h2 className='tab-title'> Transacciones de CryptoMonedas </h2>
                                    <button 
                                        className='tab-header__button'  
                                        title='Añadir' 
                                        onClick={activeNewCriptoModal}
                                    >   
                                        <BsFillPlusCircleFill className="tab-header__button_icon" title='Añadir' />
                                        
                                        Mas Crypto
                                    </button>
                                    <ModalNewCripto />
                                </div>

                                <CryptoList/>

                            </div>

                        }
                        {activeTab === 1 && <div>Contenido de la Tab 2</div>}
                        {activeTab === 2 && <div>Contenido de la Tab 3</div>}
                    </div>

                </div>
 

            </div>

        </div>
       
    );
};

export default Investments;