import React from 'react';
import './Header.css';
import logo from './logo_transparent.png';

const Header = () => {
    return(
        <div className='mainHeader'>
            <div className='logodiv'>
            <img className='logo' src={logo} alt='logo' />
            </div>
            <nav className='nav'>
                <ul className='navList'>
                     <li>Home</li>
                    <li>5G</li>
                    <li>Anti-vaxers</li>
                    <li>COVID-19</li>
                    <li>Flat Earth</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;