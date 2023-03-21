import { Avatar } from '@material-ui/core'
import firebase from 'firebase'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './UserSlice'
import { auth } from './Firebase'
import { getAuth, signOut } from "firebase/auth";
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

export default function HeaderOptions({Icon,title,avatar}) {
   const user = firebase.auth().currentUser;
  

  // const user=useSelector(selectUser);
  // console.log(user);
 
  return (
   
      <div className='header__options'>
     {Icon && <Icon /> }    
     {avatar && <Avatar name={avatar}  src={user.photoURL} />}
     <span >{title}</span>
    
    </div>

    
  )
}
