import React, {useRef, useState} from 'react';
import { NavLink, Link } from 'react-router-dom';
import {FaBlog, 
        FaHome, 
        FaHamburger,
        FaDropbox,
        FaBabyCarriage,
        FaDog,
        FaTimes
} from "react-icons/fa"
import "./NavBarStyles.css";

const NavBar = () => {

  const [category , setCategory]= useState(false)
    const navRef= useRef();
  
    const handleClick= ()=>{
      navRef.current.classList.toggle('showNavMenu');
    }
  
    const categoryHandleClick= ()=>{
      setCategory(!category)
    }

  return (
    <nav id='navbar'>
        <h2 className='nav-logo'><Link to="/"><FaBlog className='FaBlog'/> ReaDME</Link></h2>
        <div className='hamburger'>
          <FaHamburger className='FaHamburger' onClick={handleClick}/>
        </div>
    
        <ul className='nav-menu' ref={navRef}>
            <li><NavLink to="/" activeClassName="active" onClick={handleClick}><FaHome className='FaHome'/>Home</NavLink></li>
            <li><NavLink  activeClassName="active">Category<FaDropbox onClick={categoryHandleClick}  fontSize={10}/></NavLink>
                <div className={ category ? 'nav-categories-wrapper showCategories': "nav-categories-wrapper"}>
                      <ul>
                          <li><Link><FaBabyCarriage/>  Travelling</Link></li>
                          <li><Link><FaBabyCarriage/>  Fashion</Link></li>
                          <li><Link><FaBabyCarriage/>  Politics </Link></li>
                          <li><Link><FaBabyCarriage/>  Lifestyle </Link></li>
                          <li><Link><FaDog/>  Pets</Link></li>
                      </ul>
                </div>
            </li>
            <li><NavLink to="/contact" activeClassName="active" onClick={handleClick}>Contact</NavLink></li>
            <li><NavLink to="/signup" activeClassName="active" onClick={handleClick}>SignUp</NavLink></li> 
            <div className="menu-exit-wrapper">
            <FaTimes className='FaTimes'  onClick={handleClick}/>
            </div> 
        </ul>
    

    </nav>
  )
}

export default NavBar

  
