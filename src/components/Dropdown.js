import React from "react"
import { logoutuser } from "./UserSlice"
import { useDispatch } from 'react-redux';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { selectUser } from "./UserSlice";
import { useSelector } from 'react-redux';
export default function Dropdown() {

  const user = useSelector(selectUser);

    const dispatch=useDispatch();
    const signout=()=>{
    
     dispatch(logoutuser())

    }
  return (

    <div className="dropdown">
    <button className="dropbtn"><ArrowDropDownIcon /></button>
    <div className="dropdown-content">
      <a onClick={signout}>LogOut</a>
    </div>
  </div>
  )
}
