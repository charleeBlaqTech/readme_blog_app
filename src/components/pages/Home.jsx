import React,{Fragment} from 'react';
import { Link } from 'react-router-dom';
import "../assets/css/HomeStyles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row, Col, Card, Button} from "react-bootstrap";
// import blogImg1 from '../assets/images/product5.jpg'
import NavBar from "../NavBar";


const Home = () => {

// const cardStyle={
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: 'center',
//   alignItems: 'center',
//   backgroundColor:"red",
// }

     
  return (
    <Fragment>
        <NavBar/>
        <Container className='landing-blog-section' fluid>
          <Row>
            <Col sm={2} className=''>
            
            </Col>
            <Col sm={10} className=''>
              <Row>

                <Col sm={4} xs={12} className="mb-4">
                    <Card >
                      <Card.Img variant="top" src="https://media.istockphoto.com/id/1462664485/photo/top-view-woman-and-phone-on-exercise-mat-for-social-media-mobile-app-and-reading-fitness-blog.jpg?b=1&s=170667a&w=0&k=20&c=RY7UtuFOFjhNQpwPPoi5gZTuPf-UPrGqBVhIoJW-e6k=" alt='img'/>
                      <Card.Body>
                        <Card.Title className='text-center'>
                          great development in Nigeria Politics
                        </Card.Title>
                        <Card.Text className='text-center'>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate.
                        </Card.Text>
                        <Button className='btn-btn w-100'><Link to="/blog">Read More</Link></Button>
                      </Card.Body>
                    </Card>
                </Col>

                <Col sm={4} xs={12} className="mb-4">
                    <Card >
                      <Card.Img variant="top"  src='https://media.istockphoto.com/id/855341578/photo/creativity-checked.jpg?b=1&s=170667a&w=0&k=20&c=NHeyPIHEWmztch-Hb9wVZ1VNwIdQvOFsayk8HTz4XCg=' alt='img'/>
                      <Card.Body>
                        <Card.Title className='text-center' >
                          great development in Nigeria Politics
                        </Card.Title>
                        <Card.Text className='text-center'>
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate.
                        </Card.Text>
                        <Button  className='btn-btn w-100'><Link to="/blog">Read More</Link></Button>
                      </Card.Body>
                    </Card>
                </Col>

                <Col sm={4} xs={12} className="mb-4">
                    <Card>
                      <Card.Img variant="top" src='https://media.istockphoto.com/id/855341578/photo/creativity-checked.jpg?b=1&s=170667a&w=0&k=20&c=NHeyPIHEWmztch-Hb9wVZ1VNwIdQvOFsayk8HTz4XCg=' alt='img'/>
                      <Card.Body>
                        <Card.Title className='text-center'>
                          great development in Nigeria Politics
                        </Card.Title>
                        <Card.Text className='text-center'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate.
                        </Card.Text>
                        <Button  className='btn-btn w-100'><Link to="/blog">Read More</Link></Button>
                      </Card.Body>           
                    </Card>
                </Col>

              </Row>
            </Col>
          </Row>
        </Container>
        
    </Fragment>
  )
}

export default Home