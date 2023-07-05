import { useState, createContext, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {

    const existingCartItem = cartItems.find((item) => item.id === productToAdd.id)
    if(existingCartItem != null){
        return cartItems.map((item) => {
            return item.id === existingCartItem.id ? {...item, quantity: existingCartItem.quantity + 1} : item
        })
    }

    return [...cartItems, {...productToAdd, quantity: 1}]
    
}

const removeCartItem = (cartItems, productToDecrease) => {
    const existingCartItem = cartItems.find((item) => item.id === productToDecrease.id)
    // const index = cartItems.findIndex((item) => item.id === productToDecrease.id)
    if(existingCartItem.quantity > 1){
        return cartItems.map((item) => {
            // create a new object to rerender the component
            return item.id === existingCartItem.id ? {...item, quantity: item.quantity - 1} : item
        })
    }
    return cartItems.filter(cartItem => cartItem.id !== existingCartItem.id)
}

const clearCartItem = (cartItems, productToRemove) => {
    return cartItems.filter(cartItem => cartItem.id !== productToRemove.id)
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: ()=>{},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0,
    removeItemToCart: () => {},
    clearItemFromCart: () => {},
    cartTotal: 0
})

export const CartProvider = ({children}) => {
    
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [cartTotal, setCartTotal] = useState(0)

    useEffect(()=>{
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartCount(newCartCount)
    },[cartItems])

    useEffect(()=>{
        const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
        setCartTotal(newCartTotal)
    },[cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const removeItemToCart = (productToDecrease) => {
        setCartItems(removeCartItem(cartItems, productToDecrease))
    }

    const clearItemFromCart = (productToRemove) =>{
        setCartItems(clearCartItem(cartItems, productToRemove))
    }

    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount, removeItemToCart, clearItemFromCart, cartTotal}
    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}