import React, { useState } from 'react'
import { RiMenuUnfoldFill, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.svg'

import './navbar.css'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  const toggleHandler = () => {
    setToggleMenu(toggleMenu => !toggleMenu)
  }

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
        {toggleMenu 
        ? <RiCloseLine color='#fff' size={27} onClick={toggleHandler} /> 
        : <RiMenuUnfoldFill color='#fff' size={27} onClick={toggleHandler} />
        }
        {toggleMenu && (
          <div className='webui__navbar-menu_container scale-up-center'>
            <div className='webui__navbar-menu_container-links'>
              <ul>
                <li><a href='#home'>Home</a></li>
                <li><a href='#wgpt3'>What is GPT3</a></li>
                <li><a href='#possibility'>Open AI</a></li>
                <li><a href='#features'>Case Studies</a></li>
                <li><a href='#blog'>Library</a></li>
              </ul>
              <div className='webui__navbar-menu_container-links-signup'>
                <ul>
                  <li>Sign in</li>
                </ul>
                <button type='button'>Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar