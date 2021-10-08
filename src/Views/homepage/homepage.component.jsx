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
import {HomePageContainer} from './homepage.styles'

//Misc


const HomePage =()=>(
    <HomePageContainer>
        <Directory/>
    </HomePageContainer>
);

export default HomePage;