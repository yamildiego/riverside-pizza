import React, { Component } from 'react';
import Menu from './../Menu/Menu';
import Menu from './../ListPizzas/ListPizzas';
import pizzas from './../../data';

class Home extends Component {
    state = {}
    render() {
        return (
            <div className="App">
                <Menu />
                <ListPizzas pizzas={pizzas} />
            </div>
        );
    }
}

export default Home;