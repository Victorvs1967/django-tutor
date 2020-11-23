import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Col, Card } from 'react-bootstrap';

const PostDetail = ({ match }) => {

    const [ post, setPost ] = useState({});
    const [ category, setCategory ] = useState({});
    const [ pubDate, setPubDate ] = useState('');
    const id = match.params.id;

    useEffect(() => {
        axios({
            method: 'GET',
            url: `http://127.0.0.1:8000/api/blogpost/${id}`
        })
        .then(response => {
            setPost(response.data);
            setCategory(response.data.blog_category);
            const dateTime = response.data.pub_date.split('T');
            const date = dateTime[0] + ' ' + dateTime[1].split('.')[0];
            setPubDate(date);
        })
        .catch(err => console.log(err))
    }, [id])

    return (
        <Col>
            <Card className="mx-0 mt-5 h-100">
                <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>{post.content}</Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted" style={{fontSize: '12px'}}><Link to={{pathname: `/category/${category.id}/`}}>#{category.slug}</Link> ({pubDate})</Card.Footer>
            </Card>
        </Col>
    )
};

export default PostDetail;