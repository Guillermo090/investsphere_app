import {CTable} from '@coreui/react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';
import { BsTrash, BsSearch } from "react-icons/bs";
import { useAuth } from '../../auth/AuthContext';
import CryptoInterface from './interfaces'

const INVESTSPHERE_APP_BACKEND_URL = import.meta.env.VITE_INVESTSPHERE_APP_BACKEND_URL;

const formatDate = (dateString: string) => {
    const date = new Date(dateString);

    // Obtener el año, mes y día
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const day = String(date.getDate()).padStart(2, '0');

    // Devolver en formato Año-Mes-Día
    return `${year}-${month}-${day}`;
}

const CryptoList = ({isUpdated}) => {

    const [cryptos, setCryptos] = useState<CryptoInterface[]>([])

    const { isAuth, setIsAuth } = useAuth();


    useEffect(() => {

        updateCryptoList();

    }, [isUpdated])

    const updateCryptoList = () => {

        if (!isAuth) {
            toast.error("No tienes autorización");
            return
        }

        let user = JSON.parse(localStorage.getItem("user") || '{}');

        axios({
            method: 'get',
            url: INVESTSPHERE_APP_BACKEND_URL +  '/api/crypto-transactions/',
            headers: { Authorization: `Bearer ${user.token}` },
        })
        .then(({data}) => {
            setCryptos( data)
        })
        .catch(({response}) => {
            toast.error('Datos inválidos' , {
                position: "top-right",
                autoClose: 5000,
                closeOnClick: true
            });
            console.log(response.data)
            if ( response.data.code === 'token_not_valid' ){
                setIsAuth(false)
            }
        });

    }
        
    const columns = [
        // {
        //     key: 'id',
        //     label: 'ID',
        //     _props: { scope: 'col' },
        // },
        {
          key: 'purchase_date',
          label: 'Fecha de Compra',
          _props: { scope: 'col' },
        },
        {
          key: 'currency_bought',
          label: 'Moneda Comprada',
          _props: { scope: 'col' },
        },
        {
          key: 'purchase_amount',
          label: 'Monto pagado',
          _props: { scope: 'col' },
        },
        // {
        //   key: 'commission',
        //   label: 'Comisión',
        //   _props: { scope: 'col' },
        // },
        // {
        //     key: 'platform',
        //     label: 'Plataforma',
        //     _props: { scope: 'col' },
        // },
        {
            key: 'base_currency',
            label: 'Moneda de Pago',
            _props: { scope: 'col' },
        },
        {
            key: 'amount_of_bought_currency',
            label: 'Total Comprado',
            _props: { scope: 'col' },
        },
        {
            key: 'actions',
            label: 'Acciones',
            _props: { scope: 'col' },
        },
        
    ]

    const items  = cryptos.map((crypto) => {
        const purchase_date = formatDate(crypto.purchase_date)
 
        return {
            // id: crypto.id,
            purchase_date: purchase_date,
            currency_bought: crypto.currency_bought,
            purchase_amount: crypto.purchase_amount,
            // commission: crypto.commission,
            // platform: crypto.platform,
            base_currency: crypto.base_currency,
            amount_of_bought_currency: crypto.amount_of_bought_currency,
            actions : <div  className="action_container" > 
                <button className='button__action_details'  title='Detalles' >   
                    <BsSearch className="action__icon__details" title='Eliminar' />
                </button>
                <button className='button__action_trash'  title='eliminar' >   
                    <BsTrash className="action__icon__trash" title='Eliminar' />
                </button>
            </div>,
            _cellProps: { id: { scope: 'row' } }
        }
    })



    return (
        <CTable responsive={'sm'}  columns={columns} items={items} style={{minWidth:'1000px'}} />
    )




}


export default CryptoList;