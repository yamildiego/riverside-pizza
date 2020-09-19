import pizzas from '../data';
import { ADD_UPDATE_ITEM_CART, REMOVE_ITEM_CART, SET_NEW_ITEM_BEFORE_ADD } from './types';

let data = {
    pizzas,
    cart: [],
    newItem: {
        pizza_id: null,
        qt: 1,
        note: ""
    }
}

const removeItemCart = (pizza_id, cart) => {
    let newCart = [];
    cart.forEach(element => {
        if (parseInt(pizza_id) !== parseInt(element.pizza_id)) {
            newCart.push(element);
        }
    });

    return newCart;
}


const addUpdateItem = (newItem, cart) => {
    let newCart = [];
    let isNew = true;
    cart.forEach(element => {
        if (parseInt(element.pizza_id) === parseInt(newItem.pizza_id)) {
            newCart.push(newItem);
            isNew = false;
        } else {
            newCart.push(element);
        }
    });

    if (isNew)
        newCart.push(newItem);

    return newCart;
}

let cart = [];

export default function info(state = { ...data }, action = {}) {
    switch (action.type) {
        case ADD_UPDATE_ITEM_CART:
            cart = addUpdateItem(action.value, state.cart);
            return {
                ...state,
                cart
            }
        case REMOVE_ITEM_CART:
            cart = removeItemCart(action.value.pizza_id, state.cart);
            return {
                ...state,
                cart
            }
        case SET_NEW_ITEM_BEFORE_ADD:
            return {
                ...state,
                newItem: action.value
            }
        default:
            return state;
    }
}