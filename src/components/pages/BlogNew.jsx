import React,{Fragment, useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from '../NavBar';
import {Card,Row, Col, Container} from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const BlogNew = () => {
  const [title, setTitle]             = useState('');
  const [image, setImage]             = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory]       = useState('');

  const navigate= useNavigate();

  const body= {
    title,
    image,
    description,
    category
  }

  const handleSubmitClick =()=>{
        const sendData= async ()=>{

          await fetch('http://localhost:1100/blogs', {
          method:'POST',
          headers:{
            'content-type': "application/json"
          },
          body:JSON.stringify(body)

        }).then(response=> response.json()).then(data=>console.log(data) );

        }
        sendData();
        navigate('/blogs')
  }

  return (
    <Fragment>
      <NavBar/>
      <Container className='pt-5 vh-100 bg-dark' fluid>
        <Row className='h-100 pt-2'>
          <Col sm={6} xs={12} className='mx-auto'>
            <Card className=' bg-dark pt-5'>
              <form  className='d-flex flex-column text-light'>
                  <input type="text" name="title" onChange={(e)=>{setTitle(e.target.value)}} placeholder="post title" className='form-control mb-2'/>
                  <input type="text" name="image" onChange={(e)=>{setImage(e.target.value)}} placeholder='enter image string' className='form-control mb-2'/>
                  <textarea name="description" onChange={(e)=>{setDescription(e.target.value)}} cols="30" rows="10" placeholder='enter description' className='form-control mb-2'></textarea>
                  <Container className='d-flex justify-content-between align-items-center'>
                      <label htmlFor="">Politics
                        
                        <input type="radio" name="category" onChange={(e)=>{setCategory(e.target.value)}} value="politics" id="" />
                      </label>
          
                      <label htmlFor="">Fashion
                        
                        <input type="radio" name="category" onChange={(e)=>{setCategory(e.target.value)}} value="fashion" id="" />
                      </label>
                      
                      <label htmlFor="">Lifestyle
                        
                        <input type="radio" name="category" onChange={(e)=>{setCategory(e.target.value)}} value="lifestyle" id="" />
                      </label>
                      
                      <label htmlFor="">Travelling
                        
                        <input type="radio" name="category" onChange={(e)=>{setCategory(e.target.value)}} value="travelling" id="" />
                      </label>
                      <label htmlFor="">Sport
                        <input type="radio" name="category" onChange={(e)=>{setCategory(e.target.value)}} value="sport" id="" />
                      </label>
                  </Container>
                 
                  
                  <button onClick={handleSubmitClick} className='btn btn-light w-100 mx-auto mt-2'>create</button>
              </form>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
   
  )
}

export default BlogNew