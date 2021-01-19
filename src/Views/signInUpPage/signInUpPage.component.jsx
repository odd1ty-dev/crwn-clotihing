
//React
import React from 'react';

//Components
import SignIn from "../../Components/sign-in/sign-in.component";
import SignUp from "../../Components/sign-up/sign-up.component";

//Styles
import './signInUpPage.styles.scss';
//Misc


const SignInUpPage=()=>(
    <div className='signInUpPage'>
        <SignIn/>
        <SignUp/>
    </div>
);

export default SignInUpPage;