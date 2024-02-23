import React from 'react';
import './ReviewItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
const ReviewItem = ({product, handleRemoveFromCart}) => {
    // console.log(product)
    const {id, img, price, quantity, name} = product;
    // console.log(removeCart)
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-details'>
                <p className='review-title'>{name}</p>
                <p>Price: <span className='orange-text'>{price}</span></p>
                <p>Quantity: <span className='orange-text'>{quantity}</span></p>
            </div>
            <button className='btn-delete' onClick={() => handleRemoveFromCart(id)}>
                <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default ReviewItem;