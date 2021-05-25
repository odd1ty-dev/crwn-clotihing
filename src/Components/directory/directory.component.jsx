/******************************************
 *  Author : quantumRaven23   
 *  Created On : Fri Jan 15 2021
 *  File : directory.component.jsx
 *******************************************/
//React
import React from 'react';

//Redux
import {connect} from 'react-redux';
import {selectDirectorySections} from '../../redux/directory/directory.selectors';
import {createStructuredSelector} from 'reselect';

//Components
import MenuItem from '../menu-item/menu-item.component';

//Styles
import './directory.styles.scss';

//Misc


const Directory = ({sections}) =>(
  <div className='directory-menu'>
      {
      sections.map( ({id,...otherSectionProps}) =>(
          <MenuItem key={id} {...otherSectionProps}/>
      ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);