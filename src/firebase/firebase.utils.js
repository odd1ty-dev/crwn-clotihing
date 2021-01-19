/******************************************
 *  Author : quantumRaven23   
 *  Created On : Sun Jan 17 2021
 *  File : firebase.utils.js
 *******************************************/
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyB36QllJgL8DSr6DOk8k2Le05HiRTYkhcw",
    authDomain: "crwn-db-d9e03.firebaseapp.com",
    projectId: "crwn-db-d9e03",
    storageBucket: "crwn-db-d9e03.appspot.com",
    messagingSenderId: "348191727678",
    appId: "1:348191727678:web:b065f19c231b51393f316f",
    measurementId: "G-LW09CDX5JG"
};

export const createUserProfileDocument = async (userAuth,additionalData) =>{
    if(!userAuth) return;
    
    const userRef = firestore.doc(`user/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const {displayName,email} = userAuth;
        const dateCreated = new Date();
        
        try{
            await userRef.set({
                displayName,
                email,
                dateCreated,
                ...additionalData
            })
        }catch(err){
            console.error('Error creating user',err.message)
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore(); 

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle =()=> auth.signInWithPopup(provider);

export default firebase;