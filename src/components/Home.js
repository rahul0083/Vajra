import React from 'react'
import {useDispatch, useSelector}  from 'react-redux';
import { loginuser, logoutuser, selectUser } from './UserSlice';
function Home() {

  const user=useSelector(selectUser)
  const dispatch=useDispatch();

  const logout_user=()=>{
    dispatch(logoutuser())
  }
  return (
    <div style={{padding:"100px 600px",color:"green",fontSize:"40px",display:"inline",textAlign:"center"}}>
    <p>Congratulations !! Sign in succesfully..</p> 
    <button onClick={logout_user} style={{color:"red",fontSize:"20px",display:"inline",textAlign:"center",alignItems:"center",marginLeft:"600px"}}>Logout</button>
    </div>
  )
}

export default Home
