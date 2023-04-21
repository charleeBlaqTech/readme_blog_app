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
        <Container className="pt-5 bg-dark h-vh" fluid>
            <Container className="pt-5" >
                <Row className="pt-5" >
                    <Col sm={7} xs={12} className="m-auto">
                        <Card>
                            <Card.Subtitle className='text-center fs-large' >
                              {postShow.category}
                            </Card.Subtitle>
                            <Card.Img variant="top" src={postShow.image} />
                            <Card.Body>
                                <Card.Title>{postShow.title}</Card.Title>
                                <Card.Text>
                                    {postShow.description}
                                </Card.Text>

                                <Button onClick={handleShowEditClick} className='btn-btn w-100 m-auto'>Edit Blog</Button>
                                <Button onClick={handleDeleteClick} className='btn-btn w-100 m-auto'>Delete Blog</Button>
                                
                                
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">{postShow.created}</small>
                            </Card.Footer>
                        </Card>
                    </Col>
                    { displayEditColumn &&
                    <Col sm={4} xs={12}>
                        <form className='d-flex flex-column text-light'>

                            <input type="text" name="title" onChange={(e)=>{setUpdateTitle(e.target.value)}} defaultValue={postShow.title} placeholder="post title" className='form-control mb-2'/>
                            <input type="text" name="image" onChange={(e)=>{setUpdateImage(e.target.value)}} defaultValue={postShow.image} placeholder='enter image string' className='form-control mb-2'/>
                            <textarea name="description" onChange={(e)=>{setUpdateDescription(e.target.value)}} cols="30" rows="10" defaultValue={postShow.description} placeholder='enter description' className='form-control mb-2'></textarea>
                            <label htmlFor="">Politics
                                <br />
                                <input type="radio" name="category" value="politics" onChange={(e)=>{setUpdateCategory(e.target.value)}} required />
                            </label>

                            <label htmlFor="">Fashion
                                <br />
                                <input type="radio" name="category" value="fashion" onChange={(e)=>{setUpdateCategory(e.target.value)}} required />
                            </label>

                            <label htmlFor="">Lifestyle
                                <br />
                                <input type="radio" name="category" value="lifestyle" onChange={(e)=>{setUpdateCategory(e.target.value)}} required />
                            </label>

                            <label htmlFor="">Travelling
                                <br />
                                <input type="radio" name="category" value="travelling" onChange={(e)=>{setUpdateCategory(e.target.value)}} required />
                            </label>

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