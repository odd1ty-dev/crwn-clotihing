//React
import React from 'react';

//Data

//Components

//Styles
import './collection-item.styles.scss'

//misc


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