import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import '../components/styles/navbar.css';

const Navbar = ({ isScrolled, isMenuOpen, setIsMenuOpen }) => {
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setIsMenuOpen]);

  // Close mobile menu when clicking on a nav link
  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%'
      }}>
        <div className="navbar-logo">
          <Link to="/" onClick={closeMobileMenu}>
            <span className="logo-text">Hack</span>
            <span className="logo-highlight">Hyderabad</span>
          </Link>
        </div>

        <div className="nav-cta">
          <ScrollLink 
            to="register" 
            smooth={true} 
            duration={500} 
            className="btn btn-primary"
            onClick={closeMobileMenu}
            style={{
              whiteSpace: 'nowrap',
              padding: '0.5rem 1rem',
              fontSize: '0.9rem'
            }}
          >
            Register (₹200/team)
          </ScrollLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
