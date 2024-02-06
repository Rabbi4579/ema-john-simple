import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, price, img, seller, ratings } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p className='price'>Price: ${price}</p>
                <p>Manufacturar: {seller}</p>
                <p>Regings: {ratings}</p>
            </div>
            <button className='btn-cart'>Add to cart</button>
        </div>
    );
};


export default Product;