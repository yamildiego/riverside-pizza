import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Navbar, NavDropdown } from 'react-bootstrap';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import * as actions from './../../actions/cartActions';
import './Menu.css';

class Menu extends Component {
    state = {}
    componentDidMount() {
        this.props.dispatch(actions.setNewItemBeforeAdd(
            {
                pizza_id: null,
                qt: 1
            }
        ));
    }

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
                        <NavDropdown.Item href="/my-orders">
                            My orders
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/">
                            Sing out
                        </NavDropdown.Item>
                    </NavDropdown>
                </div>
                <div style={{ width: "40px" }}>
                    {
                        this.props.optionCheckout &&
                        <Link to="/cart">
                            <FontAwesomeIcon icon={faShoppingCart} className="cart" />
                        </Link>
                    }
                </div>
            </Navbar>
        );
    }
}

function mapStateToProps(state, props) {
    let optionCheckout = (state.info.cart.length !== 0);
    return {
        optionCheckout,
        user: state.user
    }
}

export default connect(mapStateToProps)(Menu);