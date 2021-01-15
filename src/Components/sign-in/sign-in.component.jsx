/******************************************
 *  Author : quantumRaven23   
 *  Created On : Fri Jan 15 2021
 *  File : sign-in.component.jsx
 *******************************************/
//React
import React from 'react';

//Components
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

//Styles
import './sign-in.styles.scss'

//Misc

class SignIn extends React.Component{
    constructor(props){
        super(props);
        
        this.state={
            email:'',
            password:''
        }
    };

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email:'', password:''})
    };

    handleChange = event => {
        const { value , name } = event.target;

        this.setState({ [name] : value });
    };

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type="email" 
                        handleChange={this.handleChange}
                        value={this.state.email} 
                        label="Email"
                        required
                    />
                    
                    <FormInput 
                        name='password' 
                        type="password" 
                        handleChange={this.handleChange}
                        value={this.state.password} 
                        label="Password"
                        required
                    />

                    <CustomButton type="submit" value="Submit Form">
                        Sign In
                    </CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn
