import React from 'react'
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { GrInstagram } from 'react-icons/gr'
import { FaFacebookSquare } from 'react-icons/fa'
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeaderSocials = () => {
  return (
    <div className='header__socials' data-aos= "zoom-in-left">
      <a href="https://www.linkedin.com/in/nehemiagueldi" target="_blank"><BsLinkedin/></a>
      <a href="https://github.com/nehemiagueldi" target="_blank"><BsGithub/></a>
      {/* <a href="https://www.facebook.com/nehemia.gueldigunawan.1" target="_blank"><FaFacebookSquare/></a> */}
      <a href="https://www.instagram.com/nehemiagueldi/" target="_blank"><GrInstagram/></a>
    </div>
  )
}

AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 20, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1200, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

export default HeaderSocials