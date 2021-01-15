/******************************************
 *  Author : quantumRaven23   
 *  Created On : Fri Jan 15 2021
 *  File : directory.component.jsx
 *******************************************/
//React
import React from 'react';

//Components
import MenuItem from '../menu-item/menu-item.component';

//Styles
import './directory.styles.scss';

//Misc


class Directory extends React.Component{
    constructor(){
        super();

        this.state={
            sections:[{
                title: 'hats',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id: 1,
                linkUrl: 'shop/hats'
              },
              {
                title: 'jackets',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                id: 2,
                linkUrl: 'shop/jackets'
              },
              {
                title: 'sneakers',
                imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                id: 3,
                linkUrl: 'shop/sneakers'
              },
              {
                title: 'womens',
                imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                size: 'large',
                id: 4,
                linkUrl: 'shop/womens'
              },
              {
                title: 'mens',
                imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                size: 'large',
                id: 5,
                linkUrl: 'shop/mens'
              }]
        }//<-       
    }

    render(){
        return (
            <div className='directory-menu'>
                {
                this.state.sections.map( ({id,...otherSectionProps}) =>(
                    <MenuItem key={id} {...otherSectionProps}/>
                ))}
            </div>
        );
    } 
}

export default Directory;