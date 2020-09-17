import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Navbar, NavDropdown } from 'react-bootstrap';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Menu.css';

class Menu extends Component {
    state = {}
    render() {
        return (
            <Navbar expand="lg" className="d-flex justify-content-between my-menu">
                <div>
                    <Link to="/home">
                        <Navbar.Brand>Riverside Pizza</Navbar.Brand>
                    </Link>
                </div>
                <div>
                    {/* <Nav className="mr-auto"> */}
                    {/* <Nav.Link href="#home">Home</Nav.Link> */}
                    {/* </Nav> */}
                    <NavDropdown title={this.props.user.name} id="basic-nav-dropdown" className="my-options mr-sm-2">
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
                </div>
                <div>
                    <FontAwesomeIcon icon={faShoppingCart} className="cart" />

                    {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
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