/******************************************
 *  Author : quantumRaven23   
 *  Created On : Fri Jan 15 2021
 *  File : collection-preview.component.jsx
 *******************************************/
//React
import React from 'react';

//Components
import CollectionItem from '../collection-item/collection-item.component'

//Styles
import './collection-preview.styles.scss';

//Misc

const CollectionPreview = ({title,items})=>(
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items
                .filter((item,idx)=> idx<4)
                .map(({id,...otherItemProps})=>(
                    <CollectionItem key={id} {...otherItemProps}/>
                ))
            }
        </div>
    </div>
)

export default CollectionPreview;