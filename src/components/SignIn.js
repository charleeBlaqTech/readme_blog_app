
import React, {Fragment, useContext, useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './SignInStyles.css'
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useNavigate} from 'react-router-dom';
import BlogContext from './BlogContext';

const SignIn = () => {

    const { setIsLoggedIn} = useContext(BlogContext);

    const [currentUserEmail, setCurrentUserEmail]             = useState('');
    const [currentUserPassword,setCurrentUserPassword]        = useState('');
    const [statusMessage, setStatusMessage]                   = useState('');
    const navigate= useNavigate();
   



    //sending a login post request using fetch to the server backend endpoint
    const handleLoginClick= (e)=>{
        e.preventDefault();

        const loginThisUser= async ()=>{
            await fetch('https://readmeblog.onrender.com/login', {
                method:'POST',
                crossDomain: true,
                withCredentials: true,
                headers:{
                    'Access-Control-Allow-Origin':"*",
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Cache': 'no-cache'
                },
                credentials: "include",
                body:JSON.stringify({
                    email: currentUserEmail,
                    password: currentUserPassword
                })
      
              }).then(response=>
                response.json()
                
            ).then((data)=>{   
                setStatusMessage(data.message) 
                if(data.status === 200){
                    navigate(data.redirect);
                    setIsLoggedIn(true)
                }else if(data.status === 400 || data.status === 404){
                    navigate('/signin');
                }
            }).catch((error)=>{
                if(error.status === 400 || error.status === 404){
                    navigate('/signin');
                }
                
            })
        }

        loginThisUser();
       
    }

    //Handling the login page input datas
    const handleInputValue =(e)=>{
        e.preventDefault();
       if( e.target.name === "email"){
            setCurrentUserEmail(e.target.value);
       }else if( e.target.name === "password"){
            setCurrentUserPassword( e.target.value);
       }
    }
  return (
    <Fragment>
        <Container>
            <Row className='mt-5'>
                <Col sm={5} xs={12} className='mx-auto mt-5'>
                    <div className='heading'>
                        <h4>Wellcome To ReadMe Blog Platform</h4>
                    </div>
                    <div className='status-message text-center text-danger'>
                        <h6>{statusMessage}</h6>
                    </div>
                    <div className='form-wrapper'>
                        <form>
                            <input type='email' onChange={handleInputValue} name='email' value={currentUserEmail} placeholder='Enter Your Email' required/>
                            <input type='password' onChange={handleInputValue} name='password' value={currentUserPassword} placeholder='Enter Your password' required/>
                            <button onClick={handleLoginClick}>Login</button>
                            <Link to='/signup'>You dont have an account? SignUp...</Link>
                        </form>
                    </div>
                </Col>
            </Row>
        </Container>
    </Fragment>
  )
}

export default SignIn