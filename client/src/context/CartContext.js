import React, { createContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x._id === item._id);

      const updatedCartItems = existItem
        ? state.cartItems.map((x) => (x._id === existItem._id ? item : x))
        : [...state.cartItems, item];

      return { ...state, cartItems: updatedCartItems };

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x._id !== action.payload),
      };

    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const initialCart = JSON.parse(localStorage.getItem('cart')) || { cartItems: [] };
  const [state, dispatch] = useReducer(cartReducer, initialCart);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state));
  }, [state]);

  return (
    <CartContext.Provider value={{ cart: state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
