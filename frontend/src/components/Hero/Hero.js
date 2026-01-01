import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const textArray = [
    'Software Engineer'
  ];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % textArray.length;
      const fullText = textArray[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, textArray]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-greeting">Hello, I'm</p>
            <h1 className="hero-name">Kishore N</h1>
            <h2 className="hero-title">
              <span className="typed-text">{text}</span>
              <span className="cursor">|</span>
            </h2>
            <p className="hero-description">
              Software Engineer with expertise in building scalable backend systems and AI-driven automation in microservices architecture. 
              Currently working at FourKites on Spring Boot services, Kafka-based event-driven workflows, AWS infrastructure, and LLM-orchestrated pipelines.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>Get in Touch</button>
              <button className="btn btn-secondary" onClick={() => scrollToSection('experience')}>View Work</button>
            </div>
            <div className="hero-social">
              <a href="mailto:kishoren2572@gmail.com" className="social-link" aria-label="Email">
                <i className="fas fa-envelope"></i>
              </a>
              <a href="https://github.com/Kishore-2572" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/kishoren2572/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-wrapper">
              <div className="image-bg">
                <img src="/profile_image.jpg" alt="Kishore N" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-down">
        <button onClick={() => scrollToSection('about')} aria-label="Scroll to About">
          <i className="fas fa-chevron-down"></i>
        </button>
      </div>
    </section>
  );
};

export default Hero;
