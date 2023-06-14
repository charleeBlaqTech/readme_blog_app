import React, { Fragment,useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "../assets/css/IndexStyles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row, Col, Card, Button} from "react-bootstrap";
import NavBar from '../NavBar';


const BlogDetails = () => {
    const [postShow, setPostShow]                   =useState({});
    const [updateTitle, setUpdateTitle]             = useState('');
    const [updateImage, setUpdateImage]             = useState('');
    const [updateDescription, setUpdateDescription] = useState('');
    const [updateCategory, setUpdateCategory]       = useState("");
    const [displayMainBlog, setDisplayMainBlog]     = useState(true);
    const [displayEditColumn, setDisplayEditColumn] = useState(false);
    const [isUser, setIsUser]                       = useState(null)   
    const [currentUser, setCurrentUser]             = useState(null);               


    const {id}      =useParams();
    const navigate  =useNavigate();
    
    useEffect(()=>{
        fetch(`https://readmeblog.onrender.com/blogs/${id}`,{
            method: "GET",
            withCredentials: true,
            headers:{
              'Access-Control-Allow-Origin':"https://trendspace.onrender.com/",
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Cache': 'no-cache'
          },
          credentials: "include"
        }
        ).then(response=>response.json()).then((data)=>{
            if(data.status===200 || data.status===201){
                setPostShow(data.blog);
                setIsUser(data.owner);
                setCurrentUser(data.user);
              }else if(data.status===400 || data.status===404){
                navigate('/blogs');
              }
        })
    }, [currentUser])
    
    const body= {updateTitle,updateImage, updateDescription, updateCategory };

    const handleUpdateClick=  ()=>{

        const blogUpdate= async ()=>{
          await fetch(`https://readmeblog.onrender.com/blogs/${id}`, {
          method:'POST',
          withCredentials: true,
          headers:{
            'Access-Control-Allow-Origin':"https://trendspace.onrender.com/",
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Cache': 'no-cache'
        },
        credentials: "include",
        body:JSON.stringify(body)

        }).then(response=> response.json()).then((data)=>{
            if(data.status===200 || data.status===201){
                navigate('/blogs/');
              }else if(data.status===400 || data.status===404){
                navigate('/blogs');
              }
        }).catch((error)=>{
          navigate('/blogs');
        });

        }
        blogUpdate();
        
    }

    const handleShowEditClick= ()=>{
        setDisplayEditColumn(!displayEditColumn);
        setDisplayMainBlog(!displayMainBlog);
    }
    const handleDeleteClick=   ()=>{
        const blogDelete= async()=>{
            await fetch(`https://readmeblog.onrender.com/blogs/${id}/delete`,{
            method: "GET",
            withCredentials: true,
            headers:{
              'Access-Control-Allow-Origin':"https://trendspace.onrender.com/",
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Cache': 'no-cache'
          },
            credentials: "include"
            }).then(response=>response.json()).then((data)=>{
                if(data.status===200 || data.status===201){
                    navigate('/blogs');
                  }else if(data.status===400 || data.status===404){
                    navigate('/blogs');
                  }
            })
        }
        blogDelete();
    }


  return (
    <Fragment>
        <NavBar userDetails={currentUser}/>
        {displayMainBlog &&
        <Container className="bg-dark vh-100 pt-5 mb-0" fluid>
            <Container className="pt-5" >
                <Row className="pt-2" >
                    
                    <Col sm={6} xs={12} className="m-auto h-50">
                        <Card className=" h-75" >
                            <Card.Subtitle className='text-center fs-large' >
                              {postShow.category}
                            </Card.Subtitle>
                            <Card.Img variant="top" src={postShow.image} style={{height: "300px"}} />
                            <Card.Body>
                                <Card.Title>{postShow.title}</Card.Title>
                                <Card.Text>
                                    {postShow.description}
                                </Card.Text>
                                
                               {isUser &&
                                <Container className='d-flex justify-content-between align-items-center'>
                                    <Button onClick={handleShowEditClick} className='btn-btn w-100 m-auto'>Edit Blog</Button>
                                    <Button onClick={handleDeleteClick} className='btn-btn w-100 m-auto'>Delete Blog</Button>
                                </Container> 
                               }
                                                              
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">POSTED: {postShow.created}</small>
                            </Card.Footer>
                        </Card>
                    </Col>
                  
                    
                </Row>
            </Container>

        </Container>   
        }   
        {displayEditColumn && 
        <Container className='bg-dark mt-0 pt-5 vh-100' fluid>
            <Container className='pt-5'>
                <Row className="pt-2">
                    
                    <Col sm={6} xs={12} className="m-auto pt-3">
                            <form className='d-flex flex-column text-light h-50 justify-content-center align-items-center'>

                                <input type="text" name="title" onChange={(e)=>{setUpdateTitle(e.target.value)}} defaultValue={postShow.title} placeholder="post title" className='form-control mb-2'required/>
                                <input type="text" name="image" onChange={(e)=>{setUpdateImage(e.target.value)}} defaultValue={postShow.image} placeholder='enter image string' className='form-control mb-2'required/>
                                <textarea name="description" onChange={(e)=>{setUpdateDescription(e.target.value)}} cols="30" rows="6" defaultValue={postShow.description} placeholder='enter description' className='form-control mb-2'required></textarea>
                                <Container className='d-flex justify-content-center align-items-center h-25'>
                                    <label htmlFor="" className='p-0 d-flex justify-content-center align-items-center'>Politics
                                    
                                        <input type="radio" name="category" value="politics" onChange={(e)=>{setUpdateCategory(e.target.value)}} required />
                                    </label>

                                    <label htmlFor="" className='p-0 d-flex justify-content-center align-items-center'>Fashion
                                    
                                        <input type="radio" name="category" value="fashion" onChange={(e)=>{setUpdateCategory(e.target.value)}} required />
                                    </label>

                                    <label htmlFor="" className='p-0 d-flex justify-content-center align-items-center'>Lifestyle
                                    
                                        <input type="radio" name="category" value="lifestyle" onChange={(e)=>{setUpdateCategory(e.target.value)}} required />
                                    </label>

                                    <label htmlFor="" className='p-0 d-flex justify-content-center align-items-center'>Travelling
                                    
                                        <input type="radio" name="category" value="travelling" onChange={(e)=>{setUpdateCategory(e.target.value)}} required />
                                    </label>
                                    <label htmlFor="" className='p-0 d-flex justify-content-center align-items-center'>Sport
                                        <input type="radio" name="category" value="sport" onChange={(e)=>{setUpdateCategory(e.target.value)}} required />
                                    </label>
                                </Container>
                                <Button onClick={handleUpdateClick} className='btn-btn w-100 m-auto'>Update Post</Button>
                            </form>
                    </Col>
                  
                </Row>
            </Container>
        </Container>
        }
    </Fragment>
  )
}

export default BlogDetails