import React,{Fragment, useState, useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from '../NavBar';
import {Row, Col, Container} from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const BlogNew = () => {
  const [title, setTitle]               = useState('');
  const [image, setImage]               = useState('');
  const [description, setDescription]   = useState('');
  const [category, setCategory]         = useState('');
  const [currentUser, setCurrentUser]   = useState(null); 
  const navigate= useNavigate();

  useEffect(()=>{
    fetch('https://readmeblog.onrender.com/blogs/new',{
      method: "GET",
      withCredentials: true,
      headers:{
         // 'Access-Control-Allow-Origin':"http://localhost:3000",
        'Access-Control-Allow-Origin':"https://trendspace.onrender.com",
        'Access-Control-Allow-Credentials': 'true',
        'Content-Type': 'application/json', 
        'Accept': 'application/json',
        'Cache': 'no-cache'
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
  

  const body= {
    title,
    image,
    description,
    category
  }

  const handleSubmitClick =(e)=>{
    e.preventDefault()

        const sendData= async ()=>{
          await fetch('http://localhost:1100/blogs', {
            method: "POST",
            headers:{
              'Access-Control-Allow-Origin':"http://localhost:3000",
              // 'Access-Control-Allow-Origin':"https://trendspace.onrender.com",
              'Access-Control-Allow-Credentials': 'true',
              'Content-Type': 'application/json',    
          },
          credentials: "include",
          body:JSON.stringify(body)

        }).then(response=> response.json()).then((data)=>{
          if(data.status===200 || data.status===201){
              navigate('/blogs')
          }else if(data.status===400 || data.status===404){
              navigate('/blogs/new')
          }
           
        })

        }
        sendData();
  }

  return (
    <Fragment>
      <NavBar userDetails={currentUser} />
      
      <Container className='pt-5 vh-100 bg-dark' fluid>
        <Row className='h-70 pt-4'>
          <Col sm={6} xs={12} className='mx-auto mt-3 pt-5'>
              <form  className='d-flex h-75 flex-column justify-content-center align-items-center text-light'>
                  <input type="text" name="title" onChange={(e)=>{setTitle(e.target.value)}} placeholder="post title" className='form-control mb-1'required/>
                  <input type="text" name="image" onChange={(e)=>{setImage(e.target.value)}} placeholder='enter image string' className='form-control mb-1'required/>
                  <textarea name="description" onChange={(e)=>{setDescription(e.target.value)}} cols="30" rows="10" placeholder='enter description' className='form-control mb-1'required></textarea>
                  <Container className='d-flex mt-1 justify-content-center align-items-center '>

                      <label className='p-0 d-flex justify-content-center align-items-center'>Politics
                        <input type="radio" name="category" onChange={(e)=>{setCategory(e.target.value)}} value="politics" id="" required/>
                      </label>
          
                      <label className='p-0 d-flex justify-content-center align-items-center'>Fashion
                        <input type="radio" name="category" onChange={(e)=>{setCategory(e.target.value)}} value="fashion" id="" required/>
                      </label>
                      
                      <label className='p-0 d-flex justify-content-center align-items-center'>Lifestyle
                        <input type="radio" name="category" onChange={(e)=>{setCategory(e.target.value)}} value="lifestyle" id="" required/>
                      </label>
                      
                      <label className='p-0 d-flex justify-content-center align-items-center'>Travelling
                        <input type="radio" name="category" onChange={(e)=>{setCategory(e.target.value)}} value="travelling" id="" required/>
                      </label>
                      <label className='p-0 d-flex justify-content-center align-items-center'>Sport
                        <input type="radio" name="category" onChange={(e)=>{setCategory(e.target.value)}} value="sport" id="" required/>
                      </label>
                  </Container>
                  <button onClick={handleSubmitClick} className='btn btn-light w-50 mx-auto'>create</button>
              </form>
          </Col>
        </Row>
      </Container>
    
    </Fragment>
   
  )
}

export default BlogNew