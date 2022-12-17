import React from 'react';
import './header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <h1>💎Diamond Hands💎</h1>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/login'>Login</Link></li>
            </ul>
        </div>
    );
};

export default Header;

//<li><a href="#home">Home</a></li>
      //          <li><a href="#about">About</a></li>