import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.svg'

import './navbar.css'

const Navbar = () => {
  return (
    <div className='webui__navbar'>
      <div className='webui__navbar-links'>
        <div className='webui__navbar-links_logo'>
          <img src={logo} alt="logo"/>
        </div>
        <div className='webui__navbar-links_container'>
          <ul>
            <li><a href='#home'>Home</a></li>
            <li><a href='#wgpt3'>What is GPT3</a></li>
            <li><a href='#possibility'>Open AI</a></li>
            <li><a href='#features'>Case Studies</a></li>
            <li><a href='#blog'>Library</a></li>
          </ul>
        </div>
      </div>
      <div className='webui__navbar-sign'>
        <ul>
          <li>Sign in</li>
        </ul>
        <button type='button'>Sign up</button>
      </div>
      <div className='webui__navbar-menu'>

      </div>
    </div>
  )
}

export default Navbar