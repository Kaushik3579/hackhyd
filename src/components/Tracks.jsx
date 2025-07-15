import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { tracks } from '../data/tracks';
import './styles/tracks.css';

const Tracks = () => {
  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible');
        }
      });
    }, { threshold: 0.1 });

    const cards = document.querySelectorAll('.track-card');
    cards.forEach((card, index) => {
      card.style.transitionDelay = `${index * 0.1}s`;
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="tracks" className="tracks-section">
      <div className="container">
        <div className="section-title">
          <h2>Hack Tracks</h2>
          <p>Choose your path to innovation</p>
        </div>

        <div className="tracks-grid">
          {tracks.map((track, index) => (
            <div key={track.id} className="track-card fade-in">
              <div className="track-content">
                <div className="track-icon">
                  <div className="track-icon-inner">
                    <div className="track-icon-front">
                      {track.icon}
                    </div>
                    <div className="track-icon-back">
                      {track.icon}
                    </div>
                  </div>
                </div>
                <h3>{track.title}</h3>
                <p className="track-description">{track.description}</p>
                <div className="button-container">
                  <Link to={`/tracks/${track.id}`} className="view-problems-button">
                    View Problem Statements
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tracks;
