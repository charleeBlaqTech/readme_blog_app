import React,{Fragment, useEffect,useState} from 'react';
import { useNavigate} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row, Col} from "react-bootstrap";
import "../assets/css/ContactStyles.css";
import {FaMap, FaPhone, FaEnvelope} from "react-icons/fa"
import NavBar from "../NavBar";

const Contact = () => {
    const [currentUser, setCurrentUser]= useState(null);
    const navigate= useNavigate();

    useEffect(()=>{
        fetch('https://readmeblog.onrender.com/contact',{
          method: "GET",
          withCredentials: true,
          headers:{
            // 'Access-Control-Allow-Origin':"http://localhost:3000",
            'Access-Control-Allow-Origin':"https://trendspace.onrender.com",
            'Access-Control-Allow-Credentials': 'true',
            'Content-Type': 'application/json',    
        },
        credentials: "include"
        }).then(response=>response.json()).then((data)=>{
              if(data.status === 200){
                 setCurrentUser(data.user);
              }else if(data.status === 400 || data.status=== 404){
                  navigate('/signin');
              } 
        })
    }, [])
  
  return (
    <Fragment>
    <NavBar  userDetails={currentUser}/>
    <Container className="bg-dark pt-5 d-flex flex-column justify-content-evenly align-items-center" style={contactContainerStyles} fluid>
        <Row className="bg-dark text-light text-center pt-3">
            <Col xs={12}>
                <h2 className="title">contact us</h2>
                <h2 className="sub-title">have any question?</h2>
            </Col>
        </Row>
        <Row className=" p-1">

            <Col xs={12} sm={6} className="text-light p-2 m-auto">
                   <Row>
                        <Col xs={12}>
                            <h3> <FaMap className='contact-info-items-icon bg-dark'/> Address</h3>
                        </Col>
                        <Col xs={12}>
                            <p>8, Ekere Street comfort Oboh,kirikiri town, lagos</p>
                        </Col>
                   </Row>
                   <Row>
                        <Col xs={12}>
                            <h3><FaPhone className='contact-info-items-icon bg-dark'/> Call Us</h3>
                        </Col>

                        <Col xs={12}>
                            <p>+234 8101605165..</p>
                        </Col>
                   </Row>
                   <Row>
                        <Col xs={12}>
                            <h3><FaEnvelope className='contact-info-items-icon bg-dark'/> Email Us</h3>
                        </Col>

                        <Col xs={12}>
                            <p>dauducharles1994@gmail.com</p>
                        </Col>
                   </Row>
                  
            </Col>
                
            <Col xs={12} sm={6} className=" p-1 m-auto">
                        <form  className="d-flex flex-column justify-content-center align-items-center w-100">
                            
                            <input type="text" placeholder="Name"  style={inputStyles} className="w-100 mb-1 rounded-2 text-center " name="name" required/>
                            
                            <input type="text" placeholder="Email" style={inputStyles} className="w-100 mb-1 rounded-2 text-center " name="email" required/>
                            
                            <input type="text" placeholder="Phone" style={inputStyles} className="w-100 mb-1 rounded-2 text-center " name="phone" required/>
                           
                            <textarea placeholder="Message" style={inputStyles} className="w-100 mb-1 rounded-2 text-center"
                            name="message"
                            ></textarea>

                            <div className="btn-wrap">
                                <button type="submit" style={btnStyles} className="contact-submit"> Send Message </button>
                            </div>
                        </form>
            </Col>

        </Row>

    </Container>     

           
    </Fragment>
  )
}

const contactContainerStyles={
    height:"100vh",

}
const inputStyles={
    height:"45px",

}
const btnStyles={
    height:"45px",
    backgroundColor: "white",
    color: "#000"

}

export default Contact