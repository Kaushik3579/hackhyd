import { useEffect } from 'react';
import '../components/styles/tracks.css';

const Tracks = () => {
  const tracks = [
    {
      icon: '🤖',  // Robot for AI/ML
      title: 'Artificial Intelligence & Machine Learning',
      description: 'Develop intelligent systems that can learn, reason, and make decisions to solve complex problems.'
    },
    {
      icon: '💻',  // Laptop for FinTech & Blockchain
      title: 'FinTech & Blockchain',
      description: 'Innovate in financial technology, decentralized finance, and blockchain applications.'
    },
    {
      icon: '🌍',  // Globe for Sustainability
      title: 'Sustainability & Environment',
      description: 'Create solutions that promote environmental sustainability and combat climate change.'
    },
    {
      icon: '⚕️',  // Medical symbol for HealthTech
      title: 'HealthTech & Bioinformatics',
      description: 'Develop technologies that improve healthcare delivery and advance medical research.'
    },
    {
      icon: '💡',  // Lightbulb for Open Innovation
      title: 'Open Innovation (Wildcard)',
      description: 'Think outside the box and bring your most innovative ideas to solve real-world challenges.'
    }
  ];

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

    const elements = document.querySelectorAll('.track-card');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
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
            <div key={index} className={`track-card fade-in`} style={{ transitionDelay: `${index * 0.1}s` }}>
              <div className="track-icon" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                {track.icon}
              </div>
              <h3>{track.title}</h3>
              <p>{track.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tracks;
