import React, { Component } from 'react';
import Menu from './../Menu/Menu';
import PizzaList from '../PizzaList/PizzaList';
import pizzas from './../../data';

class Home extends Component {
    state = {}
    render() {
        return (
            <div className="App">
                <Menu />
                <PizzaList pizzas={pizzas} />
            </div>
        );
    }
}

export default Home;