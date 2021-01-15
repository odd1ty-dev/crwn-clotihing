/******************************************
 *  Author : quantumRaven23   
 *  Created On : Fri Jan 15 2021
 *  File : header.component.jsx
 *******************************************/
//React and Libraries
import React from 'react';
import {Link} from 'react-router-dom';

//Components

//Styles
import './header.styles.scss';

//Misc
import {ReactComponent as Logo} from '../../Assets/crown.svg';

const Header =()=>(
    <div className='header'>
        <Link to="/" className='logo-container'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            
        </div>
    </div>
);

export default Header;