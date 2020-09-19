import React, { Component } from 'react';
import { connect } from 'react-redux';
import PizzaCard from './PizzaCard';
import Modal from './../Modal';
import ModalContainer from './../ModalContainer';

class PizzaList extends Component {
    state = {
        modalVisible: false,
        pizzaModal: null
    }

    handleClickSeeMore = (pizzaModal) => {
        this.setState({ modalVisible: true, pizzaModal });

    }

    handleClickSeeMoreClose = () => {
        this.setState({ modalVisible: false, pizzaModal: null });
    }

    render() {
        return (
            <div className="pt-1">
                <h2 className="text-center mb-1">
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

                    {
                        this.state.modalVisible &&
                        <ModalContainer>
                            <Modal closeModal={this.closeModal}>
                                {this.state.pizzaModal.name}
                            </Modal>
                        </ModalContainer>
                    }
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        pizzas: state.info.pizzas
    }
}

export default connect(mapStateToProps)(PizzaList);