import React from 'react';
import './header.css'

const Header = () => {
    return (
        <div className='header'>
            <h1>Diamond Hands</h1>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </div>
    );
};

export default Header;