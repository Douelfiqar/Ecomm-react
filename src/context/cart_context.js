import React, { useEffect } from 'react';
import { createContext, useContext, useReducer } from "react"
import reducer from '../reducers/cart_reducer'
import { ADD_TO_CART, CLEAR_CART, REMOVE_CART_ITEM, TOGGLE_CART_ITEM_AMOUNT } from "../action";

const getLocalStorage = () => {
    let cart = localStorage.getItem('cart')
    if(cart){
        return JSON.parse(localStorage.getItem('cart'))
    }
    else{
        return []
    }
}
const InitialState = {
    cart : getLocalStorage(),
    totalIteams: 0,
    totalAmount: 0,
    shipping_fee : 534
}

const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, InitialState)

    const add_to_cart = (id, color, amount, product) => {
        dispatch({type: ADD_TO_CART, payload: {id, color, amount, product }})
    }

    const clear_cart = () => {
        dispatch({type: CLEAR_CART})
    }
    
    const remove_item = (id) => {
        dispatch({type: REMOVE_CART_ITEM, payload: id})
    }

    const toggleCartAmount = (id, value) => {
        dispatch({type: TOGGLE_CART_ITEM_AMOUNT, payload: {id, value}})
    }

    useEffect(()=>{
        localStorage.setItem('cart', JSON.stringify(state.cart))
    }, [state.cart])

  return (
    <CartContext.Provider value={{ ...state, add_to_cart, clear_cart, remove_item,  toggleCartAmount}}>
        {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => {
    return useContext(CartContext)
}

