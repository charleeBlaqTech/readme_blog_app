import React, {useRef, useState} from 'react';
import { NavLink, Link } from 'react-router-dom';
import {FaBlog, 
        FaHome, 
        FaHamburger,
        FaDropbox,
        FaTimes,
        FaPhone,
        FaSign,
        FaBlogger,
        FaPlane,
        FaFootballBall,
        FaSuitcase,
        FaNewspaper,
        FaCar,
        
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
        <h2 className='nav-logo'><Link to="/blogs"><FaBlog className='FaBlog'/> ReaDME</Link></h2>
        <div className='hamburger'>
          <FaHamburger className='FaHamburger' onClick={handleClick}/>
        </div>
    
        <ul className='nav-menu' ref={navRef}>
            <li><NavLink to="/blogs" activeClassName="active" onClick={handleClick}><FaHome className='FaHome'/>Home</NavLink></li>
            <li><NavLink  activeClassName="active"><FaBlogger/>Category<FaDropbox onClick={categoryHandleClick}  fontSize={10}/></NavLink>
                <div className={ category ? 'nav-categories-wrapper showCategories': "nav-categories-wrapper"}>
                      <ul>
                          <li><Link to="/blogs/category/travelling"><FaPlane/>  Travelling</Link></li>
                          <li><Link to="/blogs/category/fashion"><FaSuitcase/>  Fashion</Link></li>
                          <li><Link to="/blogs/category/politics"><FaNewspaper/>  Politics </Link></li>
                          <li><Link to="/blogs/category/lifestyle"><FaCar/>  Lifestyle </Link></li>
                          <li><Link to="/blogs/category/sport"><FaFootballBall/>  Sport </Link></li>
                      </ul>
                </div>
            </li>
            <li><NavLink to="/contact" activeClassName="active" onClick={handleClick}><FaPhone/>Contact</NavLink></li>
            <li><NavLink to="/signin" activeClassName="active" onClick={handleClick}><FaSign/>SignIn</NavLink></li> 
            <li><NavLink to="/signup" activeClassName="active" onClick={handleClick}><FaSign/>SignUp</NavLink></li> 
            <div className="menu-exit-wrapper">
            <FaTimes className='FaTimes'  onClick={handleClick}/>
            </div> 
        </ul>
    

    </nav>
  )
}

export default NavBar

  
