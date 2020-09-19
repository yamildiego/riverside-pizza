import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppLayout from './../AppLayout';
import ItemCartCard from './../ItemCartCard/ItemCartCard';

class Cart extends Component {
    state = {}

    render() {
        return (
            <AppLayout>
                <div className="pt-1">
                    <h2 className="text-center mb-3">
                        Shopping Cart
                    </h2>
                    <div>
                        {
                            this.props.itemsCart.map(item => {
                                return <ItemCartCard
                                    key={item.pizza_id} pizza_id={item.pizza_id}
                                />
                            })
                        }

                    </div>
                </div>
            </AppLayout>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        itemsCart: state.info.cart
    }
}

export default connect(mapStateToProps)(Cart);