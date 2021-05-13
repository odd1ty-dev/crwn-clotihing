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
import {selectCartItemsCount} from '../../redux/cart/cart.selectors'

//Styles
import './cart-icon.styles.scss';

//Misc
import {createStructuredSelector} from 'reselect';


import {ReactComponent as ShoppingIcon} from '../../Assets/shopping-bag.svg';

const CartIcon= ({toggleCartHidden, itemCount}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'> {itemCount} </span>
    </div>
);
const mapDistpatchToProps = dispatch =>({
    toggleCartHidden: ()=> dispatch(toggleCartHidden())

});

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

export default connect(
    mapStateToProps,
    mapDistpatchToProps
    )(CartIcon);