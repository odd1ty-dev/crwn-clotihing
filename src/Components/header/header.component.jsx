/******************************************
 *  Author : quantumRaven23   
 *  Created On : Fri Jan 15 2021
 *  File : header.component.jsx
 *******************************************/
//React, Redux, and other core libraries
import React from 'react';


//Redux
import {connect} from 'react-redux';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors'; 
import {createStructuredSelector} from 'reselect'

//Components
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';


//Styles
import {
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionLink
} from './header.styles'

//Misc
import {ReactComponent as Logo} from '../../Assets/crown.svg';
import {auth} from '../../firebase/firebase.utils';

const Header =({ currentUser, hidden })=>(
    <HeaderContainer>
        <LogoContainer to="/" >
            <Logo className='logo'/>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink to='/shop'>
                CONTACT
            </OptionLink>
            {
                currentUser ?
                <OptionLink as={'div'} onClick={()=>auth.signOut()}>
                    SIGN OUT
                </OptionLink>
                :
                <OptionLink to='/signin'>
                    SIGN IN
                </OptionLink>
            }
            <CartIcon/>
        </OptionsContainer>
        { hidden ? null : <CartDropdown/> }
    </HeaderContainer>
);

const mapStatetoProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden : selectCartHidden
});

export default connect(mapStatetoProps)(Header);