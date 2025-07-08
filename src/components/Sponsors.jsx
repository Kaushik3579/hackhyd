import { useEffect } from 'react';
import { FaGlobe, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import '../components/styles/sponsors.css';

const Sponsors = () => {
  const sponsors = {
    platinum: [
      { id: 1, name: 'TechGiant', logo: 'https://via.placeholder.com/300x150?text=TechGiant', url: '#' },
      { id: 2, name: 'CodeMaster', logo: 'https://via.placeholder.com/300x150?text=CodeMaster', url: '#' },
    ],
    gold: [
      { id: 1, name: 'DevCloud', logo: 'https://via.placeholder.com/250x120?text=DevCloud', url: '#' },
      { id: 2, name: 'DataSphere', logo: 'https://via.placeholder.com/250x120?text=DataSphere', url: '#' },
      { id: 3, name: 'PixelForge', logo: 'https://via.placeholder.com/250x120?text=PixelForge', url: '#' },
    ],
    silver: [
      { id: 1, name: 'WebWizards', logo: 'https://via.placeholder.com/200x100?text=WebWizards', url: '#' },
      { id: 2, name: 'AppCraft', logo: 'https://via.placeholder.com/200x100?text=AppCraft', url: '#' },
      { id: 3, name: 'CloudNest', logo: 'https://via.placeholder.com/200x100?text=CloudNest', url: '#' },
      { id: 4, name: 'CodeHive', logo: 'https://via.placeholder.com/200x100?text=CodeHive', url: '#' },
    ],
    partners: [
      { id: 1, name: 'EduTech', logo: 'https://via.placeholder.com/150x80?text=EduTech', url: '#' },
      { id: 2, name: 'LearnCode', logo: 'https://via.placeholder.com/150x80?text=LearnCode', url: '#' },
      { id: 3, name: 'DevTools', logo: 'https://via.placeholder.com/150x80?text=DevTools', url: '#' },
      { id: 4, name: 'HackHub', logo: 'https://via.placeholder.com/150x80?text=HackHub', url: '#' },
      { id: 5, name: 'CodeForge', logo: 'https://via.placeholder.com/150x80?text=CodeForge', url: '#' },
    ]
  };

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

    const elements = document.querySelectorAll('.sponsor-tier, .sponsor-item, .section-title');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const renderSponsorTier = (tier, sponsors, isPartner = false) => {
    if (!sponsors || sponsors.length === 0) return null;

    return (
      <div className={`sponsor-tier ${tier.toLowerCase()} fade-in`}>
        <h3 className="tier-title">{isPartner ? 'Partners' : `${tier} Sponsors`}</h3>
        <div className={`sponsor-grid ${isPartner ? 'partner-grid' : ''}`}>
          {sponsors.map((sponsor) => (
            <a 
              key={sponsor.id} 
              href={sponsor.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="sponsor-item"
            >
              <img 
                src={sponsor.logo} 
                alt={sponsor.name} 
                className={`sponsor-logo ${tier.toLowerCase()}-logo`} 
              />
            </a>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="sponsors" className="sponsors-section">
      <div className="container">
        <div className="section-title">
          <h2>Sponsors & Partners</h2>
          <p>Our amazing sponsors who make this event possible</p>
        </div>

        <div className="sponsors-content">
          {renderSponsorTier('Platinum', sponsors.platinum)}
          {renderSponsorTier('Gold', sponsors.gold)}
          {renderSponsorTier('Silver', sponsors.silver)}
          {renderSponsorTier('Community', sponsors.partners, true)}
        </div>

        <div className="become-sponsor fade-in">
          <h3>Want to become a sponsor?</h3>
          <p>Join us in supporting the developer community and showcase your brand to hundreds of talented individuals.</p>
          <a href="#contact" className="btn btn-outline">Become a Sponsor</a>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
