/******************************************
 *  Author : quantumRaven23   
 *  Created On : Thu Apr 08 2021
 *  File : cart-dropdown.component.jsx
 *  Project : 
 *******************************************/
//React
import React from 'react';
import {connect} from 'react-redux';

//Components
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

//Styles
import './cart-dropdown.styles.scss';

//Misc

const CartDropdown = ({cartItems}) =>(
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map( cartItem =><CartItem key={cartItem.id} item={cartItem}/>)
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
); 

const mapStateToProps= ({cart:{cartItems}}) => ({
    cartItems
});

export default connect(mapStateToProps)(CartDropdown);