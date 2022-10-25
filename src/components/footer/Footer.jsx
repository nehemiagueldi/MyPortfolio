import React from 'react'
import './footer.css'
import { FaFacebookSquare } from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {GrTwitter} from 'react-icons/gr'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>NEGU</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/nehemia.gueldigunawan.1" target="_blank"><FaFacebookSquare/></a>
        <a href="https://www.instagram.com/nehemiagueldi/" target="_blank"><FiInstagram/></a>
        <a href="https://twitter.com/GueldiNehemia" target="_blank"><GrTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; NEGU Portfolio. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer