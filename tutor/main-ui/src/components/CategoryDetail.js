import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Card, Col, CardDeck } from 'react-bootstrap';

const CategoryDetail = ({ match }) => {

    const [ category, setCategory] = useState({});
    const [ posts, setPosts ] = useState([]);
    const id = match.params.id;

    useEffect(() => {
        axios({
            method: 'GET',
            url: `http://127.0.0.1:8000/api/category/${id}/`
        })
        .then(response => {
            setCategory(response.data);
            setPosts(response.data.posts);
        })
    }, [id])

    return (
        <div className="mt-5 p-4">
            <h4>Category: {category.name}</h4>
            <hr />
            <CardDeck className="row-cols-4">
                {posts.map(post => 
                        <Col className="mb-4">
                            <Card className="mx-0 h-100" key={post.id}>
                            <Card.Body>
                                <Card.Title>{ post.title }</Card.Title>
                                <Card.Text>{ post.content }</Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-muted" style={{fontSize: '12px'}}><Link to={{pathname: `/post/${post.id}/`, fromDashboard: false }}>Post detail</Link></Card.Footer>
                            </Card>
                        </Col>
                    )
                }
            </CardDeck>
        </div>
    )

}

export default CategoryDetail;

