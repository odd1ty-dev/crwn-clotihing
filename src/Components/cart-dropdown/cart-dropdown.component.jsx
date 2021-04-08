/******************************************
 *  Author : quantumRaven23   
 *  Created On : Thu Apr 08 2021
 *  File : cart-dropdown.component.jsx
 *  Project : 
 *******************************************/
//React
import React from 'react';

//Components
import CustomButton from '../custom-button/custom-button.component';

//Styles
import './cart-dropdown.styles.scss';

//Misc

const CartDropdown = () =>(
    <div className='cart-dropdown'>
        <div className='cart-items'/>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
); 

export default CartDropdown;