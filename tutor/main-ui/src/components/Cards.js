import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Card, Col, CardDeck } from 'react-bootstrap';

const Cards = () => {

  const [blogpostost, setBlogpost] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://127.0.0.1:8000/api/blogpost/"
    }).then(response => {
      setBlogpost(response.data);
    });
  }, []);
    
  return ( 
    <CardDeck className="row-cols-4 mt-4">
      {blogpostost.map(post => {
        const dateTime = post.pub_date.split('T');
        const date = dateTime[0] + ' ' + dateTime[1].split('.')[0];
          return (
            <Col className="mb-4">
              <Card className="mx-0 h-100" key={post.id}>
                  {/* <Card.Img variant="top" src={post.image} /> */}
                  <Card.Body>
                      <Card.Title>{ post.title }</Card.Title>
                      <Card.Text>{ post.content }</Card.Text>
                  </Card.Body>
                  <Card.Footer className="text-muted" style={{fontSize: '12px'}}><Link to={{pathname: `/category/${post.blog_category.id}/`}}>#{post.blog_category.slug}</Link> ({date})</Card.Footer>
              </Card>        
            </Col>)
            }
          )
      }
    </CardDeck>
  );
}

export default Cards;
