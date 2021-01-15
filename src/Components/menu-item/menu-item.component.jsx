/******************************************
 *  Author : quantumRaven23   
 *  Created On : Fri Jan 15 2021
 *  File : menu-item.component.jsx
 *******************************************/

 //React
import React from 'react';
import {withRouter} from 'react-router-dom';

//Components

//Styles
import './menu-item.styles.scss'

//Misc


const MenuItem = ({title,imageUrl,size, history, linkUrl, match}) => (
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div 
            className='background-image'
            style={{
                backgroundImage:`url(${imageUrl})` 
            }} 
        />
        <div className='content'>  
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div> 
    </div>
    
);

export default withRouter(MenuItem);