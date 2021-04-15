/******************************************
 *  Author : quantumRaven23   
 *  Created On : Fri Jan 15 2021
 *  File : custom-button.jsx
 *******************************************/
//React
import React from 'react';

//Components

//Styles
import './custom-button.styles.scss';

//Misc


const CustomButton=({children,isGoogleSignIn, inverted,...otherProps})=>(
    <button 
    className={`${inverted ? 'inverted':''} {isGoogleSignIn ? 'google-sign-in':''} custom-button`} 
        {...otherProps}>
        {children}
    </button>
);

export default CustomButton;
