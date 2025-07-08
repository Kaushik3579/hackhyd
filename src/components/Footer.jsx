import { FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../components/styles/footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaTwitter />, url: 'https://twitter.com/hackhyderabad', name: 'Twitter' },
    { icon: <FaInstagram />, url: 'https://instagram.com/hackhyderabad', name: 'Instagram' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/company/hackhyderabad', name: 'LinkedIn' },
    { icon: <FaGithub />, url: 'https://github.com/hackhyderabad', name: 'GitHub' },
    { icon: <FaEnvelope />, url: 'mailto:info@hackhyderabad.tech', name: 'Email' },
  ];

  const quickLinks = [
    { name: 'Home', url: '#home' },
    { name: 'About', url: '#about' },
    { name: 'Tracks', url: '#tracks' },
    { name: 'Prizes', url: '#prizes' },
    { name: 'Schedule', url: '#schedule' },
    { name: 'Sponsors', url: '#sponsors' },
    { name: 'FAQ', url: '#faq' },
  ];

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-about">
              <h3>Hack Hyderabad</h3>
              <p>Organized by CSI Hyderabad Chapter, bringing together the brightest minds to innovate, create, and push the boundaries of technology.</p>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index} 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.url}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-contact">
              <h4>Contact Us</h4>
              <ul>
                <li>
                  <FaMapMarkerAlt className="contact-icon" />
                  <span>Hyderabad International Convention Center (HICC), Hyderabad, Telangana 500084</span>
                </li>
                <li>
                  <FaEnvelope className="contact-icon" />
                  <a href="mailto:info@hackhyderabad.tech">info@hackhyderabad.tech</a>
                </li>
                <li>
                  <FaPhone className="contact-icon" />
                  <a href="tel:+919876543210">+91 98765 43210</a>
                </li>
                <li>
                  <FaClock className="contact-icon" />
                  <span>August 22-23, 2025</span>
                </li>
              </ul>
            </div>

            <div className="footer-newsletter">
              <h4>Stay Updated</h4>
              <p>Subscribe to our newsletter for the latest updates and announcements.</p>
              <form className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  required 
                />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Hack Hyderabad. All rights reserved.</p>
            <div className="footer-legal">
              <Link to="/privacy">Privacy Policy</Link>
              <span>•</span>
              <Link to="/terms">Terms of Service</Link>
              <span>•</span>
              <Link to="/code-of-conduct">Code of Conduct</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
