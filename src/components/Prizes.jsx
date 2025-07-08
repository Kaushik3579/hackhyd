import { useEffect } from 'react';
import { FaTrophy, FaMedal, FaAward } from 'react-icons/fa';
import '../components/styles/prizes.css';

const Prizes = () => {
  const prizes = [
    {
      id: 1,
      title: '1st Place',
      icon: <FaTrophy className="prize-icon" />,
      amount: '₹75,000',
      description: 'Cash prize + Trophy + Certificates + Swag',
      featured: true
    },
    {
      id: 2,
      title: '2nd Place',
      icon: <FaMedal className="prize-icon" />,
      amount: '₹50,000',
      description: 'Cash prize + Medals + Certificates + Swag',
      featured: false
    },
    {
      id: 3,
      title: '3rd Place',
      icon: <FaAward className="prize-icon" />,
      amount: '₹25,000',
      description: 'Cash prize + Medals + Certificates + Swag',
      featured: false
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

    const elements = document.querySelectorAll('.prize-card, .special-prize-card, .section-title');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="prizes" className="prizes-section">
      <div className="container">
        <div className="section-title">
          <h2>Prizes</h2>
          <p>Win amazing prizes and recognition</p>
        </div>

        <div className="prizes-grid">
          {prizes.map((prize, index) => (
            <div 
              key={prize.id} 
              className={`prize-card fade-in ${prize.featured ? 'featured' : ''}`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div className="prize-icon-container">
                {prize.icon}
              </div>
              <h3>{prize.title}</h3>
              <div className="prize-amount">{prize.amount}</div>
              <p>{prize.description}</p>
            </div>
          ))}
        </div>

        <div className="note fade-in" style={{ transitionDelay: '0.6s' }}>
          <p>* All participants will receive certificates of participation and exclusive swag!</p>
        </div>
      </div>
    </section>
  );
};

export default Prizes;
