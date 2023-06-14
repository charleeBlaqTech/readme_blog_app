import React, {useRef, useState} from 'react';
import { NavLink, Link, useNavigate} from 'react-router-dom';
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
// import BlogContext from "./BlogContext";

const NavBar = ({userDetails}) => {
    
    const [category , setCategory]= useState(false);
    
    const navRef= useRef();
    const navigate= useNavigate();
  
    const handleClick= ()=>{
      navRef.current.classList.toggle('showNavMenu');
    }
  
    const categoryHandleClick= ()=>{
      setCategory(!category)
    }

    const categoryListsHandleBothClicks= ()=>{
      handleClick();
      categoryHandleClick();

    }

    const handleLogOutClick= ()=>{
       fetch('http://localhost:1100/logout',{
        method: "GET",
        withCredentials: true,
        headers:{
          'Access-Control-Allow-Origin':"*",
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Cache': 'no-cache'
      },
      credentials: "include"
      }).then(response=>response.json()).then((data)=>{
            if(data.status=== 200){
                navigate('/signin');
            }else if(data.status=== 400){
                navigate('/blogs');
            } 
      })
    }


  return (
    <nav id='navbar'>
        <h2 className='nav-logo'><Link to="/blogs"><FaBlog className='FaBlog'/> ReaDME</Link></h2>
        <div className='hamburger'>
          <FaHamburger className='FaHamburger' onClick={handleClick}/>
        </div>
    
        <ul className='nav-menu' ref={navRef}>
            <li><NavLink to="/blogs" className="active" onClick={handleClick}><FaHome className='FaHome'/>Home</NavLink></li>
            <li><NavLink  className="active"><FaBlogger/>Category<FaDropbox onClick={categoryHandleClick}  fontSize={10}/></NavLink>
                <div className={ category ? 'nav-categories-wrapper showCategories': "nav-categories-wrapper"}>
                      <ul>
                          <li><Link to="/blogs/category/travelling"  onClick={categoryListsHandleBothClicks}><FaPlane/>  Travelling</Link></li>
                          <li><Link to="/blogs/category/fashion"  onClick={categoryListsHandleBothClicks}><FaSuitcase/>  Fashion</Link></li>
                          <li><Link to="/blogs/category/politics"  onClick={categoryListsHandleBothClicks}><FaNewspaper/>  Politics </Link></li>
                          <li><Link to="/blogs/category/lifestyle"  onClick={categoryListsHandleBothClicks}><FaCar/>  Lifestyle </Link></li>
                          <li><Link to="/blogs/category/sport"  onClick={categoryListsHandleBothClicks}><FaFootballBall/>  Sport </Link></li>
                      </ul>
                </div>
            </li>
            <li><NavLink to="/contact" className="active" onClick={handleClick}><FaPhone/>Contact</NavLink></li>
            {userDetails != null ?
            <>
            <li className='text-dark'>{userDetails.username}</li> 
            <li><NavLink to="/logout" className="active" onClick={handleLogOutClick}><FaSign/>logout</NavLink></li> 
            </>
            :
            <>
            <li><NavLink to="/signin" className="active" onClick={handleClick}><FaSign/>SignIn</NavLink></li> 
            <li><NavLink className="active" onClick={handleClick}><FaSign/>SignUp</NavLink></li>
            </> 
            }
            <div className="menu-exit-wrapper">
            <FaTimes className='FaTimes'  onClick={handleClick}/>
            </div> 
        </ul>
    

    </nav>
  )
}

export default NavBar

  
