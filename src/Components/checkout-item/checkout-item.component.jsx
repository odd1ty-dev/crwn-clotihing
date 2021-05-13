/******************************************
 *  Author : quantumRaven23   
 *  Created On : Thu May 13 2021
 *  File : checkout-item.component.jsx
 *  Project : 
 *******************************************/
//React
import React from 'react';

//Redux

//Components
//Styles
import './checkout-item.styles.scss'
//Misc

const CheckoutItem = ({cartItem:{name, imageUrl, price, quantity}}) => (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt='item'/>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>{quantity}</span>
        <span className='price'>{price}</span>
        <div className='remove-button'>&#10005;</div>
    </div>
);

export default CheckoutItem;