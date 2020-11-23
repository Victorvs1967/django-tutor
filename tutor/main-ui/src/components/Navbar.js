import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Navbar, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';

const Navibar = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios({
            method: "GET",
            url: "http://127.0.0.1:8000/api/category/"
        })
        .then(response => {
            setCategories(response.data);
        });
    }, []);

    return (
        <Navbar className="px-5" bg="light" variant="light" fixed='top'>
            <Navbar.Brand><Link className="text-reset" to={{pathname: '/'}}>Django-React</Link></Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link>
                    <Link className="text-reset" to={{pathname: '/'}}>Posts</Link>
                </Nav.Link>
                <NavDropdown title="Categories" id="basic-nav-dropdown">
                    {categories.map(
                    category => 
                        <NavDropdown.Item>
                            <Link className="text-reset" key={category.id} to={{pathname: `/category/${category.id}/`, fromDashboard: false}}>{category.name}</Link>
                        </NavDropdown.Item>)}
                </NavDropdown>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-primary">Search</Button>
            </Form>
        </Navbar>
    );
}

export default Navibar;