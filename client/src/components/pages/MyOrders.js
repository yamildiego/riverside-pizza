import React, { Component } from 'react';
import Menu from './../Menu/Menu';

class MyOrders extends Component {
    state = {}
    render() {
        return (
            <div className="App">
                <Menu />
                my orders
            </div>
        );
    }
}

export default MyOrders;