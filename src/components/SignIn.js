
import React, {Fragment, useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './SignInStyles.css'
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useNavigate} from 'react-router-dom';

const SignIn = () => {

    const [currentUserEmail, setCurrentUserEmail]             = useState('');
    const [currentUserPassword,setCurrentUserPassword]        = useState('');
    const navigate= useNavigate();



    //sending a login post request using fetch to the server backend endpoint
    const handleLoginClick= (e)=>{
        e.preventDefault();

        const loginThisUser= async ()=>{
            await fetch('http://localhost:1100/login', {
                method:'POST',
                crossDomain: true,
                headers:{
                  'content-type': "application/json",
                  withCredentials: true,
                  Accept: "application/json",
                  'Access-Control-Allow-origin': "*"
                },
                body:JSON.stringify({
                    email: currentUserEmail,
                    password: currentUserPassword
                })
      
              }).then(response=>
                response.json()
                
            ).then((data)=>{
                console.log(data)
                if(data.status === 200){
                    navigate('/blogs');
                }else{
                    navigate('/signin');
                }
            })
        }

        loginThisUser();
        // navigate('/signin')
       
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