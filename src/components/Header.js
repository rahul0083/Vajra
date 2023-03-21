import React from 'react'
import '../styles/App.css';
import firebase from 'firebase';
import HeaderOptions from './HeaderOptions';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {Avatar} from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectUser } from './UserSlice';
import db, { auth, provider, storage } from "./Firebase";
import Dropdown from './Dropdown';
import { useState } from "react";
export default function Header() {

  const user = firebase.auth().currentUser;
 

  // Then get the username by using:
  const name = user.displayName;


  // const user=useSelector(selectUser);
  return (
    <div className='header'>
       <div className="header__left">
       <div className="header__logo">
            <img src='https://cdn-icons-png.flaticon.com/512/3536/3536505.png' />
        </div>
        <div className="header__search">
           <SearchIcon />
           <input type="text" placeholder='Search' />
       </div>
       </div>
        
       <div className="header__right">
           <HeaderOptions Icon={HomeIcon} title="Home"/>
           <HeaderOptions Icon={PeopleIcon} title="MyNetwork"/>
           <HeaderOptions Icon={BusinessCenterIcon} title="Jobs"/>
           <HeaderOptions Icon={MessageIcon} title="Messaging"/>
           <HeaderOptions Icon={NotificationsIcon} title="Notifications"/>
           <HeaderOptions avatar={Avatar}  title={name}/>
            <Dropdown />
       </div>
    </div>
  )
}
