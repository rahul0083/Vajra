import { Avatar } from '@material-ui/core'
import React, { useState,useEffect } from 'react'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import CommentIcon from '@material-ui/icons/Comment';
import LoopIcon from '@material-ui/icons/Loop';
import SendIcon from '@material-ui/icons/Send';
import { blue } from '@material-ui/core/colors';
import { db } from './Firebase';
import firebase from 'firebase';
// import Like from './Like';
import {doc,updateDoc,arrayRemove,arrayUnion} from 'firebase/firestore'
import PublicIcon from '@material-ui/icons/Public';


export default function Post({name,description,message,photoUrl,comment,createdAt}) {


  const [isLike,setIsLike]=useState(false)

  const likeclick=()=>{
   
    setIsLike(true)

  }

 
  const user = firebase.auth().currentUser;

  // const [comments,setComments]=useState([]);
  const [inputcom,setInputCom]=useState();
  const [posts,setPost]=useState([]);

//comment
  // const commentPost=(e)=>{
  //   e.preventDefault();
  //    db.collection("posts").add({
  //         comment:inputcom,
          
          
  //    });
  //    setInputCom("");
  
  // }

  // useEffect(()=>{
  //   db.collection("posts").orderBy("timestamp","desc").onSnapshot(snapshot=>{
    
  //   setPost(snapshot.docs.map(doc=>({
  //        id:doc.id,
  //        data:doc.data()
    
  //   })))
    
  //   })
  //   },[])



   return (
    <div className='post'>
      <div className="post__header">
        <div className="post__header__Left">
           <Avatar src={photoUrl} />
           <div className="post_profile_detail">
            <h3>{name}</h3>
            <p>{description}</p>
            <p>{createdAt} <span className='publicicon'><PublicIcon /></span></p>
           
           </div>
        </div>
        <div className="post__header__Right">
            <MoreHorizIcon/>
            </div>
           
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__footer">
        <div className="post__footer__option"   >
        <ThumbUpAltIcon />
            <span onClick={likeclick} >
            
              Like
              </span>
        </div>
       
      
        <div className="post__footer__option">
            <CommentIcon />
            <span>Comment</span>
        </div>
        <div className="post__footer__option">
            <LoopIcon />
            <span>Repost</span>
        </div>
        <div className="post__footer__option">
            <SendIcon />
            <span>Share</span>
        </div>
      </div>
      {/* <div className="comment">
      <form onSubmit={commentPost} >
        <input type="text" placeholder='Add a comment..' value={inputcom} onChange={e=>setInputCom(e.target.value)}/>
       <input type="submit" value="Post" />
        
      </form>
      </div> */}
      
    </div>
  )
}
