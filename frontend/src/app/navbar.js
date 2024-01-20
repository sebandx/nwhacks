import React from 'react';
import { Link } from 'react-router-dom'; // Make sure you have react-router-dom installed

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Navbar</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                {/* Add more links as needed */}
            </div>
        </nav>
    );
};

export default Navbar;