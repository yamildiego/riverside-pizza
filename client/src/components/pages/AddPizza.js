import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withRouter } from 'react-router-dom';
import isset from './../utilities/isset';
import AppLayout from './../AppLayout';
import { Card, Form, Button, ButtonGroup } from 'react-bootstrap';
import formatNumber from './../utilities/formatNumber';
import * as actions from './../../actions/cartActions';

class AddPizza extends Component {
    state = {}

    handleOnChangeQt = (e) => {
        this.props.dispatch(actions.setNewItemBeforeAdd(
            {
                pizza_id: this.props.pizza_id,
                qt: e.target.value,
                note: this.props.note
            }
        ));
    }

    handleOnChangeNote = (e) => {
        this.props.dispatch(actions.setNewItemBeforeAdd(
            {
                pizza_id: this.props.pizza_id,
                qt: this.props.quantity,
                note: e.target.value
            }
        ));
    }

    addPizzaCartAndContinueShopping = () => {
        this.props.dispatch(actions.addUpdateItem(
            {
                pizza_id: this.props.pizza_id,
                qt: this.props.quantity,
                note: this.props.note
            }
        ));
        this.props.history.push('/Home');
    }

    addPizzaCartAndCheckOut = () => {
        this.props.dispatch(actions.addUpdateItem(
            {
                pizza_id: this.props.pizza_id,
                qt: this.props.quantity,
                note: this.props.note
            }
        ));
        this.props.history.push('/Cart');
    }

    render() {
        const elementsSelect = [1, 2, 3];
        return (
            <AppLayout>
                <div className="pb-2">
                    <Card className="ItemCartCard" style={{ width: "99%", margin: "auto" }}>
                        <Card.Body>
                            <div className="row">
                                <div className="col-4">
                                    <Card.Img className="img-thumbnail" variant="top" src={this.props.item.picture} />
                                </div>
                                <div className="col-8 pl-0">
                                    <Card.Title>
                                        {this.props.item.name}
                                        {/* <div onClick={this.removeItem} className="close">
                                            <FontAwesomeIcon icon={faTimes} />
                                        </div> */}
                                    </Card.Title>
                                    <div className="d-flex justify-content-around">
                                        <div className="w-100">
                                            <Form className="my-select">
                                                <Form.Control as="select" value={this.props.quantity} custom onChange={this.handleOnChangeQt}>
                                                    {elementsSelect.map((value, index) => {
                                                        return <option key={value}>{value}</option>
                                                    })}
                                                </Form.Control>
                                            </Form>
                                        </div>
                                        <div className="w-100">
                                            <div className="subtotal">
                                                {formatNumber(this.props.item.price * this.props.quantity)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <textarea className="form-control w-100 mt-1 mb-1"
                                        value={this.props.note}
                                        onChange={this.handleOnChangeNote}
                                        placeholder="Note"
                                        style={{ resize: "none" }}></textarea>
                                </div>
                            </div>
                            <Card.Footer>
                                <Button className="w-100 mb-2" onClick={() => { this.props.history.push('/Home') }} variant="secondary">Back</Button>
                                <Button className="w-100 mb-2" onClick={this.addPizzaCartAndContinueShopping} variant="primary">Add and Continue shopping</Button>
                                <Button className="w-100 mb-2" onClick={this.addPizzaCartAndCheckOut} variant="success">Proceed to checkout</Button>
                            </Card.Footer>
                        </Card.Body>
                    </Card>
                </div>
            </AppLayout>
        );
    }
}

const getPizza = (pizza_id, pizzas) => {
    let item = null;
    pizzas.forEach((i) => {
        if (parseInt(pizza_id) === parseInt(i.id)) item = i;
    });
    return item;
}

const getItemOfCart = (pizza_id, items) => {
    let item = null;
    items.forEach((i) => {
        if (parseInt(pizza_id) === parseInt(i.pizza_id)) item = i;
    });
    return item;
}

function mapStateToProps(state, props) {
    let elements = props.history.location.pathname.split("/");
    let pizza_id = 0;
    let quantity = 1;
    let note = "";

    if (isset(elements[2])) pizza_id = elements[2];
    if (isset(elements[3])) quantity = elements[3];

    let itemAdded = getItemOfCart(pizza_id, state.info.cart);

    if (itemAdded !== null) {
        quantity = parseInt(itemAdded.qt);
        note = itemAdded.note;
    }

    if (state.info.newItem.pizza_id !== null) {
        quantity = state.info.newItem.qt;
        note = state.info.newItem.note;
    }

    let item = getPizza(pizza_id, state.info.pizzas);
    return {
        item,
        pizza_id,
        quantity,
        note
    }
}

export default withRouter(connect(mapStateToProps)(AddPizza));