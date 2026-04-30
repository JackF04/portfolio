import React, { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './CustomNavBar.css'

const CustomNavBar = () => {
    const menuRef = useRef(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (menuRef.current) {
            const items = menuRef.current.querySelectorAll('li');
            items.forEach((item, index) => {
                item.style.setProperty('--item-index', index + 1);
            });
        }
    }, []);

    useEffect(() => {
        setMobileOpen(false);
    }, [location.pathname]);

    return (
        <nav className='navbar'>
            <div className='navbar-logo'>
                <h1>Jack Fernando</h1>
                <h2>Software Developer</h2>
            </div>

            <button
                className={`mobile-menu-button ${mobileOpen ? 'is-open' : ''}`}
                aria-label='Toggle menu'
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen(o => !o)}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <ul ref={menuRef} className={`navbar-menu ${mobileOpen ? 'is-open' : ''}`}>
                <li><NavLink to="/" end>Home</NavLink></li>
                <li><NavLink to="/projects">Projects</NavLink></li>
                <li><NavLink to="/weightlifting">Weightlifting</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
            </ul>
        </nav>
    )
}

export default CustomNavBar
