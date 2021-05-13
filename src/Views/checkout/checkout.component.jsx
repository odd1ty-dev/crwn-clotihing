/******************************************
 *  Author : quantumRaven23   
 *  Created On : Tue May 11 2021
 *  File : checkout.component.jsx
 *  Project : 
 *******************************************/
//React
import React from 'react';

//Components
import CheckoutItem from '../../Components/checkout-item/checkout-item.component';

//Styles
import './checkout.styles.scss'

//Misc
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';  
import { selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors'

const CheckoutPage = ({cartItems,total}) =>(
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
            {
                cartItems.map(cartItem => (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                ))
            }
            <div className='total'>
                <span>TOTAL: ${total}</span>
            </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);