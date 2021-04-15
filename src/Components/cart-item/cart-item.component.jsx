/******************************************
 *  Author : quantumRaven23   
 *  Created On : Thu Apr 15 2021
 *  File : cart-item.component.jsx
 *  Project : 
 *******************************************/
//React
import React from 'react';

//Components
//Styles
import './cart-item.styles.scss';

//Misc


const CartItem = ({item:{imageUrl, price, name, quantity}}) =>(
    <div className='cart-item'>
        <img src={imageUrl} alt='item'/>
        <div className='item-details'>
            <span className='name'>{name}</span>
            <span className='price'>{quantity} x ${price}</span>
        </div>
    </div>
);

export default CartItem;