import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Product = (props) => {
    const { name, price, img, seller, ratings, id } = props.product;
    const handleAddToCart = props.handleAddToCart;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p className='price'>Price: ${price}</p>
                <p>Manufacturar: {seller}</p>
                <p>Regings: {ratings}</p>
            </div>
            <button onClick={() => { handleAddToCart(props.product) }} className='btn-cart'>
                
                Add to cart 
                <FontAwesomeIcon icon={faShoppingCart} />
                </button>
        </div>
    );
};


export default Product;