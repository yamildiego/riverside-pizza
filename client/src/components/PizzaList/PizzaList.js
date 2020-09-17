import React, { Component } from 'react';
import { connect } from 'react-redux';
import PizzaCard from './PizzaCard';

class PizzaList extends Component {
    render() {
        return (
            <div className="pt-1">
                <h2 className="text-center mb-3">
                    Our Pizzas
                </h2>
                <div>
                    {
                        this.props.pizzas.map(item => {
                            return <PizzaCard
                                handleClickSeeMore={() => this.props.handleClickSeeMore(item)}
                                handleClickSeeMoreClose={this.handleClickSeeMoreClose}
                                key={item.id} {...item}
                            />
                        })
                    }
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        pizzas: props.pizzas
    }
}

export default connect(mapStateToProps)(PizzaList);