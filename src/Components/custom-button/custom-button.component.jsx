/******************************************
 *  Author : quantumRaven23   
 *  Created On : Fri Jan 15 2021
 *  File : custom-button.jsx
 *******************************************/
//React
import React from 'react';

//Components

//Styles
import {CustomButtonContainer} from './custom-button.styles';


//Misc


const CustomButton=({children, ...props})=>(
    <CustomButtonContainer {...props}>
        {children} 
    </CustomButtonContainer>
);

export default CustomButton;
