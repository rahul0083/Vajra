import { auth } from './Firebase';
import 'firebase/auth';
import { updateProfile } from 'firebase/auth';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { loginuser, selectUser } from './UserSlice';
import { useLocation } from 'react-router-dom';
import { orange } from '@material-ui/core/colors';


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
    
    <div >
        <h3 style={{color:"orange",textAlign:"center"}}>Sign in</h3> <hr />
        <h3 style={{color:"#004F95"}}>Sign in to your account</h3>
     
        {

             signUp===true ? (<form onSubmit={register}>
             
             <input type="text" placeholder='Full Name' value={name} onChange={(e)=>setName(e.target.value)}  />
                <br />        
             <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}  />
             <br />
             <input type="password" placeholder='Password'value={password} onChange={(e)=>setPassword(e.target.value)}  />
             <br />
           
             <input type="submit" placeholder='Sign Up' value="Sign Up"  />
             
             <h4 style={{textAlign:"center"}}>Already a member ? <span onClick={e=>setSignUp(false)}>Sign in here</span></h4>
             
             
             </form>  ):
             (<form onSubmit={signIn} >
        
             <label htmlFor="email">Email id</label> <br />
             <input type="email" placeholder='Email'   onChange={(e)=>setEmail(e.target.value)}/>
             <br />
             <label htmlFor="password">Password</label> <br />
             <input type="password" placeholder='Password'  onChange={(e)=>setPassword(e.target.value)} />
             <br />
             <a href="/" style={{color:"red"}}>Forget Password</a> <br />
             <input type="submit" placeholder='Sign In' value="Sign in" />
             
             
             <h4 style={{textAlign:"center"}}>New to Vajra ? <span onClick={e=>setSignUp(true)}>Sign Up Now</span></h4>
             
             
             </form> )
         }
     
     
        

          
  

    </div>

    </>
  )
 
}
