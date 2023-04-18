import React, { useEffect } from 'react'
import '../styles/App.css';
import Login from './Login';
import { loginuser, logoutuser, selectUser } from './UserSlice';
import {useDispatch, useSelector}  from 'react-redux';
import { auth } from './Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Home from './Home';
import firebase from 'firebase';
import Navbar from './Navbar';
import Content from './Content';
import Footer from './Footer';


const App = () => {

  
   const user=useSelector(selectUser)

const dispatch=useDispatch();

useEffect(()=>{

  auth.onAuthStateChanged(userAuth=>{
     if(userAuth){
      dispatch(loginuser({

        email:userAuth.email,
        uid:userAuth.uid,
        photoURL:userAuth.photoURL,
        displayName:userAuth.displayName
       

     }))
     }
     else{
         dispatch(logoutuser())
     }

  })
 
},[])


  return (
    <>
   <Navbar />

    { !user?(
   <Content />

    ) :(
          <Home />  

      )

    }
 <Footer />
 
 </>
  )
}


export default App;
