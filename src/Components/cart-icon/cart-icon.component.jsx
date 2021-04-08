/******************************************
 *  Author : quantumRaven23   
 *  Created On : Thu Apr 08 2021
 *  File : cart-icon.component.jsx
 *  Project : 
 *******************************************/
//React
import React from 'react';

//Redux
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.actions'

//Components

//Styles
import './cart-icon.styles.scss';

//Misc


import {ReactComponent as ShoppingIcon} from '../../Assets/shopping-bag.svg';

const CartIcon= ({toggleCartHidden}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'> 0 </span>
    </div>
);
const mapDistpatchToProps = dispatch =>({
    toggleCartHidden: ()=> dispatch(toggleCartHidden())

});

export default connect(
    null,
    mapDistpatchToProps
    )(CartIcon);