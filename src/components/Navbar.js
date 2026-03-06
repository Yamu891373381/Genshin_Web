import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/exploration', label: 'Exploration' },
    { path: '/endgame', label: 'Endgame' },
    { path: '/quest', label: 'Quest' },
    { path: '/dailies', label: 'Dailies' },
    { path: '/about', label: 'About Us' }
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-left">
          <button className={`hamburger ${isOpen ? 'is-active' : ''}`} onClick={toggleMenu} aria-label="Menu">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </button>
          <Link to="/" className="nav-logo" onClick={closeMenu}>
            Genshin Portal
          </Link>
        </div>

        <ul className="nav-menu">
          {navLinks.map((link) => (
            <li key={link.path} className="nav-item">
              <Link 
                to={link.path} 
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Side/Mobile Menu Overlay */}
        <div className={`side-drawer ${isOpen ? 'open' : ''}`}>
          <ul className="side-menu-list">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link 
                  to={link.path} 
                  className={`side-link ${location.pathname === link.path ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        {isOpen && <div className="menu-backdrop" onClick={closeMenu}></div>}
      </div>
    </nav>
  );
};

export default Navbar;
