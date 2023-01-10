import React from 'react';
import './experiance.css';
import { BsPatchCheckFill } from 'react-icons/bs';

const Experiance = () => {
  return (
    <section id="experiance">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container exp-container">
        <div className="exp-frontend">
          <h3>Frontend Development</h3>
          <div className="exp-content">
            <article className="exp-details">
              <BsPatchCheckFill className='exp-details-icon' />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="exp-details">
              <BsPatchCheckFill className='exp-details-icon' />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="exp-details">
              <BsPatchCheckFill className='exp-details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="exp-details">
              <BsPatchCheckFill className='exp-details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="exp-details">
              <BsPatchCheckFill className='exp-details-icon' />
              <div>
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="exp-details">
              <BsPatchCheckFill className='exp-details-icon' />
              <div>
                <h4>Flutter</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
          </div>
        </div>
        {/* End of frontend */}
        <div className="exp-backend">
          <h3>Backend Development</h3>
          <div className="exp-content">
            <article className="exp-details">
              <BsPatchCheckFill className='exp-details-icon' />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="exp-details">
              <BsPatchCheckFill className='exp-details-icon' />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="exp-details">
              <BsPatchCheckFill className='exp-details-icon' />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="exp-details">
              <BsPatchCheckFill className='exp-details-icon' />
              <div>
                {' '}
                <h4>MySQL</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiance;
