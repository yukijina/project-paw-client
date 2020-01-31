import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';

const NavBar = () => {
    return (
        <div className="NavBar">
            <div>
                <ul>
                    <li>Search icon</li>
                    <li>Account icon</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li><Link to="/">Paw Pal</Link></li>
                    <li><Link to="/adopt">Adopt</Link></li>
                    <li><Link to="/support">Support</Link></li>
                    <li><Link to="/resource">Resource</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                </ul>
                </div>
        </div>
    )
}

export default NavBar;