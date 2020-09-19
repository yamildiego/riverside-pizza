import React, { Component } from 'react';
import { Card, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './ItemCartCard.css';
import * as actions from './../../actions/cartActions';
import formatNumber from './../utilities/formatNumber';

class ItemCartCard extends Component {
    state = {}

    handleOnChange = (e) => {
        this.props.dispatch(actions.addUpdateItem(
            {
                pizza_id: this.props.pizza_id,
                qt: e.target.value,
                note: this.props.note
            }
        ));
    }

    handleOnChangeNote = (e) => {
        this.props.dispatch(actions.addUpdateItem(
            {
                pizza_id: this.props.pizza_id,
                qt: this.props.qt,
                note: e.target.value
            }
        ));
    }

    removeItem = () => {
        this.props.dispatch(actions.removeItemCart(
            {
                pizza_id: this.props.pizza_id,
            }
        ));
    }

    render() {
        const elementsSelect = [1, 2, 3];
        return (
            <div className="pb-2">
                <Card className="ItemCartCard" style={{ width: "90%", margin: "auto" }}>
                    <Card.Body>
                        <div className="row">
                            <div className="col-4">
                                <Card.Img className="img-thumbnail" variant="top" src={this.props.item.picture} />
                            </div>
                            <div className="col-8 pl-0">
                                <Card.Title>
                                    {this.props.item.name}
                                    <div onClick={this.removeItem} className="close">
                                        <FontAwesomeIcon icon={faTimes} />
                                    </div>
                                </Card.Title>
                                <div className="d-flex justify-content-around">
                                    <div className="w-100">
                                        <Form className="my-select">
                                            <Form.Control as="select" value={this.props.qt} custom onChange={this.handleOnChange}>
                                                {elementsSelect.map((value, index) => {
                                                    return <option key={value}>{value}</option>
                                                })}
                                            </Form.Control>
                                        </Form>
                                    </div>
                                    <div className="w-100">
                                        <div className="subtotal">
                                            {formatNumber(this.props.item.price * this.props.qt)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Card.Footer>
                            <div className="row">
                                <div className="col-12">
                                    <textarea className="form-control w-100 mt-1 mb-1"
                                        value={this.props.note}
                                        onChange={this.handleOnChangeNote}
                                        placeholder="Note"
                                        style={{ resize: "none" }}></textarea>
                                </div>
                            </div>
                        </Card.Footer>
                    </Card.Body>
                </Card>
            </div>
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
    let item = getPizza(props.pizza_id, state.info.pizzas);
    let itemAdded = getItemOfCart(props.pizza_id, state.info.cart);
    return {
        item,
        pizza_id: item.id,
        qt: itemAdded.qt,
        note: itemAdded.note
    }
}

export default connect(mapStateToProps)(ItemCartCard);