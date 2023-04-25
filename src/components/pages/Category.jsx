import React, { Fragment, useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from '../NavBar';
import { Container, Card, Button , Row, Col} from 'react-bootstrap'
import { useParams, Link } from 'react-router-dom';

const Category = () => {
  const [categoryPostsData, setCategoryPostsData] =useState([]);
  const {name}      =useParams();

  useEffect(()=>{
    fetch(`http://localhost:1100/blogs/category/${name}`).then(response=>response.json()).then((data)=>{
      setCategoryPostsData(data); 
    })
}, [name])


  return (
    <Fragment>
      <NavBar/>
      <Container className="pt-5 bg-dark vh-100" fluid>
        <Row className='p-5'>
          <Col>
              <h1 className='text-light'>BEST OF THE WEEK ON {name.toUpperCase()}</h1>
          </Col>
        </Row>
        <Row> 
          <Col sm={12} xs={12}>
              <Row>
              {
                categoryPostsData.map((item)=>{

                  return (

                    <Col sm={4} xs={12} key={item._id} className="mb-4">
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

export default Category