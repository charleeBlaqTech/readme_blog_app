import React,{Fragment, useEffect,useState} from 'react';
import { Link, useNavigate} from 'react-router-dom';
import "../assets/css/IndexStyles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row, Col, Card,Button} from "react-bootstrap";
import NavBar from "../NavBar";
// import BlogContext from '../BlogContext'


const Index = () => {
  const [postsData, setPostsData] = useState([[],[],[],[]]);
  const [currentUser, setCurrentUser]= useState(null);
  const navigate= useNavigate();

  useEffect(()=>{
      fetch('https://readmeblog.onrender.com/blogs',{
        method: "GET",
        withCredentials:true,
        headers:{
          // 'Access-Control-Allow-Origin':"*",
          // 'Access-Control-Allow-Origin':"http://localhost:3000",
          'Access-Control-Allow-Origin':"https://trendspace.onrender.com",
          'Access-Control-Allow-Credentials': 'true',
          'Content-Type': 'application/json',    
      },
      credentials: "include"
      }).then(response=>response.json()).then((data)=>{
        console.log(data)
            if(data.blogs && data.status === 200){
              setPostsData(data.blogs);
              setCurrentUser(data.user);
            }else if(data.status === 400 || data.status=== 404){
                navigate('/signin');
            } 
      })
  }, [])

    
  return (
    
    <Fragment>
      
        <NavBar
        userDetails={currentUser}
        />
        
        <Container className='landing-blog-section mb-0' fluid>
          <Row className='p-5'>
            <Col>
                <h1 className='text-light'>BEST OF THE WEEK</h1>
            </Col>
          </Row>

          <Row>
            <Col sm={8} className="mb-4">
                <Row>
                  {
                    postsData[0].map((item)=>{
                      return(
                        <Col sm={12} xs={12} key={item._id}>
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
                postsData[1].map((item)=>{

                  return (
                    <Col sm={12} xs={12} key={item._id} className="mb-4">
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

          <Row className='p-2'>
            <Col>
                <h3 className='text-light'>POLITICS TRENDING NEWS THIS WEEK</h3>
            </Col>
          </Row>

          <Row className='pb-4'>
              {
                postsData[2].map((item)=>{
                  return(
                    <Col sm={4} xs={12} key={item._id}>
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

         
        </Container>
        
        <Container className='landing-blog-section-2 mt-0' fluid>
          <Row className='p-4'>
            <Col>
                <h3 className='text-light'>SPORTS TRENDING NEWS THIS WEEK</h3>
            </Col>
          </Row>
          
          <Row className='pb-5'>
              {
                postsData[3].map((item)=>{
                  return(
                    <Col sm={4} xs={12} key={item._id}>
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
        </Container>
        
     
    </Fragment>
 
  )
}

export default Index