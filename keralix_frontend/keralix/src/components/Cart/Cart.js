import React from 'react';
import { useCart } from '../Cart/CartContext';

function Cart() {
    const { cart, removeFromCart } = useCart();

    return (
        <div className="container my-4">
            <h2>Cart</h2>
            <ul className="list-group">
                {cart.length === 0 ? (
                    <li className="list-group-item">Your cart is empty</li>
                ) : (
                    cart.map((item) => (
                        <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                            <div>
                                <strong>{item.name}</strong> x {item.quantity} - ${item.price * item.quantity}
                            </div>
                            <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(item.id)}>
                                Remove
                            </button>
                        </li>
                    ))
                )}
            </ul>
            <div className="mt-3">
                <h5>
                    Total: $
                    {cart.reduce((total, item) => total + item.price * item.quantity, 0)}
                </h5>
            </div>
        </div>
    );
}

export default Cart;
