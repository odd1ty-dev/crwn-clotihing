/******************************************
 *  Author : quantumRaven23   
 *  Created On : Fri Jan 15 2021
 *  File : collection-item.component.jsx
 *******************************************/
//React
import React from 'react';

//Components

//Styles
import './collection-item.styles.scss'

//Misc.


const CollectionItem =({id,name,price,imageUrl})=>(
    <div className='collection-item'>
        <div
            className='image'
            style={{
                backgroundImage:`url(${imageUrl})`
            }}
        />
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
    </div>
);

export default CollectionItem;