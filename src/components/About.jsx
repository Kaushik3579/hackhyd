import { useEffect } from 'react';
import '../components/styles/about.css';

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible');
        }
      });
    }, {
      threshold: 0.1
    });

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-title">
          <h2>About The Event</h2>
          <p>Get ready for an unforgettable hackathon experience</p>
        </div>
        
        <div className="about-content">
          <div className="about-text fade-in">
            <h3>About Hack Hyderabad 2025</h3>
            <p>
              Hack Hyderabad 2025 is the premier 24-hour national-level hackathon hosted by the Computer Society of India – Hyderabad Chapter (CSI-HC). This flagship event brings together India's brightest student developers, designers, and innovators for a high-stakes weekend of coding, collaboration, and problem-solving.
            </p>
            <p>
              With over 500+ teams competing in the online screening round and 125 teams selected for the grand finale at CBIT Hyderabad, this is your chance to showcase your skills, learn from industry experts, and win from a prize pool of ₹1.5 Lakhs.
            </p>
            <div className="stats">
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Teams</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">24</span>
                <span className="stat-label">Hours</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5</span>
                <span className="stat-label">Tracks</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">₹1.5L</span>
                <span className="stat-label">Prizes</span>
              </div>
            </div>
          </div>
          
          <div className="about-image fade-in">
            <div className="image-container">
              <div className="glow"></div>
              <div className="image-placeholder">
                <span>Event Venue</span>
              </div>
            </div>
            <div className="highlight-box">
              <div className="highlight-icon">🏆</div>
              <div>
                <h4>Win Amazing Prizes</h4>
                <p>Compete for a prize pool of ₹1.5 Lakhs+ and exciting goodies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
