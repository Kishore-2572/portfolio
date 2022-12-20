import React from 'react';
import './services.css';
import { AiOutlineCheck } from 'react-icons/ai';

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services-container">
        <article className="service">
          <div className="service-head">
            <h3>Frontend Development</h3>
          </div>
          <ul className="service-list">
            <li>
              <AiOutlineCheck className="service-icon" />A front-end design
              takes on the task of engaging visitors so that businesses and
              organizations can reap the benefits of an online presence
            </li>
            <li>
              <AiOutlineCheck className="service-icon" />
              In today’s interactive world, it isn’t enough to create a
              user-friendly interface
            </li>
            <li>
              <AiOutlineCheck className="service-icon" />A web design must also
              drive sales and conversions
            </li>
            <li>
              <AiOutlineCheck className="service-icon" />
              It should responsive to how every visitor interacts with a site
            </li>
            <li>
              <AiOutlineCheck className="service-icon" />
              They are action oriented, easy for the user to engage with, and
              help a company or website collect valuable information
            </li>
          </ul>
        </article>
        {/* End of Frontend Development */}
        <article className="service">
          <div className="service-head">
            <h3>Backend Development</h3>
          </div>
          <ul className="service-list">
            <li>
              <AiOutlineCheck className="service-icon" />A Backend should be both
              effective and efficient, enabling customers to be satisfied with
              their experience of using your website or app
            </li>
            <li>
              <AiOutlineCheck className="service-icon" />
              It enables businesses to create customized web experiences for
              their customers
            </li>
            <li>
              <AiOutlineCheck className="service-icon" />
              It can help businesses meet their compliance requirements
            </li>
            <li>
              <AiOutlineCheck className="service-icon" />
              It allows for seamless integration between different web
              technologies
            </li>
            <li>
              <AiOutlineCheck className="service-icon" />A great user experience
              is now essential if you want to succeed online, and this can be
              achieved through backend development
            </li>
          </ul>
        </article>
        {/* End of Backend Development */}
        <article className="service">
          <div className="service-head">
            <h3>App Development</h3>
          </div>
          <ul className="service-list">
            <li>
              <AiOutlineCheck className="service-icon" />
              As part of the development process, mobile user interface (UI)
              design is also essential in the creation of mobile apps
            </li>
            <li>
              <AiOutlineCheck className="service-icon" />
              Mobile App Strategy refers to the creative effort required to
              translate consumer’s needs into an app
            </li>
            <li>
              <AiOutlineCheck className="service-icon" />
              It should be same as the website to achieve the business goals
            </li>
            <li>
              <AiOutlineCheck className="service-icon" />
              It can be used seamlessly to accomplish a specific task
            </li>
            <li>
              <AiOutlineCheck className="service-icon" />
              Easily create rich and engaging mobile apps and publish them
              effortlessly on the Apple Store or Google Play
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
