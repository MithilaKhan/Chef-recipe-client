import React, {  createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../Firebase/firebase.config';


export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({children}) => {
 const [user , setUser] = useState(null)
 const [loading , setLoading] = useState(true)

 const register =(email , password) =>{
   return createUserWithEmailAndPassword(auth, email, password)
 }

 const login = (email , password) =>{
   return signInWithEmailAndPassword(auth, email, password)
 }

useEffect(()=>{

} ,[])
   const AuthInfo ={
      user,
      register ,
      login
   }
   return (
      <AuthContext.Provider value={AuthInfo}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;