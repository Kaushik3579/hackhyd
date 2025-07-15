import { useState, useEffect } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import '../components/styles/faq.css';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What is Hack Hyderabad?',
      answer: 'Hack Hyderabad is a 24-hour hackathon organized by the CSI Hyderabad Chapter, bringing together developers, designers, and innovators to build creative solutions to real-world problems.'
    },
    {
      question: 'Who can participate?',
      answer: 'The hackathon is open to all students and professionals aged 18 and above. Whether you\'re a beginner or an experienced developer, we welcome participants of all skill levels.'
    },
    {
      question: 'How do I register?',
      answer: 'You can register by clicking the "Register Now" button at the top of this page. Fill out the registration form and we\'ll get back to you with confirmation details.'
    },
    {
      question: 'Is there a registration fee?',
      answer: 'Yes, there is a registration fee of ₹499 per team. This helps us cover the costs of the event and provide a better experience for all participants. The fee includes meals, swag, and access to all event activities.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept online payments through UPI, credit/debit cards, and net banking. Payment details will be provided after you complete the registration form.'
    },
    {
      question: 'Is the registration fee refundable?',
      answer: 'The registration fee is non-refundable. However, if the event is canceled by the organizers, full refunds will be issued to all registered participants.'
    },
    {
      question: 'Do I need a team?',
      answer: 'You can participate individually or in teams of up to 4 people. If you don\'t have a team, we\'ll have team formation activities at the beginning of the event.'
    },
    {
      question: 'What should I bring?',
      answer: 'Bring your laptop, chargers, any hardware you plan to use, and a valid government-issued ID. We recommend bringing a change of clothes and any personal items you might need for an overnight stay.'
    },
    {
      question: 'Will there be food provided?',
      answer: 'Yes! We\'ll provide all meals, snacks, and beverages throughout the event. Please let us know about any dietary restrictions when you register.'
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

    const elements = document.querySelectorAll('.faq-item, .section-title');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <div className="section-title">
          <h2>Frequently Asked Questions</h2>
          <p>Find answers to common questions about the event</p>
        </div>

        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item fade-in ${activeIndex === index ? 'active' : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div 
                className="faq-question"
                onClick={() => toggleFaq(index)}
              >
                <h3>{faq.question}</h3>
                <div className="faq-toggle">
                  {activeIndex === index ? <FaMinus /> : <FaPlus />}
                </div>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="contact-support fade-in" style={{ transitionDelay: `${faqs.length * 0.1 + 0.1}s` }}>
          <p>Still have questions? Contact us at <a href="mailto:info@hackhyderabad.tech">info@hackhyderabad.tech</a></p>
        </div>
      </div>
    </section>
  );
};

export default Faq;
