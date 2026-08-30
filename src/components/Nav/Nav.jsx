import React from 'react';
import './Nav.css';
const Nav = () => {
   
    return (
        <div className='nav'>
            <div className='navlogo'>Zeyad Badr</div>
            <ul className='navlist'>
                <li>Home</li>
                <li>Explore</li>
                <li>About</li>
                <li className='navcontact'>Contact</li>
            </ul>
        </div>
    )
}

export default Nav;
