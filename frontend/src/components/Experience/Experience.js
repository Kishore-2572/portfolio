import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      date: 'Jun 2024 - Present',
      title: 'Software Engineer 1',
      company: 'FourKites',
      description: [
        'Designed and developed scalable Spring Boot microservices handling high-volume, event-driven workflows using Kafka and Redis',
        'Owned and optimized critical APIs, reducing operational costs by ~50% and improving response times under production load',
        'Built and orchestrated LLM-based AI workflows to extract, enrich, and validate structured data from unstructured sources with high accuracy',
        'Led and executed major version upgrades across multiple services, ensuring zero-downtime deployments',
        'Developed a complete frontend feature and contributed to incremental UI improvements and bug fixes using React and SCSS'
      ],
      tags: ['Spring Boot', 'Python', 'Kafka', 'AWS', 'EKS', 'LangChain', 'LangGraph', 'OpenAI', 'Pytest', 'Go', 'Ruby', 'React']
    },
    {
      date: 'Jul 2023 - May 2024',
      title: 'Software Engineer Intern',
      company: 'FourKites',
      description: [
        'Contributed to automating backend workflows under guidance, improving system stability and reducing recurring bugs',
        'Implemented scoped REST API optimizations, contributing to improved response times and reduced operational costs (~50%)',
        'Investigated and resolved critical data processing issues, improving data accuracy and reliability'
      ],
      tags: ['Java', 'Node.js', 'REST APIs']
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Professional Experience</h2>
          <div className="title-underline"></div>
        </div>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-date">{exp.date}</div>
                <h3 className="timeline-title">{exp.title}</h3>
                <h4 className="timeline-company">{exp.company}</h4>
                <ul className="timeline-description">
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
        <div className="timeline-tags">
          {exp.tags.map((tag, idx) => (
            <span key={idx} className="tag">{tag}</span>
          ))}
        </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
