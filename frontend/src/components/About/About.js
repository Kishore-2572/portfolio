import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Who Am I?</h2>
          <div className="title-underline"></div>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              I'm a <strong>builder with discipline, curiosity, and long-term ambition</strong> — software engineering is just the tool I currently use.
            </p>
            <p className="about-description">
              Currently working as SDE-1 at FourKites, I specialize in building scalable backend systems, AI-driven automation, and microservices architecture. 
              But beyond the code, I'm someone who takes ownership of problems end-to-end, from AI agents and automation tools to full-stack products.
            </p>
            
            <div className="about-highlights">
              <div className="highlight-item">
                <i className="fas fa-rocket"></i>
                <h3>Builder & Creator</h3>
                <p>I don't just code for work — I build things end-to-end. AI agents, automation tools, scraping platforms, full-stack products. I take ownership, not just tasks.</p>
              </div>
              
              <div className="highlight-item">
                <i className="fas fa-dumbbell"></i>
                <h3>Fitness-Driven & Disciplined</h3>
                <p>Gym isn't a hobby — it's a non-negotiable system. Structure, diet, consistency, and delayed gratification. That discipline shows up in my work ethic too.</p>
              </div>
              
              <div className="highlight-item">
                <i className="fas fa-compass"></i>
                <h3>Explorer & Storyteller</h3>
                <p>A traveler who enjoys discovering places — not just travel, but perspective. I turn experiences into stories.</p>
              </div>
              
              <div className="highlight-item">
                <i className="fas fa-lightbulb"></i>
                <h3>Learner Who Moves With the Market</h3>
                <p>I don't wait for "perfect projects". New tech drops → I touch it, test it, build something small. AI, automation, agents — I stay ahead, not behind.</p>
              </div>
              
              <div className="highlight-item">
                <i className="fas fa-puzzle-piece"></i>
                <h3>Problem-Solver at Heart</h3>
                <p>Whether it's an automation, cost optimization, system design, or business bottlenecks — I enjoy reducing chaos into systems.</p>
              </div>
              
              <div className="highlight-item">
                <i className="fas fa-code"></i>
                <h3>Technical Excellence</h3>
                <p>Spring Boot, Python, AWS, Kafka, OpenAI, LLM workflows. Building high-performance microservices and intelligent automation that scales.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
