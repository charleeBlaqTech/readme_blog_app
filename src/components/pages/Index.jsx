import React,{Fragment, useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import "../assets/css/IndexStyles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row, Col, Card,Button} from "react-bootstrap";
import NavBar from "../NavBar";


const Index = () => {
  const [postsData, setPostsData] = useState([[],[]]);

  useEffect(()=>{
      fetch('http://localhost:1100/blogs').then(response=>response.json()).then((data)=>{
        setPostsData(data);  
      })
  }, [])

     
  return (
    <Fragment>
        <NavBar/>
        <Container className='landing-blog-section' fluid>
          <Row className='p-5'>
            <Col>
                <h1 className='text-light'>BEST OF THE WEEK</h1>
            </Col>
          </Row>

          <Row>
            <Col sm={8} className="mb-4">
                <Row>
                  {
                    postsData[1].map((item)=>{
                      return(
                        <Col sm={12} xs={12}>
                          <Card>
                            <Card.Subtitle className='text-center p-2'>
                              {item.category.toUpperCase()}
                            </Card.Subtitle>
                          <Card.Img variant="top" src={item.image} alt='img'/>
                          <Card.Body>
                          <Card.Title className='text-center'>
                           {item.title}
                          </Card.Title>
                          <Button className='btn-btn w-100'><Link to={`/blogs/${item._id}`}>Read More</Link></Button>
                          </Card.Body>
                          </Card>

                        </Col>
                      )
                    })
                  }
                </Row>
            </Col>

            <Col sm={4}>
              <Row>
              {
                postsData[0].map((item)=>{

                  return (
                    <Col sm={12} xs={12} className="mb-4">
                      <Card >
                            <Card.Subtitle className='text-center fs-large'>
                              {item.category.toUpperCase()}
                            </Card.Subtitle>
                        <Card.Img variant="top" src={item.image} alt='img'/>
                        <Card.Body>
                          <Card.Title className='text-center'>
                           {item.title}
                          </Card.Title>
                          <Button className='btn-btn w-100'><Link to={`/blogs/${item._id}`}>Read More</Link></Button>
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

export default Index