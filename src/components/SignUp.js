import React, { Fragment, useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./SignUpStyles.css"
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
// import BlogContext from './BlogContext';



const SignUp = () => {
    // const { setIsLoggedIn} = useContext(BlogContext);
    const [newUserFullName, setNewUserFullName]             = useState('');
    const [newUserUserName, setNewUserUserName]             = useState('');
    const [newUserPassword, setNewUserPassword]             = useState('');
    const [newUserEmail, setNewUserEmail]                   = useState('');
    const [statusMessage, setStatusMessage]                 = useState('');
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

            await fetch('https://readmeblog.onrender.com/signup', {
                method:'POST',
                headers:{
                    'Access-Control-Allow-Origin':"https://trendspace.onrender.com",
                    'Access-Control-Allow-Credentials': 'true',
                    'Content-Type': 'application/json',    
                },
                credentials: "include",
                body:JSON.stringify(body)
      
              }).then(response=>
              response.json()
            ).then((data)=>{ 
                setStatusMessage(data.message) 
                if(data.status === 201 || data.status === 200){
                    navigate("/signin");
                }else if(data.status === 400 || data.status === 404){
                    navigate('/signup');
                }
            }).catch((error)=>{
                if(error.status === 400 || error.status === 404){
                    navigate('/signin');
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
                    <div className='status-message text-center text-danger'>
                        <h6>{statusMessage}</h6>
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