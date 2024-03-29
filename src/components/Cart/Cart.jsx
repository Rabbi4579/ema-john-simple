import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Cart = ({ cart, handleClearCart, children }) => {
console.log(handleClearCart)
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {

        //srotcut solution
        // if(product.quantity === 0){
        //     product.quantity = 1;
        // }
        // product.quantity = product.quantity || 1;

        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }

    const tax = totalPrice * 15 / 100;
    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className='cart'>
            <h4>Order summary</h4>
            <p>Selected Items:{quantity}</p>
            <p>Total price: {totalPrice} </p>
            <p>Total Shipping: {totalShipping} </p>
            <p>Tax: {tax} </p>
            <h6>Grand Total:{grandTotal.toFixed(2)} </h6>
            <button onClick={handleClearCart} className='btn-clear-cart'>
                <span>Clear Cart</span>
                <FontAwesomeIcon  icon={faTrashAlt}></FontAwesomeIcon>
            </button>
                {children}
        </div>
    );
};

export default Cart;