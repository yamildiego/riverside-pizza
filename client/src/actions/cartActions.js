import { ADD_UPDATE_ITEM_CART, REMOVE_ITEM_CART, SET_NEW_ITEM_BEFORE_ADD } from "../reducers/types";

export const addUpdateItem = value => ({
    type: ADD_UPDATE_ITEM_CART,
    value
});

export const removeItemCart = value => ({
    type: REMOVE_ITEM_CART,
    value
});

export const setNewItemBeforeAdd = value => ({
    type: SET_NEW_ITEM_BEFORE_ADD,
    value
});