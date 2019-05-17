import React from 'react';
import { NavLink } from 'react-router-dom';

import './navigation.css';

const Navigation = () => {
    return (
        <header className="navigation">
            <ul>
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/favorites">Favorites</NavLink></li>
                <li><NavLink to="/PXa2bby0oQ0C">Details</NavLink></li>
            </ul>
        </header>
    )
};

export default Navigation;

