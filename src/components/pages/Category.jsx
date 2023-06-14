import React, { Fragment, useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from '../NavBar';
import { Container, Card, Button , Row, Col} from 'react-bootstrap'
import { useParams, Link, useNavigate } from 'react-router-dom';

const Category = () => {
  const [categoryPostsData, setCategoryPostsData] =useState([]);
  const [currentUser, setCurrentUser]             = useState(null); 
  const {name}      =useParams();
  const navigate    = useNavigate();

  useEffect(()=>{
        fetch(`https://readmeblog.onrender.com/blogs/category/${name}`,{
          method: "GET",
          withCredentials: true,
          headers:{
            'Access-Control-Allow-Origin':"https://trendspace.onrender.com",
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Cache': 'no-cache'
        },
        credentials: "include"
        }).then(response=>response.json()).then((data)=>{
          if(data.status===200 || data.status===201){
            setCategoryPostsData(data.data);
            setCurrentUser(data.user)
          }else if(data.status===400 || data.status===404){
            navigate('/blogs')
          }
          
        })
}, [name])


  return (
    <Fragment>
      <NavBar userDetails={currentUser}/>
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