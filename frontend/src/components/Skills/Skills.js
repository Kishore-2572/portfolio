import React, { useEffect, useState, useRef } from 'react';
import './Skills.css';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  const skillCategories = [
    {
      title: 'Backend & Frontend',
      icon: 'fas fa-laptop-code',
      skills: [
        { name: 'Java (Spring Boot)', level: 95 },
        { name: 'Python (FastAPI & Pytest)', level: 85 },
        { name: 'Go (Debugging & Maintenance)', level: 70 },
        { name: 'Ruby (Worker Debugging)', level: 65 },
        { name: 'JavaScript (React)', level: 80 }
      ]
    },
    {
      title: 'Databases & Storage',
      icon: 'fas fa-database',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'Redis', level: 90 }
      ]
    },
    {
      title: 'Infrastructure & DevOps',
      icon: 'fas fa-cloud',
      skills: [
        { name: 'AWS (EC2, S3, EKS)', level: 85 },
        { name: 'Azure OpenAI Services', level: 80 },
        { name: 'Kafka', level: 90 },
        { name: 'SQS', level: 75 }
      ]
    },
    {
      title: 'AI & Automation',
      icon: 'fas fa-robot',
      skills: [
        { name: 'Azure OpenAI Services', level: 85 },
        { name: 'LangChain, LangGraph', level: 80 },
        { name: 'Prompt Engineering', level: 90 },
        { name: 'LLM Workflows', level: 85 },
        { name: 'Browser Automation (Playwright)', level: 75 }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="skills" ref={skillsRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Technical Skills</h2>
          <div className="title-underline"></div>
        </div>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="category-icon">
                <i className={category.icon}></i>
              </div>
              <h3 className="category-title">{category.title}</h3>
              <div className="skill-list">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <span className="skill-name">{skill.name}</span>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="ai-tools-section">
          <div className="ai-tools-card">
            <i className="fas fa-magic"></i>
            <h3>AI-Assisted Development</h3>
            <p>
              Leveraged AI-assisted tools (GitHub Copilot, Claude AI) for code generation, refactoring, and debugging support, 
              reducing development time and improving productivity in day-to-day engineering tasks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
