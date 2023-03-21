import React, { useEffect } from 'react'
import '../styles/App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';
import Widget from './Widget';
import Login from './Login';
import { loginuser, logoutuser, selectUser } from './UserSlice';
import {useDispatch, useSelector}  from 'react-redux';
import { auth } from './Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import {BrowserRouter , Routes, Route} from "react-router-dom";
import Home from './Home';
import Dropdown from './Dropdown';
import firebase from 'firebase';


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
 
},[dispatch])


  return (
    <>

<BrowserRouter>
    { !user?(<Login/>) :(
      
        <Routes>
          <Route exact path="/" element={<Home /> }>   
          </Route>
         
          <Route exact path="/login" element={<Login/> }>   
          </Route>

        </Routes>
   
      )

    }
     </BrowserRouter>
 </>
  )
}


export default App;
