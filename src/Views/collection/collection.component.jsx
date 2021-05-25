/******************************************
 *  Author : quantumRaven23   
 *  Created On : Thu May 20 2021
 *  File : category.component.jsx
 *  Project : 
 *******************************************/
//React
import React from 'react';

//Redux
import {connect} from 'react-redux';
import {selectCollection} from '../../redux/shop/shop.selectors' 

//Components
import CollectionItem from '../../Components/collection-item/collection-item.component'

//Styles
import './collection.styles.scss';

//Misc


const CollectionPage = ({collection}) => {
    const {title, items} = collection;

    return(
    <div className='collection-page'>
        <h2 className='title'>{title}</h2>
        <div className='items'>
        {
            items.map(
                item =>(
                <CollectionItem 
                    key={item.id} 
                    item={item}
                />)
            )
        }
        </div>
    </div>
    );
};

const mapStateToProps = (state,ownProps)=>({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);