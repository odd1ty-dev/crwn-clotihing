/******************************************
 *  Author : quantumRaven23   
 *  Created On : Fri Jan 15 2021
 *  File : shop.component.jsx
 *******************************************/
//React
import React from 'react';
import {Route} from 'react-router-dom';
//Redux


//Components
import CollectionsOverview from '../../Components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component';

//misc.


const ShopPage = ({ match })=>(
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview}/>
        <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
    </div>
);


 export default ShopPage;