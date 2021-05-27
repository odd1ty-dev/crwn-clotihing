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
import StripeCheckoutButton from '../../Components/stripe-button/stripe-button.component';

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
            <div className='total'>TOTAL: ${total}</div>
            <div className='test-warning'>
                *PLEASE USE THE FOLLOWING TEST CREDIT CARD FOR PAYMENT 
                <br/>
                4242 4242 4242 4242 - 01/30 - 1234    
            </div>
            <StripeCheckoutButton price={total}/>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);