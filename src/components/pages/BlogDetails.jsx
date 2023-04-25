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
    const [displayMainBlog, setDisplayMainBlog] = useState(true);
    const [displayEditColumn, setDisplayEditColumn] = useState(false);


    const {id}      =useParams();
    const navigate  =useNavigate();
    
    useEffect(()=>{
        fetch(`http://localhost:1100/blogs/${id}`).then(response=>response.json()).then((data)=>{
          setPostShow(data);
        })
    }, [id])

    const body= {updateTitle,updateImage, updateDescription, updateCategory };

    const handleUpdateClick=  ()=>{

        const blogUpdate= async ()=>{
          await fetch(`http://localhost:1100/blogs/${id}`, {
          method:'POST',
          headers:{
            'content-type': "application/json"
          },
          body:JSON.stringify(body)

        }).then(response=> response.json()).catch((error)=>{
          navigate('/blogs');
        });

        }
        blogUpdate();
        navigate('/blogs');
    }

    const handleShowEditClick= ()=>{
        setDisplayEditColumn(!displayEditColumn);
        setDisplayMainBlog(!displayMainBlog);
    }
    const handleDeleteClick=   ()=>{
        const blogDelete= async()=>{
            await fetch(`http://localhost:1100/blogs/${id}/delete`).then(response=>response.json());
        }
        blogDelete();
        navigate('/blogs')
    }


  return (
    <Fragment>
        <NavBar/>
        <Container className="bg-dark vh-100 pt-5" fluid>
            <Container className="pt-5" >
                <Row className="pt-2" >
                    {displayMainBlog &&
                    <Col sm={8} xs={12} className="m-auto h-75">
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
                                <Container className='d-flex justify-content-between align-items-center'>
                                    <Button onClick={handleShowEditClick} className='btn-btn w-100 m-auto'>Edit Blog</Button>
                                    <Button onClick={handleDeleteClick} className='btn-btn w-100 m-auto'>Delete Blog</Button>
                                </Container>                               
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">POSTED: {postShow.created}</small>
                            </Card.Footer>
                        </Card>
                    </Col>
                    }
                    {displayEditColumn &&
                    <Col sm={8} xs={12} className="m-auto">
                        <form className='d-flex flex-column text-light'>

                            <input type="text" name="title" onChange={(e)=>{setUpdateTitle(e.target.value)}} defaultValue={postShow.title} placeholder="post title" className='form-control mb-2'required/>
                            <input type="text" name="image" onChange={(e)=>{setUpdateImage(e.target.value)}} defaultValue={postShow.image} placeholder='enter image string' className='form-control mb-2'required/>
                            <textarea name="description" onChange={(e)=>{setUpdateDescription(e.target.value)}} cols="30" rows="10" defaultValue={postShow.description} placeholder='enter description' className='form-control mb-2'required></textarea>
                            <Container className='d-flex justify-content-between align-items-center'>
                                <label htmlFor="">Politics
                                
                                    <input type="radio" name="category" value="politics" onChange={(e)=>{setUpdateCategory(e.target.value)}} required />
                                </label>

                                <label htmlFor="">Fashion
                                
                                    <input type="radio" name="category" value="fashion" onChange={(e)=>{setUpdateCategory(e.target.value)}} required />
                                </label>

                                <label htmlFor="">Lifestyle
                                
                                    <input type="radio" name="category" value="lifestyle" onChange={(e)=>{setUpdateCategory(e.target.value)}} required />
                                </label>

                                <label htmlFor="">Travelling
                                
                                    <input type="radio" name="category" value="travelling" onChange={(e)=>{setUpdateCategory(e.target.value)}} required />
                                </label>
                                <label htmlFor="">Sport
                                    <input type="radio" name="category" value="sport" onChange={(e)=>{setUpdateCategory(e.target.value)}} required />
                                </label>
                            </Container>
                            <Button onClick={handleUpdateClick} className='btn-btn w-100 m-auto'>Update Post</Button>
                        </form>
                    </Col>
                    }
                </Row>
            </Container>

        </Container>
    </Fragment>
  )
}

export default BlogDetails