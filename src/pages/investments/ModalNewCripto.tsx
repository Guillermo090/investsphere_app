import { CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter, 
    CButton, CForm, CFormLabel, CFormInput, CCard, CCardBody, CCardTitle} from '@coreui/react';
import { useState, useEffect, useContext } from 'react';
import {ModalContext} from "../../providers/BaseAppProvider";
import CryptoInterface from './interfaces';
import axios from 'axios'; 
import { toast } from 'react-toastify';
import { useAuth } from '../../auth/AuthContext';

const INVESTSPHERE_APP_BACKEND_URL = import.meta.env.VITE_INVESTSPHERE_APP_BACKEND_URL;

interface ModalNewCriptoProps {
    initialData?: CryptoInterface | null;
    setIsUpdated:  React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalNewCripto = ({ setIsUpdated, initialData = null }: ModalNewCriptoProps) => {

    const { isVisible, hideModal, modalName, updateModalName } = useContext(ModalContext);

    const { isAuth, setIsAuth } = useAuth();

    const initialCriptoData = {
        purchase_amount: 0,
        purchase_date: '',
        commission: 0,
        base_currency: 'CLP',
        currency_bought: '',
        amount_of_bought_currency: 0,
        platform: '',
    }

    // Estado para los campos de la cripto-transacción
    const [cryptoData, setCryptoData] = useState<CryptoInterface>(initialCriptoData);

    // Cargar datos si se está actualizando
    useEffect(() => {
        if (initialData) {
            setCryptoData({
                purchase_amount: initialData.purchase_amount || 0,
                purchase_date: initialData.purchase_date || '',
                commission: initialData.commission || 0,
                base_currency: initialData.base_currency || 'CLP',
                currency_bought: initialData.currency_bought || '',
                amount_of_bought_currency: initialData.amount_of_bought_currency || 0,
                platform: initialData.platform || ''
            });
        }
    }, [initialData]);
 
    const disableNewCryptoModal = () => {
        
        hideModal();
        updateModalName('');
        setCryptoData(initialCriptoData)

    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCryptoData(prevData => ({ ...prevData, [name]: value }));
    };

    const createUpdateCrypto = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        e.preventDefault();
        
        if (!isAuth) {
            toast.error("No tienes autorización");
            return
        }

        let user = JSON.parse(localStorage.getItem("user") || '{}');

        axios({
            method: 'post',
            url: INVESTSPHERE_APP_BACKEND_URL +  '/api/crypto-transactions/',
            headers: { Authorization: `Bearer ${user.token}` },
            data: cryptoData
        })
        .then(() => {

            toast.success('Datos creados' , {
                position: "top-right",
                autoClose: 5000,
                closeOnClick: true
            });
            setIsUpdated(true);
            disableNewCryptoModal();

        })
        .catch(({response}) => {
            // console.log('Error:', response.data.detail);
            toast.error('Datos inválidos' , {
                position: "top-right",
                autoClose: 5000,
                closeOnClick: true
            });
            console.log(response.data)
            if ( response.data.code === 'token_not_valid' ){
                // setCryptos( testCripto )
                setIsAuth(false)
            }
        });


    }


    return (
        <>
            <CModal size={'xl'}
                visible={isVisible && modalName === "newCripto"}
                onClose={disableNewCryptoModal}
                aria-labelledby="LiveDemoExampleLabel"
            >
                <CModalHeader>
                    <CModalTitle id="LiveDemoExampleLabel">{initialData ? 'Actualizar Compra' : 'Ingrese Nueva Compra'}</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <CForm className="p-4">
                        {/* Organizar en un diseño de cuadrícula */}
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <CFormLabel>Fecha de compra</CFormLabel>
                                <CFormInput 
                                    type="datetime-local" 
                                    name="purchase_date" 
                                    value={cryptoData.purchase_date} 
                                    onChange={handleChange} 
                                />
                            </div>
                            <div className="col-md-6">
                                <CFormLabel>Monto de compra</CFormLabel>
                                <CFormInput 
                                    type="number" 
                                    name="purchase_amount" 
                                    value={cryptoData.purchase_amount} 
                                    onChange={handleChange} 
                                />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-6">
                                <CFormLabel>Comisión</CFormLabel>
                                <CFormInput 
                                    type="number" 
                                    name="commission" 
                                    value={cryptoData.commission} 
                                    onChange={handleChange} 
                                />
                            </div>
                            <div className="col-md-6">
                                <CFormLabel>Moneda comprada</CFormLabel>
                                <CFormInput 
                                    type="text" 
                                    name="currency_bought" 
                                    value={cryptoData.currency_bought} 
                                    onChange={handleChange} 
                                />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-6">
                                <CFormLabel>Monto de la moneda comprada</CFormLabel>
                                <CFormInput 
                                    type="number" 
                                    step="any"
                                    name="amount_of_bought_currency" 
                                    value={cryptoData.amount_of_bought_currency} 
                                    onChange={handleChange} 
                                />
                            </div>
                            <div className="col-md-6">
                                <CFormLabel>Plataforma</CFormLabel>
                                <CFormInput 
                                    type="text" 
                                    name="platform" 
                                    value={cryptoData.platform} 
                                    onChange={handleChange} 
                                />
                            </div>
                        </div>
                    </CForm>
                </CModalBody>
                <CModalFooter>
                    <CButton color="secondary" onClick={disableNewCryptoModal}>
                        Close
                    </CButton>
                    <CButton color="primary" onClick={createUpdateCrypto}  >
                        {initialData ? 'Actualizar' : 'Guardar'}
                    </CButton>
                </CModalFooter>
            </CModal>
        </>
    )
};


export default ModalNewCripto;