/******************************************
 *  Author : quantumRaven23   
 *  Created On : Fri Jan 15 2021
 *  File : homepage.component.jsx
 *******************************************/
//React
import React from 'react';

//Components
import Directory from '../../Components/directory/directory.component';

//Styles
import './homepage.styles.scss'

//Misc


const HomePage =()=>(
    <div className='homepage'>
        <Directory/>
    </div>
);

export default HomePage;