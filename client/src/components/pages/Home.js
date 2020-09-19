import React, { Component } from 'react';
import PizzaList from '../PizzaList/PizzaList';
import AppLayout from '../AppLayout';

class Home extends Component {
    state = {}
    render() {
        return (
            <AppLayout>
                <PizzaList />
            </AppLayout>
        );
    }
}

export default Home;