/******************************************
 *  Author : quantumRaven23   
 *  Created On : Fri Jan 15 2021
 *  File : shop.component.jsx
 *******************************************/
//React
import React from 'react';

//Data
import SHOP_DATA from './shop.data';

//Components
import CollectionPreview from '../../Components/collection-preview/collection-preview.component'

//misc.


class ShopPage extends React.Component{
    constructor(props){
        super(props)

        this.state={
            collections: SHOP_DATA
        }
    }

    render(){
        const {collections} = this.state;
        return(
            <div>
                {
                    collections.map(({id,...otherCollectionProps} )=>(
                        <CollectionPreview key={id} {...otherCollectionProps}/>   
                    ))
                }
            </div>
        );

    }
 }

 export default ShopPage;