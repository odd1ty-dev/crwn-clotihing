/******************************************
 *  Author : quantumRaven23   
 *  Created On : Fri Jan 15 2021
 *  File : form-input.component.jsx
 *******************************************/
//React
import React from 'react';

//Components
//Styles
import './form-input.styles.scss'

//Misc


const FormInput =({handleChange,label,...otherProps}) => (
    <div className="group">
        <input className='form-input' onChange={handleChange} {...otherProps}/>
        {
            label ?(
            <label 
            className={`${
                otherProps.value.length? 'shrink' : ''
            } form-input-label`}
            >
                {label}
            </label>
            )
            : 
            null
        }    
    </div>
);

export default FormInput