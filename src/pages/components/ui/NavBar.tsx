import React   from 'react';
import { useNavigate } from 'react-router-dom';
import { BsPerson, BsBarChartLine, BsGear, BsHouse } from "react-icons/bs";
import Logo from '../../../assets/logo.png';
import './navbar.css';

const NavBar: React.FC = () => {

    const navigate = useNavigate();


    return (
        <div className='sidebar__container'>
            <div className="sidebar__top">
                <div className="sidebar__logo">
                    <img src={Logo} alt="Investsphere" className='sidebar__logo__icon' />
                </div>
                <div className="navbar__container">
                    <ul className="navbar__menu">
                        <li onClick={() => navigate('/dashboard')} className='navbar__item' >
                            <BsHouse className="navbar__icon" title='Dashboard' />
                        </li>
                        <li onClick={() => navigate('/investments')} className='navbar__item'>
                            <BsBarChartLine className="navbar__icon" title='Investments' />
                        </li>

                        <li onClick={() => navigate('/profile')} className='navbar__item'>
                            <BsPerson className="navbar__icon" title='Profile' />
                        </li>
                    </ul> 
                </div>
            </div>
            <div className="sidebar__bottom">
                <li onClick={() => navigate('/settings')} className='navbar__item'>
                    <BsGear className="navbar__icon" title='Settings' />
                </li>
            </div>
        </div>
    );
};

export default NavBar;