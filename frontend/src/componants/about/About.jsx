import React from 'react';
import './about.css';
import {FaAward} from 'react-icons/fa'
import {VscFolderActive} from 'react-icons/vsc'
import myimg2 from '../../assets/myimage2.JPG'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know </h5>
      <h2>About Me</h2>
      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-image">
            <img src={myimg2} alt="my_pic" />
          </div>
        </div>
        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <FaAward className='about-icon'/>
              <h5>Experiance</h5>
              <small>1+ year</small>
            </article>
            <article className="about-card">
              <VscFolderActive className='about-icon'/>
              <h5>Projects</h5>
              <small>3 completed</small>
            </article>
          </div>
          <p>Hello there, I'm Kishore, I am a Full Stack Web Developer and also an app developer. An Open Source enthusiast and a Computer Science student from India.</p>

<p>I love working on new and exciting technologies emerging nowadays. I have good experience as a MERN Stack Developer as well as a Flutter App Developer. where I was a core member of the development team and done quite some contributions to open source as well.</p>
          <a href="#contact" className='btn btn-primary' >Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
