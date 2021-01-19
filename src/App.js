/******************************************
 *  Author : quantumRaven23   
 *  Created On : Fri Jan 15 2021
 *  File : App.js
 *******************************************/
//React
import React from 'react';
import {Switch,Route} from 'react-router-dom';

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
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth=null;
  
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot =>{
          this.setState({
            currentUser:{
              id:snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }else{
        this.setState({currentUser:userAuth})
      }

    })
  } 

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/signin' component={SignInUpPage}/>
        </Switch>
      </div>
    );
  }
  
}

export default App;
