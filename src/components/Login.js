import { auth } from './Firebase';
import 'firebase/auth';
import { updateProfile } from 'firebase/auth';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { loginuser, selectUser } from './UserSlice';
import { useLocation } from 'react-router-dom';


export default function Login() {

    const [signUp,setSignUp]=useState(false);
    const [name,setName]=useState("");
    const [photoURL,setPhotoURL]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const dispatch=useDispatch();
   
    

    const register=(e)=>{
     e.preventDefault();

     if(!email){
      return alert("Email is required");
     }
     if(!name){
      return alert("Name is required");
     }
     if(!password){
      return alert("Password is required");
     }
     if(!photoURL){
      return alert("PhotoUrl is required");
     }
      
    
     
      auth.createUserWithEmailAndPassword(email,password).then((userAuth)=>{

        console.log(userAuth)


       

         userAuth.updateProfile({

           displayName:name,
            photoURL:photoURL
           }).then(()=>{
        
                  dispatch(loginuser({

                     email:userAuth.email,
                     uid:userAuth.uid,
                     photoURL:userAuth.photoURL,
                     displayName:userAuth.name
                    

                  })) 

                 } )
               

      }).catch(error=>alert(error));

      setName("");
      setPhotoURL("");
      setEmail("");
      setPassword("");

    }

    const signIn=(e)=>{
      
    e.preventDefault();
    
    
    if(!email){
      return alert("Email is required");
     }

     if(!password){
      return alert("Password is required");
     }


     auth.signInWithEmailAndPassword(email, password)
     .then((user) => {
     
       
      dispatch(loginuser({

                     email:user.email,  
                     uid:user.uid,
                     photoURL:user.photoURL,
                     displayName:user.name
                    
      }))
                  
     })
     .catch(error=>alert(error))

    //  setEmail("");
    //  setPassword("");
    }
  return (
<>
    
    <div className='loginscreen'>

        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png' />
     
        {

             signUp===true ? (<form onSubmit={register}>
        
             <input type="text" placeholder='Full Name' value={name} onChange={(e)=>setName(e.target.value)}  />
             
             <input type="text" placeholder='Profile picture url' value={photoURL} onChange={(e)=>setPhotoURL(e.target.value)} />
             
             <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}  />
             
             <input type="password" placeholder='Password'value={password} onChange={(e)=>setPassword(e.target.value)}  />
             
             <input type="submit" placeholder='Sign Up'   />
             
             <h4>Already a member ? <span onClick={e=>setSignUp(false)}>Login Here</span></h4>
             
             
             </form>  ):
             (<form onSubmit={signIn} >
        
        
             <input type="email" placeholder='Email'   onChange={(e)=>setEmail(e.target.value)}/>
             
             <input type="password" placeholder='Password'  onChange={(e)=>setPassword(e.target.value)} />
             
             <input type="submit" placeholder='Sign In' />
             
             
             <h4>Not a member ? <span onClick={e=>setSignUp(true)}>Register Here</span></h4>
             
             
             </form> )
         }
     
     
        

          
  

    </div>

    </>
  )
 
}
