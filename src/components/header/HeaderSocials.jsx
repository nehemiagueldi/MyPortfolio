import React from 'react'
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { GrInstagram } from 'react-icons/gr'
import { FaFacebookSquare } from 'react-icons/fa'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/nehemiagueldi" target="_blank"><BsLinkedin/></a>
      <a href="https://github.com/nehemiagueldi" target="_blank"><BsGithub/></a>
      {/* <a href="https://www.facebook.com/nehemia.gueldigunawan.1" target="_blank"><FaFacebookSquare/></a> */}
      <a href="https://www.instagram.com/nehemiagueldi/" target="_blank"><GrInstagram/></a>
    </div>
  )
}

export default HeaderSocials