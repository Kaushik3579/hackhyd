import { Link } from 'react-router-dom';
import '../components/styles/hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h4 className="subtitle">Presented by Computer Society of India – Hyderabad Chapter</h4>
            <h1>Hack Hyderabad 2025</h1>
            <h2>Hyderabad's Premier 24-Hour National Hackathon</h2>
            <p className="date-location">
              <span className="date">Round 1: Aug 2, 2025 (Online)</span>
              <span className="divider">|</span>
              <span className="location">Finals: Aug 22, 2025 @ CBIT, Hyderabad</span>
            </p>
            <div className="cta-buttons">
              <a href="#register" className="btn btn-primary">
                Register Now (₹200 per team)
              </a>
              <a href="#about" className="btn btn-outline">
                Learn More
              </a>
              <p className="registration-note" style={{
                fontSize: '0.85rem',
                marginTop: '0.5rem',
                opacity: 0.9,
                maxWidth: '400px',
                lineHeight: '1.4'
              }}>
                * Registration fee of ₹200 per team is required to participate in the hackathon.
              </p>
            </div>
          </div>
          <div className="hero-image">
            <div className="glow"></div>
            <div className="prize-badge">
              <span className="prize-amount">₹1.5 LAKH  </span>
              <span className="prize-label">Prize Pool</span>
            </div>
          </div>
        </div>
        <div className="scroll-down">
          <span>Scroll Down</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      <div className="overlay"></div>
    </section>
  );
};

export default Hero;
