import React, {useRef} from 'react';
import { NavLink, Link } from 'react-router-dom';
import {FaBlog, FaHome, FaHamburger} from "react-icons/fa"
import "./NavBarStyles.css";

const NavBar = () => {


    const navRef= useRef();
  
    const handleClick= ()=>{
      navRef.current.classList.toggle('showNavMenu');
    }

  return (
    <nav id='navbar'>
        <h2 className='nav-logo'><Link to="/">{<FaBlog/>} ReaDME</Link></h2>
        <div className='hamburger'>
          {<FaHamburger onClick={handleClick}/>} 
        </div>
    
        <ul className='nav-menu' ref={navRef}>
            <li><NavLink to="/" activeClassName="active" onClick={handleClick}>{<FaHome/>}Home</NavLink></li>
            <li><NavLink to="/pet" activeClassName="active" onClick={handleClick}>Pets</NavLink></li>
            <li><NavLink to="/category" activeClassName="active" onClick={handleClick}>Category</NavLink></li>
            <li><NavLink to="/contact" activeClassName="active" onClick={handleClick}>Contact</NavLink></li>
            <li><NavLink to="/signup" activeClassName="active" onClick={handleClick}>SignUp</NavLink></li> 
            <div className="menu-exit-wrapper">
            <i className="fas fa-times" onClick={handleClick}></i>
            </div> 
        </ul>
    

    </nav>
  )
}

export default NavBar

  
