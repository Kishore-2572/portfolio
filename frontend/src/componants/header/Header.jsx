import React from 'react';
import './header.css';
import CTA from './Cta';
import HeaderSocial from './HeaderSocial';
import myimg1 from '../../assets/myimage1.jpg'

const Header = () => {
  return (
    <header id='header'>
      <div className="container header-container">
        <h5>Hello I'm</h5>
        <h1>Kishore</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={myimg1} alt='my_pic'/>
        </div>
      </div>
    </header>
  );
};

export default Header;
