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
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, illum! Similique rerum iure optio iste a totam distinctio maiores dicta sapiente sequi dolores praesentium in ex, laboriosam ea excepturi animi, reprehenderit quidem molestias, nihil odit velit modi! Harum, repudiandae aliquid eaque illum natus, id doloribus debitis omnis officia tempora dolore.</p>
          <a href="#contact" className='btn btn-primary' >Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
