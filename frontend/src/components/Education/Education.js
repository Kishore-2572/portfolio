import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Education</h2>
          <div className="title-underline"></div>
        </div>
        <div className="education-card">
          <div className="education-icon">
            <i className="fas fa-graduation-cap"></i>
          </div>
          <div className="education-content">
            <h3 className="education-degree">Bachelor of Engineering (B.E.) in Computer Science</h3>
            <h4 className="education-school">Kongu Engineering College</h4>
            <p className="education-date">Oct 2020 - May 2024</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
