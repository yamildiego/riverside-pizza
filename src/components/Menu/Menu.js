import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

class Menu extends Component {
    state = {}
    render() {
        return (
            <Navbar bg="light" expand="lg" className="d-flex justify-content-between">
                <div>
                    <Navbar.Brand href="#home">Riverside Pizza</Navbar.Brand>
                </div>
                <div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                </div>
                <div>
                    <Navbar.Collapse id="basic-navbar-nav">
                        {/* <Nav className="mr-auto"> */}
                        {/* <Nav.Link href="#home">Home</Nav.Link> */}
                        {/* </Nav> */}
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown" className="mr-sm-2">
                            <NavDropdown.Item href="#action/3.1">My orders</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Sing out</NavDropdown.Item>
                        </NavDropdown>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        );
    }
}

export default Menu;