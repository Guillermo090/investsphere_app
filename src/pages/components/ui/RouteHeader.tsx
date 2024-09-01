import React from 'react';
import './header.css'
import { BsPerson, BsJustify } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

const RouteHeader: React.FC = () => {

    const navigate = useNavigate();

    return (
        <div className='header__container'>
            <div className="left__header">
                <div className="sidebar__toggle">
                    <div onClick={() => navigate('/profile')} className='toggle__button'>
                        <BsJustify className="toggle__icon" title='Profile' />
                    </div>
                </div>

                <p> 
                    <a href="#" style={{color:'black'}}> Investment </a>
                    <span style={{margin:'0 10px'  }}> {' > '} </span> 
                    <a href="#" style={{color:'black'}}> Inicio </a>
                </p>
            </div>
            <div className="right__header">
                <div className="user__icon__container">
                    <BsPerson className="user__icon" title='Profile' />
                </div>
            </div>
        </div>
    );
};

export default RouteHeader;
