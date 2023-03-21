import React, { useEffect, useState } from 'react'
import {Avatar} from '@material-ui/core';
import PhotoIcon from '@material-ui/icons/Photo';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TodayIcon from '@material-ui/icons/Today';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Post from './Post';
import { db } from './Firebase';
import firebase from "firebase";
import { useSelector } from 'react-redux';
import { selectUser } from './UserSlice';
import Timestamp from 'firebase/firestore'


export default function Feed() {

  const user = firebase.auth().currentUser;

  const [posts,setPost]=useState([]);
  const [input,setInput]=useState();

  const submitPost=(e)=>{
     e.preventDefault();
     db.collection("posts").add({
       name:user.displayName,
       description:"Web developer",
       message:input,
       photoUrl:user.photoURL,
       createdAt:new Date().toLocaleString() + "",
       timestamp:firebase.firestore.FieldValue.serverTimestamp(),
       likes:[],
       comments:[]
      
     });
     setInput("");
}



useEffect(()=>{
db.collection("posts").orderBy("timestamp","desc").onSnapshot(snapshot=>{

setPost(snapshot.docs.map(doc=>({
     id:doc.id,
     data:doc.data()

})))

})
},[])


  return (
    <div className='feed'>
      <div className="feed__input">
        <div className="feed__form">
      <Avatar src={user.photoURL} />
      <form onSubmit={submitPost}>
        <input type="text" placeholder='Start a post' value={input} onChange={e=>setInput(e.target.value)}/>
        <input type="submit" />
      </form>
      </div>
   
      <div className="feed__options">
        <div className="option">
          <PhotoIcon style={{color:'#70b5f9'}}/>
          <span>Photo</span>
        </div>
        <div className="option">
          <YouTubeIcon style={{color:'#5f9b41'}}/>
          <span>Video</span>
        </div>
        <div className="option">
          <TodayIcon style={{color:'orange'}} />
          <span>Event</span>
        </div>
        <div className="option">
          <AssignmentIcon style={{color:'#e16745'}}  />
          <span>Write article</span>
        </div>
      </div>
      
      </div>
    
     { posts.map(({id , data : {name,description,message,photoUrl,comment,createdAt,likes}})=>{

        return <Post key={id} name={name} description={description} message={message}
        photoUrl={photoUrl} comment={comment} createdAt={createdAt} likes={likes} />
      })
    }
            
   
    </div>
  )
}
