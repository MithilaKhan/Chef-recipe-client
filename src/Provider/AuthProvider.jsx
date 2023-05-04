import React, {  createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';


export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({children}) => {
 const [user , setUser] = useState(null)
 const [loading , setLoading] = useState(true)

//  register 
 const register =(email , password) =>{
   setLoading(true)
   return createUserWithEmailAndPassword(auth, email, password)
 }

//  login form 
 const login = (email , password) =>{
   setLoading(true)
   return signInWithEmailAndPassword(auth, email, password)
 }

//  logOut form 
const logOut = () =>{
   setLoading(true)
   return signOut(auth)
}

//  observer auth state 
useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth , currentUser =>{
      setUser(currentUser)
      setLoading(false)
   });
   return ()=>{
      return unsubscribe()
   }
} ,[])
   const AuthInfo ={
      user,
      register ,
      login ,
      logOut ,
      loading
   }
   return (
      <AuthContext.Provider value={AuthInfo}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;