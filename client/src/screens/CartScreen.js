import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartScreen = () => {
  const { cart, dispatch } = useContext(CartContext);

  const removeFromCartHandler = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const totalPrice = cart.cartItems.reduce((acc, item) => acc + item.qty * item.price, 0);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>

      {cart.cartItems.length === 0 ? (
        <p>Your cart is empty. <Link to="/" className="text-blue-600">Go back</Link></p>
      ) : (
        <div className="space-y-4">
          {cart.cartItems.map((item) => (
            <div key={item._id} className="flex justify-between items-center border-b pb-2">
              <div className="flex items-center space-x-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
                <Link to={`/product/${item._id}`} className="font-medium">{item.name}</Link>
              </div>
              <div className="flex items-center space-x-4">
                <select
                  value={item.qty}
                  onChange={(e) =>
                    dispatch({
                      type: 'ADD_TO_CART',
                      payload: { ...item, qty: Number(e.target.value) },
                    })
                  }
                  className="border px-2 py-1"
                >
                  {[...Array(item.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
                <span>${item.price}</span>
                <button
                  onClick={() => removeFromCartHandler(item._id)}
                  className="text-red-600"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="text-right font-semibold">
            Total: ${totalPrice.toFixed(2)}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartScreen;
