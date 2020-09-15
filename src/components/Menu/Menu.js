import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Navbar, NavDropdown } from 'react-bootstrap';
import { connect } from 'react-redux';

class Menu extends Component {
    state = {}
    render() {
        return (
            <Navbar bg="light" expand="lg" className="d-flex justify-content-between">
                <div>
                    <Link to="/home">
                        <Navbar.Brand href="#home">Riverside Pizza</Navbar.Brand>
                    </Link>
                </div>
                <div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                </div>
                <div>
                    <Navbar.Collapse id="basic-navbar-nav">
                        {/* <Nav className="mr-auto"> */}
                        {/* <Nav.Link href="#home">Home</Nav.Link> */}
                        {/* </Nav> */}
                        <NavDropdown title={this.props.user.name} id="basic-nav-dropdown" className="mr-sm-2">
                            <NavDropdown.Item>
                                <Link to="/my-orders">
                                    My orders
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>
                                <Link to="/">
                                    Sing out
                                </Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Menu);