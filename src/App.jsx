import { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Tracks from './components/Tracks';
import Prizes from './components/Prizes';
import Schedule from './components/Schedule';
import Sponsors from './components/Sponsors';
import Faq from './components/Faq';
import Footer from './components/Footer';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking on a nav link
  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <Router>
      <div className="app">
        <Navbar isScrolled={isScrolled} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <main onClick={closeMobileMenu}>
          <div style={{
            position: 'fixed',
            top: '28px',  // Adjusted 2px higher
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            color: 'white',
            padding: '8px 15px',
            borderRadius: '25px',
            fontSize: '14px',
            zIndex: 1000,
            display: 'flex',
            gap: '10px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
            flexWrap: 'wrap',
            maxWidth: '90%',
            justifyContent: 'center'
          }}>
            {['Home', 'About', 'Tracks', 'Prizes', 'Schedule', 'Sponsors', 'FAQ'].map((section) => (
              <button 
                key={section}
                onClick={() => {
                  const element = document.getElementById(section.toLowerCase());
                  if (element) {
                    const yOffset = -80; // Adjust for fixed header
                    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }}
                style={{
                  background: 'transparent',
                  border: '1px solid #FF6B6B',
                  color: 'white',
                  borderRadius: '15px',
                  padding: '4px 12px',
                  cursor: 'pointer',
                  fontSize: '12px',
                  transition: 'all 0.3s ease',
                  whiteSpace: 'nowrap'
                }}
                onMouseOver={(e) => {
                  e.target.style.background = '#FF6B6B';
                  e.target.style.color = 'white';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = 'white';
                }}
              >
                {section}
              </button>
            ))}
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              style={{
                background: '#FF6B6B',
                border: 'none',
                color: 'white',
                borderRadius: '15px',
                padding: '4px 12px',
                cursor: 'pointer',
                fontSize: '12px',
                marginLeft: '5px',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
              title="Scroll to top"
            >
              ↑
            </button>
          </div>
          <Hero />
          <About />
          <Tracks />
          <Prizes />
          <Schedule />
          <Sponsors />
          <Faq />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
