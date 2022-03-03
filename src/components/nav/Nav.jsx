import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';
import {AiOutlineExperiment} from 'react-icons/ai';
import {BiMessageSquareDots} from 'react-icons/bi';

function Nav() {
  return (
    <nav> 
      <a href="#" className='active'><AiOutlineHome/></a>
      <a href="#about"><AiOutlineUser/></a>
      <a href="#education"><BiBook/></a>
      <a href="#experience"><AiOutlineExperiment/></a>
      <a href="#contact"><BiMessageSquareDots/></a>
    </nav>
  )
}

export default Nav