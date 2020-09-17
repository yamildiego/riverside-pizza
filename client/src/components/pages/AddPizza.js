import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import isset from './../utilities/isset';

class AddPizza extends Component {
    state = {}
    render() {
        return (
            <div>
                casasda
                {this.props.pizza_id}
                {this.props.quantity}
            </div>
        );
    }
}

function mapStateToProps(state, props) {
    let elements = props.history.location.pathname.split("/");
    let pizza_id = 0;
    let quantity = 1;
    if (isset(elements[2])) pizza_id = elements[2];
    if (isset(elements[3])) quantity = elements[3];

    console.log(elements);
    return {
        pizza_id,
        quantity
    }
}

export default withRouter(connect(mapStateToProps)(AddPizza));