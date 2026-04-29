import React from 'react'
import { Link } from 'react-router-dom'
import './CustomNavBar.css'
import { useEffect, useRef } from 'react'
const CustomNavBar = () => {
    const menuRef = useRef(null);
  
    useEffect(() => {
        // Set animation delay indices for menu items
        if (menuRef.current) {
        const items = menuRef.current.querySelectorAll('li');
        items.forEach((item, index) => {
            item.style.setProperty('--item-index', index + 1);
        });
        }
    }, []);
    return (
        <nav className='navbar'>
        <div className='navbar-logo'>
            <h1>Jack Fernando</h1>
            <h2>Software Developer</h2>
        </div>
        <ul className='navbar-menu'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/weightlifting">Weightlifting</Link></li>
            <li><Link to="/about">About</Link></li>
            
        </ul>
        </nav>
    )
}

export default CustomNavBar
