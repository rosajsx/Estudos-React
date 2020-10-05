import React, {useState, useEffect} from 'react';
import * as firebase from 'firebase/app';
import firebaseConfig from '../../service/firebase/configs';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

//Por algum motivo não funciona sem esta instalação
import firebaseui from 'firebaseui';

//inicia a aplicação firebase
firebase.initializeApp(firebaseConfig);
//Configuração da firebaseUI
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/signedIn',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false
  }
};



function SignIn(){
   const [state, setState] = useState(false);


   useEffect(()=>{
     firebase.auth().onAuthStateChanged((user) => {
      
      if(user){
        setState(true); 
      }else{
        setState(false);
      }
    })
   },[state])

  return(
    <div>
      
      {!state && 
      <div>
      <h1>Por favor logue na aplicação!</h1>
      <StyledFirebaseAuth uiCallback={ui => ui.disableAutoSignIn()} uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
      
        </div>
        }
       
      
      
      {state &&
      <>
       <img src={firebase.auth().currentUser.photoURL}/>
       <h1>Nome: {firebase.auth().currentUser.displayName}</h1>
       <h1>Email: {firebase.auth().currentUser.email}</h1>
       <button onClick={()=> firebase.auth().signOut()}> sair </button>
        {console.log(firebase.auth().currentUser)}
       </>
      }

    </div>
  )
}




export default SignIn;