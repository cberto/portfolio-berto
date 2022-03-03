import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';



const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/camila-bertolani/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/cberto" target="_blank"><BsGithub /></a>
        <a href="https://www.instagram.com/camibertolani/" target="_blank"><BsInstagram /></a>
    </div>
  )
}

export default HeaderSocial