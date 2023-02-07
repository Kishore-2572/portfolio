import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer-logo' >KISHORE</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experiance">Experiance</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer-socials'>

      <a href="https://www.linkedin.com/in/kishoren2572" target="_blank"><BsLinkedin/></a>
      <a href="https://github.com/Kishore-2572" target="_blank"><FaGithub/></a>
      <a href="https://instagram.com/kishore_n__?igshid=YmMyMTA2M2Y=" target="_blank"><BsInstagram/></a>
      </div>
      <div className="footer-copyright">
        <small>&copy; Kishore, All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
