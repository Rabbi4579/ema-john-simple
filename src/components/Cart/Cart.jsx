import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {

    let totalPrice = 0;
    let totalShipping = 0;
    for (const product of cart) {
        totalPrice = totalPrice + product.price;
        totalShipping = totalShipping + product.price;
    }


    const tax = totalPrice * 15 / 100;
    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className='cart'>
            <h4>Order summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total price: {totalPrice} </p>
            <p>Total Shipping: {totalShipping} </p>
            <p>Tax: {tax} </p>
            <h6>Grand Total:{grandTotal.toFixed(2)} </h6>
        </div>
    );
};

export default Cart;