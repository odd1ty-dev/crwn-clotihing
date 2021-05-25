/******************************************
 *  Author : quantumRaven23   
 *  Created On : Sun May 16 2021
 *  File : collections-overview.component.jsx
 *  Project : 
 *******************************************/
//React
import React from 'react';

//Redux
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors';

//Components
import CollectionPreview from '../../Components/collection-preview/collection-preview.component'

//Styles
import './collections-overview.styles.scss'
//Misc


const CollectionsOverview = ({collections}) =>(
    <div className='collections-overview'>
        {
            collections.map(({id,...otherCollectionProps} )=>(
                <CollectionPreview key={id} {...otherCollectionProps}/>   
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);