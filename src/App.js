/******************************************
 *  Author : quantumRaven23   
 *  Created On : Fri Jan 15 2021
 *  File : App.js
 *******************************************/
//React
import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

//Redux
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';

//Components
import HomePage from './Views/homepage/homepage.component';
import ShopPage from './Views/shop/shop.component';
import Header from './Components/header/header.component'; 
import SignInUpPage from './Views/signInUpPage/signInUpPage.component';

//Styles
import './App.css';

//Misc
import { auth,createUserProfileDocument } from './firebase/firebase.utils';



class App extends React.Component {
  

  unsubscribeFromAuth=null;
  
  componentDidMount(){
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot =>{
            
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            
            });
        });
      }else{
        setCurrentUser(userAuth);
      }

    })
  } 

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route exact path='/signin' render={
            () => this.props.currentUser ? 
              (<Redirect to='/'/>)
              : 
              (<SignInUpPage/>) 
            }/>
        </Switch>
      </div>
    );
  }
  
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps =dispatch=>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
