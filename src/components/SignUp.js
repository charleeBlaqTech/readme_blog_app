import React, { Fragment, useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./SignUpStyles.css"
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';



const SignUp = () => {

    const [newUserFullName, setNewUserFullName]             = useState('');
    const [newUserUserName, setNewUserUserName]             = useState('');
    const [newUserPassword, setNewUserPassword]             = useState('');
    const [newUserEmail, setNewUserEmail]                   = useState('');
    const navigate= useNavigate();



    const body={
        fullname: newUserFullName,
        username: newUserUserName,
        password: newUserPassword,
        email: newUserEmail
    }

    const handleSignUpClick= (e)=>{
        e.preventDefault();
        const registerThisUser= async ()=>{

            await fetch('http://localhost:1100/signup', {
                method:'POST',
                headers:{
                  'content-type': "application/json",
                //   withCredentials: true,
                },
                body:JSON.stringify(body)
      
              }).then(response=>
              response.json()
            ).then((data)=>{   
                if(data.status === "user created"){
                    navigate('/blogs');
                }else{
                    navigate('/signup');
                }
            })
        }
    
        registerThisUser();
    }


    const handleInputValue =(e)=>{
        e.preventDefault();
       if( e.target.name === "fullname"){
            setNewUserFullName(e.target.value);
       }else if( e.target.name === "username"){
            setNewUserUserName( e.target.value);
       }else if( e.target.name === "email"){
            setNewUserEmail( e.target.value);
        }else if( e.target.name === "password"){
            setNewUserPassword( e.target.value);
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
                            <input type='text' name='fullname' onChange={handleInputValue} value={newUserFullName} placeholder='Enter Your Fullname' required/>
                            <input type='text' name='username' onChange={handleInputValue} value={newUserUserName} placeholder='Enter Your Username' required/>
                            <input type='email' name='email' onChange={handleInputValue} value={newUserEmail} placeholder='Enter Your Email' required/>
                            <input type='password' name='password' onChange={handleInputValue} value={newUserPassword} placeholder='Enter Your password' required/>
                            <button onClick={handleSignUpClick}>Register</button>
                            <Link to='/signin'>Already have an account? SignIn...</Link>
                        </form>
                    </div>
                </Col>
            </Row>
        </Container>
    </Fragment>
  )
}

export default SignUp