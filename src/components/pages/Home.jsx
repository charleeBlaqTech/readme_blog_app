import React,{Fragment, useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import "../assets/css/HomeStyles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row, Col, Card, Button} from "react-bootstrap";
// import blogImg1 from '../assets/images/product5.jpg'
import NavBar from "../NavBar";


const Home = () => {
  const [postsData, setPostsData] = useState([]);

  useEffect(()=>{
      fetch('/posts').then(response=>response.json()).then((data)=>{
        setPostsData(data);
      })
  }, [])

     
  return (
    <Fragment>
        <NavBar/>
        <Container className='landing-blog-section' fluid>
          <Row>
            <Col sm={2} className=''>
            
            </Col>
            <Col sm={10} className=''>
              <Row>
              {
                postsData.map((item)=>{

                  return (
                    <Col sm={4} xs={12} className="mb-4">
                      <Card >
                        <Card.Img variant="top" src={item.image} alt='img'/>
                        <Card.Body>
                          <Card.Title className='text-center'>
                           {item.title}
                          </Card.Title>
                          <Card.Text className='text-center'>
                            {item.description}
                          </Card.Text>
                          <Button className='btn-btn w-100'><Link to={`/posts/${item.id}`}>Read More</Link></Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  )

                })  
              }


              </Row>
            </Col>
          </Row>
        </Container>
        
    </Fragment>
  )
}

export default Home