import './App.css';
import logo from './logo.png';
import { useState, useEffect } from 'react';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <header className={`App-header ${scrolled ? 'scrolled' : ''}`}>
        <nav className="navbar">
          <img src={logo} className={`logo ${scrolled ? 'logo-scrolled' : ''}`} alt="Briobrill Logo" />
          <h1 className={`company-name ${scrolled ? 'hide-company-name' : ''}`}>Briobrill Technologies</h1>
          <ul className="nav-links">
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="hero-section">
          <h2 className="hero-title">Your Partner in Digital Transformation</h2>
          <p className="hero-subtitle">Expertise in Web Development, App Development, and No-Code Solutions</p>
          <a href="#services" className="cta-button">Explore Services</a>
        </div>
      </header>

      <section id="services" className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-card">
            <h3>Web Development</h3>
            <p>Building scalable and secure web applications tailored to your business needs.</p>
          </div>
          <div className="service-card">
            <h3>App Development</h3>
            <p>Creating intuitive mobile apps for both iOS and Android platforms.</p>
          </div>
          <div className="service-card">
            <h3>No-Code Solutions</h3>
            <p>Empowering your business with custom solutions using no-code platforms.</p>
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <h2>About Us</h2>
        <p>Briobrill Technologies is dedicated to helping businesses innovate with cutting-edge technology. We offer customized solutions in web development, app development, and no-code platforms to ensure your business stays ahead in a competitive market.</p>
      </section>

      <section id="contact" className="contact-section">
        <h2>Contact Us</h2>
        <p>Email us at: <a href="mailto:info@briobrill.com">info@briobrill.com</a></p>
        <p>Phone: +91 9481509568</p>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Briobrill Technologies. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
