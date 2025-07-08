import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
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
          <Link 
            to="home" 
            smooth={true} 
            duration={500}
          >
            <span className="logo-text">Hack</span>
            <span className="logo-highlight">Hyderabad</span>
          </Link>
        </div>

        <div className="nav-cta">
          <a href="#register" className="btn btn-primary">
            Register Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
