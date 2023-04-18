import React, { Fragment,useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import "../assets/css/HomeStyles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row, Col, Card, Button} from "react-bootstrap";
import NavBar from '../NavBar';


const BlogDetails = () => {
    const [postShow, setPostShow] = useState("");
    const {id} =useParams();

    useEffect(()=>{
        fetch(`/posts/${id}`).then(response=>response.json()).then((data)=>{
          setPostShow(data);
        })
    }, [id])
  return (
    <Fragment>
        <NavBar/>
        <Container className="pt-5 bg-dark" fluid>
            <Container className="pt-5" >
                <Row className="pt-5" >
                    <Col sm={8} xs={12}>
                        <Card>
                            <Card.Img variant="top" src="https://media.istockphoto.com/id/1462664485/photo/top-view-woman-and-phone-on-exercise-mat-for-social-media-mobile-app-and-reading-fitness-blog.jpg?b=1&s=170667a&w=0&k=20&c=RY7UtuFOFjhNQpwPPoi5gZTuPf-UPrGqBVhIoJW-e6k=" />
                            <Card.Body>
                                <Card.Title>whats is wrong {postShow}</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This card has even longer content than the
                                    first to show that equal height action.
                                </Card.Text>
                                <Button className='m-auto'>Edit</Button>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>

            </Container>

        </Container>
    </Fragment>
  )
}

export default BlogDetails